import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'DocumentLargeIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--documentLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.625 3.75H4.625V29.125H27.375V12.5C27.375 11.3509 27.1487 10.2131 26.7089 9.15152C26.2692 8.08992 25.6247 7.12533 24.8122 6.31282C23.9997 5.5003 23.0351 4.85578 21.9735 4.41605C20.9119 3.97633 19.7741 3.75 18.625 3.75ZM25.3975 10.75H20.375V5.7275C21.5821 6.04466 22.6832 6.67683 23.5657 7.55933C24.4482 8.44182 25.0803 9.54294 25.3975 10.75ZM25.625 27.375H6.375V5.5H18.625V12.5H25.625V27.375ZM15.125 13.375H10.75V11.625H15.125V13.375ZM10.75 20.375H17.75V22.125H10.75V20.375ZM10.75 16H21.25V17.75H10.75V16Z',
                fill: '#242E30'
            }
        })]);
    }
};
