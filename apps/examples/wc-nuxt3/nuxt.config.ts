// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: [['nuxt-ssr-lit', { litElementPrefix: ['pie-'] }]],
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: 'https://unpkg.com/@justeat/pie-design-tokens/dist/jet.css',
                },
                {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: 'https://unpkg.com/@justeat/pie-design-tokens/dist/jet-hsl-colors.css',
                },
            ],
        },
    },
});
