// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: [
      ["nuxt-ssr-lit", { litElementPrefix: ["pie-"] }]
    ],
    vite: {
        build: {
            rollupOptions: {
              external: ['vue/server-renderer'],
            },
        },
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.includes('-'),
                }
            }
        },
    },
})
