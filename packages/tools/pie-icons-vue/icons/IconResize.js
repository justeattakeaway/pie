import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconResize',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--resize');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#000',
                d: 'M.928 10.325h.927l8.47-8.47V.928L.928 10.325Z',
            },
        }), h('path', {
            attrs: {
                fill: '#000',
                d: 'M10.325.928V0L0 10.325h.928L10.325.928Z',
            },
        }), h('path', {
            attrs: {
                fill: '#000',
                d: 'm6.501 10.325 3.824-3.824v-.927l-4.751 4.751H6.5Z',
            },
        }), h('path', {
            attrs: {
                fill: '#000',
                d: 'M7.429 10.325h-.928l3.824-3.824v.928L7.43 10.325Z',
            },
        })]);
    },
};
