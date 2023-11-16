import path from 'path';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'wc-nuxt2',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@justeattakeaway/pie-css',
        '~/assets/styles/fonts.css',
        '~/assets/styles/web-components.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/web-components.js', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // Required for Lit 3 support with Webpack 4 - https://lit.dev/docs/releases/upgrade/#using-lit-3-with-webpack-4
        extend(config) {
            config.module.rules.push({
                test: /\.js$/,
                include: ['@lit', 'lit-element', 'lit-html'].map((p) => path.resolve(__dirname, `../../../node_modules/${p}`)),
                loader: 'babel-loader',
                options: {
                    plugins: [
                        '@babel/plugin-transform-optional-chaining',
                        '@babel/plugin-transform-nullish-coalescing-operator',
                        '@babel/plugin-transform-logical-assignment-operators'
                    ],
                },
            });
        },
    },
};
