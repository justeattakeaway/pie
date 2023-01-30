import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFilters',
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
            class: 'c-pieIcon c-pieIcon--filters'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15 3.84375V5.15625H6.03125V6.6875H4.71875V5.15625H1V3.84375H4.71875V2.3125H6.03125V3.84375H15ZM11.2812 9.3125H9.96875V10.8438H1V12.1562H9.96875V13.6875H11.2812V12.1562H15V10.8438H11.2812V9.3125Z',
                fill: '#242E30'
            }
        })]);
    }
};
