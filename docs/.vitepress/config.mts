import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stefano Brivio",
  description: "Developer from Milan",
  base: '/hello-sbrivio/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Personal Projects', link: '/projects' },
      { text: 'Work', link: '/work' },
      { text: 'About', link: '/about' },
      { text: 'Personal', link: '/personal' }
    ],

    sidebar: [
      {
        text: 'Personal Projects',
        items: [
          { text: 'sf-bulker', link: '/projects#sf-bulker' },
          { text: 'sf-pubsub', link: '/projects#sf-pubsub' },
          { text: 'csv-to-object', link: '/projects#csv-to-object' },
          { text: 'SPRR VS Code Extension', link: '/projects#vs-code-rtpick-extension-sprr' },
          { text: 'thate', link: '/projects#thate' }
        ]
      },
      {
        text: 'Work',
        items: [
          { text: 'Deloitte', link: '/work#deloitte' },
          { text: 'Telnext', link: '/work#telnext' },
          { text: 'Capgemini', link: '/work#capgemini' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About me', link: '/about' },
          { text: 'Personal', link: '/personal' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Daedrico' }
    ]
  }
})
