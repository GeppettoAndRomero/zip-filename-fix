import type { ToolContent } from './types';

// zip-filename-fix.

export const en: ToolContent = {
  htmlLang: 'en',

  meta: {
    title: 'Fix Garbled ZIP Filenames (Mojibake) in Your Browser — No Upload | runlocally',
    description:
      'Repair garbled (mojibake) filenames inside a .zip — the Shift_JIS / CP932 names that come out broken between Japanese Windows and Mac. Re-decoded to UTF-8 in your browser. Nothing is uploaded. Open source, works offline.',
    ogTitle: 'Fix Garbled ZIP Filenames (Mojibake) — In Your Browser, No Upload',
    ogDescription:
      'Drop a .zip with garbled (mojibake) filenames; it re-decodes the Shift_JIS / CP932 names to UTF-8 and gives you a fixed archive. Nothing is uploaded. Open source, works offline.',
  },

  hero: {
    h1: 'Fix Garbled ZIP Filenames',
    tagline:
      'Repair mojibake filenames inside a .zip — the broken Shift_JIS / CP932 names from Japanese Windows. In your browser. Nothing is uploaded.',
  },

  intro: {
    h2: 'Fix garbled zip filenames, in your browser',
    paras: [
      'When a .zip is made on Japanese (or other CJK) Windows, the filenames are often stored in a legacy code page — Shift_JIS / CP932 — without the flag that marks them as UTF-8. Open that archive on a Mac, or on a differently-configured Windows, and the names come out as mojibake: garbled characters like 譁・喧縺・ instead of the real filename. It happens constantly when files move between macOS and Japanese Windows.',
      'Drop one .zip here and it re-decodes those legacy filenames back to proper UTF-8, then writes a new .zip with the UTF-8 flag set — so the names extract correctly everywhere. The file contents are copied through unchanged; only the filenames are repaired. Names that are already stored correctly as UTF-8 are left exactly as they are, so nothing gets double-decoded.',
    ],
  },

  privacy: {
    h2: 'Why your archive stays on your device',
    lead: 'Privacy here is structural, not a promise. There is no upload step because there is no server to upload to:',
    points: [
      'The .zip is read and rebuilt entirely in your browser.',
      'The page is served as static files and makes no request with your archive.',
      'The source is open and anyone can read it (MIT).',
      'It works offline, which is only possible because nothing leaves the device.',
    ],
    note: 'If you want to check for yourself, open your browser\'s Network panel while it runs — no request carries your file.',
    sourceLinkText: 'Read the source.',
  },

  howto: {
    h2: 'How to use it',
    steps: [
      {
        h3: 'Drop your .zip',
        p: 'Click to choose a .zip with garbled filenames, or drop it anywhere on the page. One archive at a time.',
      },
      {
        h3: 'It re-decodes the names',
        p: 'The legacy Shift_JIS / CP932 filenames are decoded back to UTF-8. File contents are untouched; names already in UTF-8 are left as-is.',
      },
      {
        h3: 'Download the fixed archive',
        p: 'A new .zip is written with the UTF-8 flag set and downloaded automatically. It tells you how many names it fixed.',
      },
    ],
  },

  faqHeading: 'FAQ',
  faq: [
    {
      q: 'Is my .zip uploaded anywhere?',
      a: 'No. The archive is read and rebuilt entirely in your browser. There is no server component, so your file has no path off your device. The source is open and you can confirm this in your browser\'s Network panel.',
    },
    {
      q: 'Why do zip filenames turn into garbled characters?',
      a: 'A .zip made on Japanese (or other CJK) Windows often stores filenames in a legacy code page — Shift_JIS / CP932 — without setting the flag that says "these names are UTF-8." When the archive is opened on a Mac or a differently-configured Windows, the bytes are read as the wrong encoding and you get mojibake (garbled characters) instead of the real names.',
    },
    {
      q: 'What does this tool actually change?',
      a: 'Only the filenames. It re-decodes the legacy Shift_JIS / CP932 names to proper UTF-8 and writes a new .zip with the UTF-8 flag set, so the names extract correctly everywhere. Every file\'s contents are copied through byte-for-byte unchanged.',
    },
    {
      q: 'Will it break names that are already correct?',
      a: 'No. Names already stored correctly as UTF-8 are detected and left exactly as they are, so they are never double-decoded into new mojibake. The tool reports how many names it actually fixed.',
    },
    {
      q: 'Does it support password-protected (encrypted) archives?',
      a: 'No. Encrypted archives are not supported, and the tool tells you clearly rather than producing a broken file. Decrypt or re-save the archive without a password first, then fix the filenames.',
    },
    {
      q: 'Does it work offline?',
      a: 'Yes. It is a PWA. After the first visit it is cached, so it works without a network connection. You can also install it to your home screen.',
    },
  ],

  footer: {
    openSourceLabel: 'Open source (MIT)',
    partOf: 'part of',
    brandTail: '— small tools that run locally on your device.',
    colophon:
      'Built and maintained by Geppetto. Some code is written with AI assistance; all review and decisions are the maintainer\'s.',
    securityText: 'Security',
  },
};
