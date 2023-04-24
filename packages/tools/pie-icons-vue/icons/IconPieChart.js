import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPieChart',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--pieChart');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.656 8.656H1.22V8A6.79 6.79 0 0 1 8 1.219h.656v7.437ZM2.531 7.344h4.813V2.566a5.495 5.495 0 0 0-4.778 4.778h-.035Zm7.412-5.346V3.38A5.031 5.031 0 0 1 8 13.031a5.075 5.075 0 0 1-4.62-3.054H1.998A6.326 6.326 0 0 0 14.344 8a6.3 6.3 0 0 0-4.367-6.002h-.034Z',
            },
        })]);
    },
};
