import blogs from './content/blogs.json'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Ricardo Villagrana',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://ricvillagrana-blog.netlify.com`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Ricardo Villagrana'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Ricardo Villagrana coding blog'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Ricardo Villagrana coding blog'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Ricardo Villagrana'
      },
      {
        hid: 'og:article:author',
        property: 'og:article:author',
        content: 'https://github.com/ricvillagrana'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Ricardo Villagrana'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Ricardo Villagrana'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Ricardo Villagrana coding blog'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * Plugins
   */
  plugins: ['~/plugins/lazyload'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-PV76V8S' }],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],

  /**
   * Google fonts
   */
  webfontloader: {
    google: {
      families: ['Rubik:400,700', 'Karla:400,700,400i,700i'] // Loads Lato font with weights 400 and 700
    }
  },

  /**
   * Font Awesome
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faTwitter',
          'faInstagram',
          'faGithub',
          'faVuejs',
          'faReact',
          'faJs',
          'faDocker',
          'faWordpress',
          'faNodeJs',
          'faYarn'
        ]
      }
    ]
  },

  /**
   * Manifest
   */
  manifest: {
    name: 'Ricardo Villagrana',
    short_name: 'ricvillagrana',
    lang: 'en'
  },

  /**
   * sitemap
   */
  sitemap: {
    hostname: 'https://ricvillagrana-blog.netlify.com',
    gzip: true,
    exclude: ['/admin/']
  },

  /**
   * Robots
   */
  robots: {
    UserAgent: '*',
    Disallow: '/admin'
  },

  /**
   * Generate config
   */
  generate: {
    routes: [].concat(blogs.map(blog => `/blog/${blog.slug}`))
  },

  /**
   * Transition
   */
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
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

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  }
}
