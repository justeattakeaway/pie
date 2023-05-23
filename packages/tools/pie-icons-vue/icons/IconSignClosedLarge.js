import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSignClosedLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--signClosedLarge');
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
                d: 'M26.5 11.625h-4.462l-5.355-6.676h-1.365l-5.355 6.676H5.5a2.625 2.625 0 0 0-2.625 2.625v10.5A2.625 2.625 0 0 0 5.5 27.375h21a2.625 2.625 0 0 0 2.625-2.625v-10.5a2.625 2.625 0 0 0-2.625-2.625ZM16 6.9l3.789 4.725H12.21L16 6.9Zm11.375 17.85a.875.875 0 0 1-.875.875h-21a.875.875 0 0 1-.875-.875v-10.5a.875.875 0 0 1 .875-.875h21a.875.875 0 0 1 .875.875v10.5Zm-7.691-7.691-2.45 2.441 2.45 2.441-1.243 1.243L16 20.734l-2.441 2.45-1.243-1.243 2.45-2.441-2.45-2.441 1.243-1.243L16 18.266l2.441-2.45 1.243 1.243Z',
            },
        })]);
    },
};
