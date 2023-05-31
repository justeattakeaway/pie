import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconClockAddLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--clockAddLarge');
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
                d: 'm20.795 20.253-5.67-3.404V9h1.75v6.851l4.83 2.896-.91 1.506Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 3.75A12.25 12.25 0 0 0 4.266 19.5h1.847A10.325 10.325 0 0 1 5.5 16 10.5 10.5 0 1 1 16 26.5a10.299 10.299 0 0 1-4.375-.971v1.898A12.25 12.25 0 1 0 16 3.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10.094 21.049v-3.736h-1.75v3.718H4.625v1.75l3.719-.017V26.5h1.75v-3.719h3.719v-1.75l-3.72.018Z',
            },
        })]);
    },
};
