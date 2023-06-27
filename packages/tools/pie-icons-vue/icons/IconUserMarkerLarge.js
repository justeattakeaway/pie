import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconUserMarkerLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--userMarkerLarge', 'IconUserMarkerLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 15.125a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm5.25 8.566.691 1.934H20.07l-.499-1.313a2.204 2.204 0 0 0-2.126-1.312h-2.511a2.205 2.205 0 0 0-2.127 1.313l-.498 1.312h-1.873l.726-1.934A3.972 3.972 0 0 1 14.932 16h2.512a3.972 3.972 0 0 1 3.806 2.441ZM26.5 4.625h-21A2.625 2.625 0 0 0 2.875 7.25v14.875A2.625 2.625 0 0 0 5.5 24.75h6.641L16 28.609l3.859-3.859H26.5a2.625 2.625 0 0 0 2.625-2.625V7.25A2.625 2.625 0 0 0 26.5 4.625Zm.875 17.5A.875.875 0 0 1 26.5 23h-7.359L16 26.141 12.859 23H5.5a.875.875 0 0 1-.875-.875V7.25a.875.875 0 0 1 .875-.875h21a.875.875 0 0 1 .875.875v14.875Z',
            },
        })]);
    },
};
