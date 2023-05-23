import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconShekelLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--shekelLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Zm0-14h-4.375v7.875h-1.75V10.75H16a2.625 2.625 0 0 1 2.625 2.625v3.5h-1.75v-3.5A.875.875 0 0 0 16 12.5Zm4.375-1.75h1.75v9.625H16a2.625 2.625 0 0 1-2.625-2.625v-3.5h1.75v3.5a.875.875 0 0 0 .875.875h4.375V10.75Z',
            },
        })]);
    },
};
