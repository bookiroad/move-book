export default {
  github: "https://github.com/bookiroad/move-book",
  docsRepositoryBase: "https://github.com/bookiroad/move-book/blob/main",
  titleSuffix: " – Move Book",
  logo: (
    <>
      <span className="mr-3 font-extrabold hidden md:inline">Move Book</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Movement Network 개발자 가이드
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ko" />
      <meta name="description" content="Movement Network의 한국어 개발자 문서 - Move 언어부터 dApp 개발까지" />
      <meta name="og:description" content="Movement Network의 한국어 개발자 문서 - Move 언어부터 dApp 개발까지" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content="Move Book - Movement Network 개발자 가이드" />
      <meta name="apple-mobile-web-app-title" content="Move Book" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: "GitHub에서 이 페이지 편집하기",
  footerText: <>MIT {new Date().getFullYear()} © Move Book Project.</>,
  unstable_faviconGlyph: "📚",
};