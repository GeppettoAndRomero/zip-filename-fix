import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { waitReady, convert } from './_helpers';

test.describe('filename fix', () => {
  test('fixes mojibake names and downloads a valid zip, no upload', async ({ page }) => {
    const external: string[] = [];
    page.on('request', (req) => {
      const u = req.url();
      if (!u.startsWith('http://localhost:4321') && !u.startsWith('data:') && !u.startsWith('blob:')) external.push(u);
    });
    await page.goto('/zip-filename-fix/');
    await waitReady(page);
    const download = await convert(page);
    expect(download.suggestedFilename()).toMatch(/\.zip$/);
    const buf = readFileSync((await download.path()) as string);
    expect(buf[0]).toBe(0x50);
    expect(buf[1]).toBe(0x4b); // 'PK'
    await expect(page.locator('[data-testid="fix-result"]')).toContainText('1');
    expect(external, external.join(', ')).toHaveLength(0);
  });
});
