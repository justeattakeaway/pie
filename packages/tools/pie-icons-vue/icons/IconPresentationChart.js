import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPresentationChart',
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
            class: 'c-pieIcon c-pieIcon--presentationChart'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15 2.09375H1V3.40625H2.09375V8.875C2.09605 9.2804 2.25811 9.66855 2.54478 9.95522C2.83145 10.2419 3.2196 10.404 3.625 10.4062H7.34375V12.1125L5.375 14.125H7.195L8 13.3112L8.805 14.125H10.625L8.65625 12.1037V10.4062H12.375C12.7804 10.404 13.1686 10.2419 13.4552 9.95522C13.7419 9.66855 13.904 9.2804 13.9062 8.875V3.40625H15V2.09375ZM12.5938 8.875C12.5938 8.93302 12.5707 8.98866 12.5297 9.02968C12.4887 9.0707 12.433 9.09375 12.375 9.09375H3.625C3.56698 9.09375 3.51134 9.0707 3.47032 9.02968C3.4293 8.98866 3.40625 8.93302 3.40625 8.875V3.40625H12.5938V8.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
