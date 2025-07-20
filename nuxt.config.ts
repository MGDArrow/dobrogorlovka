// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['./assets/reset.css', './assets/variables.css', './assets/styles.css'],
  app: {
    head: {
      title: 'АНО "ДоброГорловка"',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        {name: 'description', content: 'Официальный сайт Автономной Некомерческой Организации "ДоброГорловка"'},
        {name: 'keywords', content: 'АНО, Доброгорловка'},
        {name: 'theme-color', content: '#a6c729'},
        {name: 'author', content: 'MGDArrow'},
        {name: 'creator', content: 'MGDArrow'},
        {name: 'apple-mobile-web-app-title', content: 'Доброгорловка'},
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes:'96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest'},
      ]
    }
  }
})