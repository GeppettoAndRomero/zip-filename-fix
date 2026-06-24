import type { ToolContent } from './types';

// Español.

export const es: ToolContent = {
  htmlLang: 'es',

  meta: {
    title: 'Arreglar nombres de archivo ilegibles (caracteres raros) en un ZIP — Sin subir nada | runlocally',
    description:
      'Repara los nombres de archivo que salen con caracteres raros dentro de un .zip: los nombres en Shift_JIS / CP932 que se rompen al pasar entre Windows en japonés y Mac. Se vuelven a decodificar a UTF-8 en tu navegador. No se sube nada. Código abierto, funciona sin conexión.',
    ogTitle: 'Arreglar nombres de archivo ilegibles en un ZIP — En tu navegador, sin subir nada',
    ogDescription:
      'Suelta un .zip con nombres de archivo ilegibles; vuelve a decodificar los nombres en Shift_JIS / CP932 a UTF-8 y te entrega un archivo corregido. No se sube nada. Código abierto, funciona sin conexión.',
  },

  hero: {
    h1: 'Arregla los nombres de archivo ilegibles de un ZIP',
    tagline:
      'Repara los nombres con caracteres raros dentro de un .zip: los nombres rotos en Shift_JIS / CP932 que vienen de Windows en japonés. En tu navegador. No se sube nada.',
  },

  intro: {
    h2: 'Arregla los nombres de archivo ilegibles de un zip, en tu navegador',
    paras: [
      'Cuando un .zip se crea en Windows en japonés (u otro idioma CJK), los nombres de archivo suelen guardarse en una codificación heredada —Shift_JIS / CP932— sin la marca que indica que son UTF-8. Abre ese archivo en un Mac, o en un Windows con otra configuración, y los nombres salen con caracteres raros: cadenas ilegibles como 譁・喧縺・ en lugar del nombre real. Pasa todo el tiempo cuando los archivos van y vienen entre macOS y Windows en japonés.',
      'Suelta aquí un .zip y la herramienta vuelve a decodificar esos nombres heredados a UTF-8 correcto, y luego escribe un .zip nuevo con la marca UTF-8 puesta, para que los nombres se extraigan bien en cualquier sistema. El contenido de los archivos se copia sin tocar; solo se reparan los nombres. Los nombres que ya están guardados correctamente como UTF-8 se dejan tal cual, así que nada se decodifica dos veces.',
    ],
  },

  privacy: {
    h2: 'Por qué tu archivo se queda en tu dispositivo',
    lead: 'Aquí la privacidad es estructural, no una promesa. No hay paso de subida porque no hay servidor al que subir:',
    points: [
      'El .zip se lee y se reconstruye por completo en tu navegador.',
      'La página se sirve como archivos estáticos y no hace ninguna petición con tu archivo.',
      'El código es abierto y cualquiera puede leerlo (MIT).',
      'Funciona sin conexión, algo que solo es posible porque nada sale del dispositivo.',
    ],
    note: 'Si quieres comprobarlo por tu cuenta, abre el panel de Red de tu navegador mientras la usas: ninguna petición lleva tu archivo.',
    sourceLinkText: 'Lee el código.',
  },

  howto: {
    h2: 'Cómo se usa',
    steps: [
      {
        h3: 'Suelta tu .zip',
        p: 'Haz clic para elegir un .zip con nombres ilegibles, o suéltalo en cualquier parte de la página. Un archivo a la vez.',
      },
      {
        h3: 'Vuelve a decodificar los nombres',
        p: 'Los nombres heredados en Shift_JIS / CP932 se decodifican de nuevo a UTF-8. El contenido de los archivos no se toca; los nombres que ya están en UTF-8 se dejan tal cual.',
      },
      {
        h3: 'Descarga el archivo corregido',
        p: 'Se escribe un .zip nuevo con la marca UTF-8 puesta y se descarga automáticamente. Te dice cuántos nombres corrigió.',
      },
    ],
  },

  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      q: '¿Se sube mi .zip a algún sitio?',
      a: 'No. El archivo se lee y se reconstruye por completo en tu navegador. No hay ningún componente de servidor, así que tu archivo no tiene por dónde salir del dispositivo. El código es abierto y puedes confirmarlo en el panel de Red de tu navegador.',
    },
    {
      q: '¿Por qué los nombres de archivo de un zip se convierten en caracteres raros?',
      a: 'Un .zip creado en Windows en japonés (u otro idioma CJK) suele guardar los nombres de archivo en una codificación heredada —Shift_JIS / CP932— sin poner la marca que dice «estos nombres son UTF-8». Cuando el archivo se abre en un Mac o en un Windows con otra configuración, los bytes se leen con la codificación equivocada y obtienes caracteres ilegibles en lugar de los nombres reales.',
    },
    {
      q: '¿Qué cambia exactamente esta herramienta?',
      a: 'Solo los nombres de archivo. Vuelve a decodificar los nombres heredados en Shift_JIS / CP932 a UTF-8 correcto y escribe un .zip nuevo con la marca UTF-8 puesta, para que los nombres se extraigan bien en cualquier sistema. El contenido de cada archivo se copia byte por byte, sin cambios.',
    },
    {
      q: '¿Va a romper los nombres que ya están bien?',
      a: 'No. Los nombres que ya están guardados correctamente como UTF-8 se detectan y se dejan tal cual, así que nunca se decodifican dos veces y se vuelven a romper. La herramienta informa de cuántos nombres corrigió realmente.',
    },
    {
      q: '¿Admite archivos protegidos con contraseña (cifrados)?',
      a: 'No. Los archivos cifrados no son compatibles, y la herramienta te lo dice con claridad en lugar de producir un archivo dañado. Descífralo o vuelve a guardar el archivo sin contraseña primero, y luego corrige los nombres.',
    },
    {
      q: '¿Funciona sin conexión?',
      a: 'Sí. Es una PWA. Tras la primera visita queda guardada en la caché, así que funciona sin conexión a la red. También puedes instalarla en tu pantalla de inicio.',
    },
  ],

  footer: {
    openSourceLabel: 'Código abierto (MIT)',
    partOf: 'parte de',
    brandTail: '— herramientas pequeñas que se ejecutan localmente en tu dispositivo.',
    colophon:
      'Creado y mantenido por Geppetto. Parte del código se escribe con ayuda de IA; toda la revisión y las decisiones son del responsable.',
    securityText: 'Seguridad',
  },
};
