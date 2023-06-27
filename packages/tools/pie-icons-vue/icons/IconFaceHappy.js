import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFaceHappy',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--faceHappy', 'IconFaceHappy');
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
                d: 'M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm0 12.25A5.469 5.469 0 1 1 8 2.53a5.469 5.469 0 0 1 0 10.938Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5 6.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.5 6.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.125 9H9.751a1.846 1.846 0 0 1-3.377 0H5a3.168 3.168 0 0 0 6.125 0Z',
            },
        })]);
    },
};
