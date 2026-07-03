import { describe, it, expect } from 'vitest';
import { AppError, resolveErrorMessage } from '@/utils/appError';
import { ui } from '@/i18n/ui';

describe('resolveErrorMessage', () => {
  it('maps the code to localized strings per locale', () => {
    expect(resolveErrorMessage(new AppError('errEncryptedArchive'), ui.en)).toBe('Encrypted archives are not supported.');
    expect(resolveErrorMessage(new AppError('errEncryptedArchive'), ui.ja)).toBe('暗号化されたアーカイブには対応していません。');
    expect(resolveErrorMessage(new AppError('errEncryptedArchive'), ui.de)).toBe('Verschlüsselte Archive werden nicht unterstützt.');
  });

  it('falls back to the localized generic message for unknown errors', () => {
    expect(resolveErrorMessage(new Error('boom'), ui.es)).toBe(ui.es.errConversionFailed);
  });

  it('every locale defines the mapped codes', () => {
    for (const loc of ['en', 'ja', 'zh', 'de', 'es'] as const)
      for (const c of ['errEncryptedArchive', 'errConversionFailed'])
        expect((ui as any)[loc][c], `${loc}.${c}`).toBeTruthy();
  });
});
