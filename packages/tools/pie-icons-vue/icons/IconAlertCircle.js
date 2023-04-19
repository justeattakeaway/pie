import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconAlertCircle',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--alertCircle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 14.781A6.782 6.782 0 1 1 14.781 8 6.79 6.79 0 0 1 8 14.781Zm0-12.25A5.469 5.469 0 1 0 8 13.47 5.469 5.469 0 0 0 8 2.53Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.055 4.631a3.5 3.5 0 0 1 1.89 0l-.481 4.244h-.928l-.481-4.244Zm1.82 5.994a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z',
            },
        })]);
    },
};
