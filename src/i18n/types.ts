/**
 * ロケール別ツールページの content 型。
 * 新言語は `<locale>.ts` でこの形を埋め、`config.ts` の LOCALES に追加するだけ。
 * 文言は直訳でなく各言語で competitor-grounded に意訳する（I18N-SEO-GUIDELINE 参照）。
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface HowToStep {
  h3: string;
  p: string;
}

export interface ToolContent {
  /** <html lang> と hreflang に使う BCP-47 言語コード（例 'en', 'ja', 'zh-Hant'） */
  htmlLang: string;

  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };

  hero: { h1: string; tagline: string };

  /**
   * 関連ツールへの短い導線を1行で描画する（before + <a>linkText</a> + after）。
   * 壊れた/破損した .zip からのファイル復元は本ツールの範囲外で、別ツール recover-zip が担当する。
   * href は固定で /recover-zip/（ToolPage 側でハードコード）。
   */
  relatedNote: { before: string; linkText: string; after: string };

  intro: { h2: string; paras: string[] };

  privacy: { h2: string; lead: string; points: string[]; note: string; sourceLinkText: string };

  howto: { h2: string; steps: HowToStep[] };

  faqHeading: string;
  faq: FaqItem[];

  footer: {
    openSourceLabel: string; // "Open source (MIT)"
    partOf: string; // "part of"
    brandTail: string; // "— small tools that run locally on your device."
    colophon: string; // AI 開示を含む1行（前面化しない）
    securityText: string; // 脆弱性報告（SECURITY.md）へのリンク文言
  };

  /**
   * 関連ツール・技術記事セクションの UI 文言（#177）。カード自体のテキスト（ツール名/説明）は
   * tools.json 由来の生成データ（@/data/relatedTools.generated）から来るため、ここは章見出しと
   * 記事リンク文言のみ。footer と同様、全ツール共通の chrome 文言でツールごとに同一値でよい。
   * relatedNote（上）とは別物: あちらはページ冒頭の「違うツールをお探しなら」誘導、こちらはページ
   * 末尾の一覧セクション。両方とも recover-zip を含みうるが、位置と目的が異なるため両立させる。
   */
  related: {
    h2: string; // "Related tools"
    blogLinkText: string; // "Read the technical notes"（この技術記事 /blog/<slug>/ へのリンク文言）
  };
}
