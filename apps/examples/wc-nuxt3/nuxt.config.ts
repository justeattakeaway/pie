// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: [
        ['nuxt-ssr-lit', { litElementPrefix: ['pie-'] }]
    ],
    imports: {
        transform: {
            // Stop Nuxt trying to compile component packages in the monorepo
            exclude: [/\bpie-\b/],
        },
    },
    css: ['@justeattakeaway/pie-css'],
});
