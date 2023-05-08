import { defineConfig } from "vitepress";
import DefaultTheme from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Formy",
  description: "Official documentation for the Formy Library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],

    sidebar: [
      {
        text: "Introduction",
        collapsed: true,
        items: [
          { text: "What is Formy", link: "/guide/" },
          { text: "Getting Started", link: "/guide/quick-start" },
        ],
      },
      {
        text: "Components",
        collapsed: true,
        items: [
          { text: "Field", link: "/guide/components/" },
          { text: "Button", link: "/guide/components/button" },
          { text: "Regex", link: "/guide/components/regex" },
        ],
      },
      {
        text: "Hooks",
        collapsed: true,
        items: [{ text: "useVerify", link: "/guide/hook/" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/creatorslook/formy" },
    ],
  },
});
