const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'ZTAKE | US-based Cosmos Validator - Stake Atoms with us',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'description', content: 'Ztake.org provides a safe, secure and affordable delegation service for Atom holders to share in the benefits of Cosmos’s PoS protocol. By delegating your tokens holdings to us, you\'ve a chance to earn interest on your tokens while keeping full control of your private keys and avoiding the complexity of running a validator node' },
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:title', content: 'US-based Cosmos Validator'},
      { name: 'twitter:description', content: 'We are a team of tech-savvy blockchain developers and enthusiasts who run nodes on PoS and PoA blockchains. We took care all of the technical setup needed, so that you could easily stake your assets.'},
      { name: 'twitter:image', content: 'https://cdn-images-1.medium.com/max/1600/0*8wYdgTwaiiMF3m7u.jpg'},
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'ZTAKE | US-based Cosmos Validator - Stake Atoms with us'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/apple-touch-icon-180x180.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'bootstrap/scss/bootstrap.scss',
    //'~bootstrap-vue/src/index.scss',
    '@/assets/scss/ztake.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-clipboard2',
    '~plugins/vue-jsonp'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/sitemap', {
      hostname: 'https://ztake.org',
      generate: true
    }],
    '@nuxtjs/dotenv'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: {},

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
