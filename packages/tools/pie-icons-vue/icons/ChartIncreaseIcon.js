import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ChartIncreaseIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--chartIncrease'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.96875 11.5H4.28125V14.125H2.96875V11.5ZM7.34375 14.125H8.65625V9.75H7.34375V14.125ZM11.7188 14.125H13.0312V8H11.7188V14.125ZM12.375 2.09375H8.875V3.40625H10.9225C8.455 6.25 6.0925 7.34375 2.75 7.34375V8.65625C6.38125 8.65625 9.05875 7.43125 11.7188 4.5V6.25H13.0312V2.75C13.029 2.57666 12.9591 2.41105 12.8365 2.28847C12.7139 2.16588 12.5483 2.09602 12.375 2.09375Z',
                fill: '#242E30'
            }
        })]);
    }
};
