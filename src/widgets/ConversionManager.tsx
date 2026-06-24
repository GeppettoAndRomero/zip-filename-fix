/**
 * ConversionManager (zip-filename-fix).
 * 文字化けした .zip を 1 つ受け取り、CP932 のファイル名を UTF-8 へ直して
 * 新しい .zip をダウンロードする。中身は変更しない。メインスレッド（@zip.js）。
 */

import { useState, useEffect, useCallback } from 'preact/hooks';
import { AppCard } from './AppCard';
import { ErrorToast } from './ErrorToast';
import { fixZipNames } from '@/utils/zipEngine';
import { ui } from '@/i18n/ui';

interface ErrorToastItem {
  id: string;
  message: string;
}

interface ConversionManagerProps {
  locale?: string;
}

export function ConversionManager({ locale = 'en' }: ConversionManagerProps) {
  const t = (ui as any)[locale] ?? ui.en;
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ name: string; total: number; fixed: number } | null>(null);
  const [errorToasts, setErrorToasts] = useState<ErrorToastItem[]>([]);

  const showErrorToast = useCallback((message: string) => {
    const id = `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setErrorToasts((prev) => [...prev, { id, message }]);
  }, []);
  const removeErrorToast = useCallback((id: string) => {
    setErrorToasts((prev) => prev.filter((e) => e.id !== id));
  }, []);

  useEffect(() => {
    (globalThis as Record<string, unknown>).__toolReady = true;
  }, []);

  const process = useCallback(
    async (file: File) => {
      if (busy) return;
      setBusy(true);
      setResult(null);
      try {
        const { blob, total, fixed } = await fixZipNames(file);
        setResult({ name: file.name, total, fixed });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name.replace(/\.zip$/i, '') + '-fixed.zip';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      } catch (error) {
        showErrorToast(`${file.name}: ${error instanceof Error ? error.message : 'Failed'}`);
      } finally {
        setBusy(false);
      }
    },
    [busy, showErrorToast]
  );

  const handleFiles = useCallback(
    (files: File[]) => {
      const zip = files.find((f) => f.name.toLowerCase().endsWith('.zip'));
      if (!zip) {
        if (files.length > 0) showErrorToast(t.errUnsupported.replace('{name}', files[0].name));
      } else {
        process(zip);
      }
      window.dispatchEvent(new CustomEvent('filesProcessed'));
    },
    [process, showErrorToast, t]
  );

  useEffect(() => {
    const handler = (e: Event) => handleFiles((e as CustomEvent<File[]>).detail);
    window.addEventListener('filesDropped', handler);
    return () => window.removeEventListener('filesDropped', handler);
  }, [handleFiles]);

  return (
    <div>
      <AppCard>
        <div style="margin-bottom: var(--space-4);">
          <h3 style="margin: 0 0 var(--space-1) 0; font-size: var(--fs-4); font-weight: 600;">
            {t.uploadHeading}
          </h3>
          <p style="margin: 0; font-size: var(--fs-2); color: var(--color-subtle);">
            {t.uploadSubtitle}
          </p>
        </div>

        <div
          style={{
            padding: 'var(--space-6)',
            border: '2px dashed var(--color-border)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface)',
            textAlign: 'center',
            marginBottom: 'var(--space-4)',
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <div style="font-size: 3rem; margin-bottom: var(--space-2);">🈚</div>
          <div style="font-size: var(--fs-3); font-weight: 600; margin-bottom: var(--space-2);">
            {t.dropClick}
          </div>
          <div style="font-size: var(--fs-1); color: var(--color-subtle);">{t.dropOr}</div>
          <div style="font-size: var(--fs-1); color: var(--color-subtle); margin-top: var(--space-1);">
            {t.dropSupported}
          </div>
          <input
            id="file-input"
            type="file"
            accept=".zip,application/zip"
            onChange={(e) => {
              handleFiles(Array.from(e.currentTarget.files || []));
              e.currentTarget.value = '';
            }}
            style="display: none;"
          />
        </div>

        {busy && <p style="color: var(--color-subtle);">{t.fixing ?? 'Fixing…'}</p>}

        {result && (
          <div data-testid="fix-result" style="padding: var(--space-4); background: var(--color-bg); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
            <strong>{result.name}</strong>
            <p style="margin: var(--space-2) 0 0 0; font-size: var(--fs-2); color: var(--color-subtle);">
              {result.fixed > 0
                ? (t.fixedMsg ?? 'Fixed {fixed} of {total} names — downloading the fixed archive.')
                    .replace('{fixed}', String(result.fixed))
                    .replace('{total}', String(result.total))
                : (t.nothingMsg ?? 'Names already look fine ({total} entries) — nothing to fix.').replace(
                    '{total}',
                    String(result.total)
                  )}
            </p>
          </div>
        )}
      </AppCard>

      {errorToasts.length > 0 && (
        <div className="error-toast-container" aria-label={t.notificationsAria}>
          {errorToasts.map((toast) => (
            <ErrorToast key={toast.id} id={toast.id} message={toast.message} onClose={removeErrorToast} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
