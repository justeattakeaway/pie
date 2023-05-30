import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSort',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sort');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M9.75 11.719h-3.5v1.312h3.5V11.72Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.375 7.344h-8.75v1.312h8.75V7.344Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15 2.969H1V4.28h14V2.97Z',
            },
        })]);
    },
};
