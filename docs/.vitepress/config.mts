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
      { text: 'Work', link: '/work' },
      { text: 'Personal Projects', link: '/projects' },
      { text: 'About', link: '/about' },
      { text: 'Personal', link: '/personal' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Work',
        items: [
          { text: 'Deloitte', link: '/work#deloitte' },
          { text: 'Telnext', link: '/work#telnext' },
          { text: 'Capgemini', link: '/work#capgemini' },
          { text: 'Education', link: '/work#education' }
        ]
      },
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
        text: 'About',
        items: [
          { text: 'About me', link: '/about' },
          { text: 'Personal', link: '/personal' }
        ]
      },
      {
        text: 'Contact',
        items: [
          { text: 'Get in touch', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Daedrico' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/stefano-brivio-b55a4b67/' }
    ]
  }
})
