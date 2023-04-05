// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
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
