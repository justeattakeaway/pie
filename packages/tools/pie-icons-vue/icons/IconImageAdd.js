import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconImageAdd',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--imageAdd', 'IconImageAdd');
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
                d: 'M13.469 7.469v.35a2.748 2.748 0 0 1-1.208 1.619l-.061.043c-1.75 1.103-2.922.525-4.375-.192-1.453-.718-3.063-1.514-5.25-.525v-5.25h7V2.219H1.219V14.03H14.78V7.47H13.47Zm0 5.25H2.53V10.25c1.969-1.12 3.229-.507 4.699.21a6.922 6.922 0 0 0 3.08.945 4.856 4.856 0 0 0 2.581-.805c.202-.13.395-.273.578-.429v2.547Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14.125 4.844h-1.969V2.875h-1.312v1.969H8.875v1.312h1.969v1.969h1.312V6.156h1.969V4.844Z',
            },
        })]);
    },
};
