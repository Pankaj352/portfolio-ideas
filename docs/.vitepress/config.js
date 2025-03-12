export default {
  title: "Portfolio Ideas",
  description: "A curation of awesome portfolio to draw inspiration",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Portfolio Ideas",
    nav: [
      { text: "Portfolios", link: "/portfolio" },
      { text: "Guide", link: "/guide" },
      { text: "Contributors", link: "/contributors" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Pankaj352" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Pankaj Maurya | Portfolio Ideas",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
