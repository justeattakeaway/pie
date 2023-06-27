import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconTrashLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--trashLarge', 'IconTrashLarge');
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
                d: 'm18.03 14.25-.621 7.875h1.75l.63-7.875H18.03Z',
            },
        }), h('path', {
            attrs: {
                d: 'M19.938 4.625h-7.875l-.876 1.75h9.626l-.875-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'm14.591 22.125-.621-7.875h-1.759l.63 7.875h1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M3.75 8.125v1.75h2.319l1.601 16.87a2.625 2.625 0 0 0 2.625 2.38h11.428a2.624 2.624 0 0 0 2.625-2.38l1.583-16.87h2.319v-1.75H3.75Zm18.839 18.454a.876.876 0 0 1-.875.796H10.278a.875.875 0 0 1-.876-.796L7.829 9.875h16.344L22.59 26.579Z',
            },
        })]);
    },
};
