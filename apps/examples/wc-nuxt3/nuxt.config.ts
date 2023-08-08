// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: [
        ['nuxt-ssr-lit', { litElementPrefix: ['pie-'] }]
    ],
    css: ['@justeattakeaway/pie-css'],
});
