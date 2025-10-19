import { defineConfig } from 'vitepress';
import mdPluginIconify from "mdit-plugin-iconify";
import { icons as lucideIcons } from "@iconify-json/lucide";
import { icons as simpleIcons } from "@iconify-json/simple-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mdit-plugin-iconify",
  description: "markdown-it plugin to add icons into your markdown",
  base: "/mdit-plugin-iconify-js/",
  srcDir: "src",
  cleanUrls: true,
  localhostLinks: "localhostLinks",
  themeConfig: {
    nav: [
      {
        text: "Docs",
        link: "/introduction",
      }
    ],
    sidebar: [
      {
        text: "Docs",
        items: [
          {
            text: "Introduction",
            link: "/introduction",
          },
          {
            text: "Quick-Start",
            link: "/quick-start",
          },
          {
            text: "Usage",
            link: "/usage",
          },
          {
            text: "Configuration",
            link: "/configuration",
          },
          {
            text: "Customization",
            link: "/customization",
          },
        ],
      },
      {
        text: "Guides",
        items: [
          {
            text: "Vitepress",
            link: "/guides/vitepress",
          }
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/utility-libraries/mdit-plugin-iconify-js/'},
      {icon: 'npm', link: 'https://npmjs.com/package/mdit-plugin-iconify/'},
    ],
  },
  markdown: {
    config(md) {
      md.use(mdPluginIconify, {
        collections: {
          lucide: lucideIcons,
          social: simpleIcons,
        },
        defaultCollection: "lucide",
      });
    }
  },
});
