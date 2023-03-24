// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
