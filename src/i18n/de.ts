import type { ToolContent } from './types';

// Deutsch.

export const de: ToolContent = {
  htmlLang: 'de',

  meta: {
    title: 'Kaputte Dateinamen in ZIP reparieren — im Browser, ohne Upload | runlocally',
    description:
      'Repariere kaputte Dateinamen in einer .zip — den Zeichensalat, der entsteht, wenn die Namen in einem alten Zeichensatz (Shift_JIS / CP932) stecken und auf einem anderen System falsch dekodiert werden. Die Namen werden im Browser neu nach UTF-8 dekodiert. Nichts wird hochgeladen. Open Source, läuft offline.',
    ogTitle: 'Kaputte Dateinamen in ZIP reparieren — im Browser, ohne Upload',
    ogDescription:
      'Zieh eine .zip mit kaputten Dateinamen hierher; die alten Shift_JIS- / CP932-Namen werden neu nach UTF-8 dekodiert und du bekommst ein repariertes Archiv. Nichts wird hochgeladen. Open Source, läuft offline.',
  },

  hero: {
    h1: 'Kaputte ZIP-Dateinamen reparieren',
    tagline:
      'Repariere den Zeichensalat in den Dateinamen einer .zip — die kaputten Namen aus einem alten Zeichensatz wie Shift_JIS / CP932. Im Browser. Nichts wird hochgeladen.',
  },

  intro: {
    h2: 'Kaputte ZIP-Dateinamen reparieren, im Browser',
    paras: [
      'Wird eine .zip auf einem japanischen (oder anderen ostasiatischen) Windows erstellt, stecken die Dateinamen oft in einem alten Zeichensatz — Shift_JIS / CP932 — ohne das Flag, das sie als UTF-8 kennzeichnet. Öffnest du dieses Archiv auf einem Mac oder einem Windows mit anderen Spracheinstellungen, werden die Bytes als falscher Zeichensatz gelesen und du bekommst Zeichensalat: kryptische Zeichen wie 譁・喧縺・ statt des echten Dateinamens.',
      'Zieh eine .zip hierher, und die alten Dateinamen werden zurück nach UTF-8 dekodiert. Anschließend wird eine neue .zip mit gesetztem UTF-8-Flag geschrieben — damit die Namen überall richtig entpackt werden. Die Dateiinhalte werden unverändert übernommen; nur die Namen werden repariert. Namen, die schon korrekt als UTF-8 vorliegen, bleiben genau so, wie sie sind, damit nichts ein zweites Mal falsch dekodiert wird.',
    ],
  },

  privacy: {
    h2: 'Warum dein Archiv auf deinem Gerät bleibt',
    lead: 'Datenschutz ist hier strukturell, kein Versprechen. Es gibt keinen Upload-Schritt, weil es keinen Server gibt, zu dem etwas hochgeladen werden könnte:',
    points: [
      'Die .zip wird vollständig in deinem Browser gelesen und neu aufgebaut.',
      'Die Seite wird als statische Dateien ausgeliefert und sendet keine Anfrage mit deinem Archiv.',
      'Der Quellcode ist offen und kann von allen eingesehen werden (MIT).',
      'Die Seite funktioniert offline – was nur möglich ist, weil nichts das Gerät verlässt.',
    ],
    note: 'Wenn du es selbst prüfen willst, öffne während der Reparatur das Netzwerk-Panel deines Browsers – keine Anfrage trägt deine Datei nach außen.',
    sourceLinkText: 'Quellcode ansehen.',
  },

  howto: {
    h2: 'So benutzt du es',
    steps: [
      {
        h3: 'Zieh deine .zip hierher',
        p: 'Klicke, um eine .zip mit kaputten Dateinamen auszuwählen, oder zieh sie irgendwo auf die Seite. Ein Archiv nach dem anderen.',
      },
      {
        h3: 'Die Namen werden neu dekodiert',
        p: 'Die alten Shift_JIS- / CP932-Dateinamen werden zurück nach UTF-8 dekodiert. Die Dateiinhalte bleiben unangetastet; Namen, die schon UTF-8 sind, bleiben unverändert.',
      },
      {
        h3: 'Lade das reparierte Archiv herunter',
        p: 'Eine neue .zip mit gesetztem UTF-8-Flag wird geschrieben und automatisch heruntergeladen. Du siehst, wie viele Namen repariert wurden.',
      },
    ],
  },

  faqHeading: 'Häufige Fragen',
  faq: [
    {
      q: 'Wird meine .zip irgendwohin hochgeladen?',
      a: 'Nein. Das Archiv wird vollständig in deinem Browser gelesen und neu aufgebaut. Es gibt keine Serverkomponente, also gibt es für deine Datei keinen Weg vom Gerät. Der Quellcode ist offen und du kannst das im Netzwerk-Panel deines Browsers nachprüfen.',
    },
    {
      q: 'Warum werden ZIP-Dateinamen zu kaputten Zeichen?',
      a: 'Eine .zip, die auf einem japanischen (oder anderen ostasiatischen) Windows erstellt wurde, speichert die Dateinamen oft in einem alten Zeichensatz — Shift_JIS / CP932 — ohne das Flag zu setzen, das sagt: „Diese Namen sind UTF-8.“ Öffnest du das Archiv auf einem Mac oder einem Windows mit anderen Spracheinstellungen, werden die Bytes als falscher Zeichensatz gelesen, und statt der echten Namen bekommst du Zeichensalat.',
    },
    {
      q: 'Was genau ändert dieses Tool?',
      a: 'Nur die Dateinamen. Es dekodiert die alten Shift_JIS- / CP932-Namen neu nach UTF-8 und schreibt eine neue .zip mit gesetztem UTF-8-Flag, damit die Namen überall richtig entpackt werden. Der Inhalt jeder Datei wird Byte für Byte unverändert übernommen.',
    },
    {
      q: 'Beschädigt es Namen, die schon korrekt sind?',
      a: 'Nein. Namen, die schon korrekt als UTF-8 vorliegen, werden erkannt und genau so belassen, wie sie sind — sie werden also nie ein zweites Mal in neuen Zeichensalat verwandelt. Das Tool zeigt dir, wie viele Namen es tatsächlich repariert hat.',
    },
    {
      q: 'Unterstützt es passwortgeschützte (verschlüsselte) Archive?',
      a: 'Nein. Verschlüsselte Archive werden nicht unterstützt, und das Tool sagt dir das klar, statt eine kaputte Datei zu erzeugen. Entschlüssele das Archiv zuerst oder speichere es ohne Passwort neu, dann repariere die Dateinamen.',
    },
    {
      q: 'Läuft es offline?',
      a: 'Ja. Das Tool ist eine PWA. Nach dem ersten Besuch wird es zwischengespeichert, sodass es ohne Netzwerkverbindung läuft. Du kannst es auch zum Startbildschirm hinzufügen.',
    },
  ],

  footer: {
    openSourceLabel: 'Open Source (MIT)',
    partOf: 'Teil von',
    brandTail: '— kleine Tools, die lokal auf deinem Gerät laufen.',
    colophon:
      'Erstellt und gepflegt von Geppetto. Ein Teil des Codes entsteht mit KI-Unterstützung; Prüfung und Entscheidungen liegen beim Maintainer.',
    securityText: 'Sicherheit',
  },
};
