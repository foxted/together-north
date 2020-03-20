require('dotenv').config();
const pkg = require('./package');

module.exports = {
    srcDir: 'app',

    mode: 'spa',

    server: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 8080
    },

    /*
    ** Headers of the page
    */
    head: {
        title: 'Together North',
        meta: [
            { charset: 'utf-8' },
            { property: 'author', content: 'Together North' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
            { name: 'theme-color', content: '#F5CD79' },
            { name: 'msapplication-TileColor', content: '#F5CD79' },
            { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' },
            { httpEquiv: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap' },
        ],
        script: [
            { src: 'https://kit.fontawesome.com/ed1bd7a2b0.js', crossorigin: 'anonymous' },
        ],
    },

    env: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_TENANT_ID: process.env.FIREBASE_TENANT_ID,
        FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    css: [
        '~/assets/css/element.css',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/element-ui'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/tailwindcss',
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: process.env.FIREBASE_API_KEY,
                    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                    databaseURL: process.env.FIREBASE_DATABASE_URL,
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                    appId: process.env.FIREBASE_APP_ID,
                    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
                    measurementId: process.env.FIREBASE_MEASUREMENT_ID
                },
                onFirebaseHosting: false,
                services: {
                    firestore: true,
                    analytics: true
                }
            }
        ]
    ],

    buildModules: [
        '@nuxtjs/dotenv',
    ],

    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    tailwindcss: {
        configPath: '~/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css'
    },

    purgeCSS: {
        enabled: false,
    },

    /*
    ** Build configuration
    */
    build: {
        babel: {
            babelrc: true,
        },
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
                });
            }
        }
    }
};
