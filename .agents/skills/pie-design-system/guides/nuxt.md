# Nuxt 3 Integration

1. Install `nuxt-ssr-lit`.
2. Update `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        moduleSideEffects: ['@justeattakeaway/pie-icons-webc', '@justeattakeaway/pie-webc'],
    },
    modules: [['nuxt-ssr-lit', { litElementPrefix: ['pie-', 'icon-'] }]],
    imports: {
        transform: { exclude: [/\bpie-\b/, /\bicon-\b/] },
    },
    css: ['@justeattakeaway/pie-css'],
});
```

3. Import components as side-effect imports (no destructuring):

```vue
<script setup>
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCamera.js';
</script>
```
