import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPound',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--pound');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.585 11.885c-.315 1.277-1.33 1.803-2.695 1.803H3.625v-1.47h1.12v-3.5h-1.12V7.353h1.12V5.83c0-2.327 1.295-3.727 3.692-3.727A3.911 3.911 0 0 1 11.5 3.328l-1.05 1.067a2.625 2.625 0 0 0-2.012-.822c-1.278 0-2.048.647-2.048 2.187v1.593h3.587v1.365H6.39v3.5h3.5a1.18 1.18 0 0 0 1.277-.823l1.418.49Z',
            },
        })]);
    },
};
