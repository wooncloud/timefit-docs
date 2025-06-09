import { defineConfig } from 'vitepress'
import { getSidebar } from './sidebar.mjs'

export default defineConfig({
  title: 'Timefit Docs',
  description: 'Documentation for Timefit project',
  
  base: '/timefit-docs/',
  
  head: [
    ['link', { rel: 'icon', href: '/timefit-docs/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'API Reference', link: '/api/' },
    ],

    sidebar: getSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/timefit-docs' }
    ],

    footer: {
      copyright: 'Copyright © 2025 Timefit Team'
    },

    search: {
      provider: 'local'
    }
  }
}) 