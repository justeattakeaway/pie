import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconImage',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--image');
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
                d: 'M1.219 2.219V14.03H14.78V2.22H1.22Zm12.25 1.312V7.82A2.756 2.756 0 0 1 12.2 9.48c-1.75 1.103-2.922.525-4.375-.192-1.453-.718-3.063-1.514-5.25-.525v-5.25l10.894.017ZM2.53 12.72V10.25c1.969-1.12 3.229-.507 4.699.21a6.922 6.922 0 0 0 3.08.945 4.856 4.856 0 0 0 2.581-.805c.202-.13.395-.273.578-.429v2.547H2.53ZM10.187 9a2.187 2.187 0 1 0 0-4.375 2.187 2.187 0 0 0 0 4.375Zm0-3.063a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75Z',
            },
        })]);
    },
};
