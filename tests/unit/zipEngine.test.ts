import { describe, it, expect } from 'vitest';
import { configure, ZipReader, BlobReader } from '@zip.js/zip.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { fixZipNames } from '@/utils/zipEngine';

configure({ useWebWorkers: false });
const buf = readFileSync(fileURLToPath(new URL('../fixtures/zip/mojibake.zip', import.meta.url)));
const mojibake = () => new File([buf], 'mojibake.zip', { type: 'application/zip' });

async function names(blob: Blob): Promise<string[]> {
  const r = new ZipReader(new BlobReader(blob));
  const e = await r.getEntries();
  await r.close();
  return e.map((x) => x.filename);
}

describe('fixZipNames', () => {
  it('re-decodes a CP932 filename to correct UTF-8', async () => {
    const { blob, total, fixed } = await fixZipNames(mojibake());
    expect(total).toBe(1);
    expect(fixed).toBe(1);
    expect(await names(blob)).toEqual(['メモ帳.txt']);
  });

  it('marks the rewritten names as UTF-8', async () => {
    const { blob } = await fixZipNames(mojibake());
    const r = new ZipReader(new BlobReader(blob));
    const e = await r.getEntries();
    await r.close();
    expect(e[0].filenameUTF8).toBe(true);
  });

  it('does not change file contents', async () => {
    const { blob } = await fixZipNames(mojibake());
    const r = new ZipReader(new BlobReader(blob));
    const e = await r.getEntries();
    const { TextWriter } = await import('@zip.js/zip.js');
    const text = await e[0].getData!(new TextWriter());
    await r.close();
    expect(text).toBe('これは日本語のメモです。');
  });

  it('leaves an already-UTF-8 zip unchanged (no double-decode)', async () => {
    // Build a clean UTF-8 zip, run it through, expect fixed=0 and same name.
    const { ZipWriter, BlobWriter, TextReader } = await import('@zip.js/zip.js');
    const w = new ZipWriter(new BlobWriter('application/zip'), { useUnicodeFileNames: true });
    await w.add('日本語.txt', new TextReader('x'));
    const clean = new File([await w.close()], 'clean.zip', { type: 'application/zip' });
    const { fixed } = await fixZipNames(clean);
    expect(fixed).toBe(0);
  });
});
