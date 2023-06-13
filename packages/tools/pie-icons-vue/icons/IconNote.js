import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNote',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--note');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15 7.344H1v1.312h14V7.344Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.5 11.719H1v1.312h10.5V11.72Z',
            },
        }), h('path', {
            attrs: {
                d: 'M15 2.969H1V4.28h14V2.97Z',
            },
        })]);
    },
};
