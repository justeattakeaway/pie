import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFlagRomania',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--romania');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#FFDA44',
                d: 'M7.997 1a6.91 6.91 0 0 0-2.433.438L1.244 8l4.32 6.563a6.984 6.984 0 0 0 4.867 0L14.751 8l-4.32-6.563A6.986 6.986 0 0 0 7.997 1Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M14.997 8a7 7 0 0 0-4.566-6.563v13.126A7 7 0 0 0 14.997 8Z',
            },
        }), h('path', {
            attrs: {
                fill: '#0052B4',
                d: 'M5.564 14.563V1.437a7 7 0 0 0 0 13.126Z',
            },
        })]);
    },
};
