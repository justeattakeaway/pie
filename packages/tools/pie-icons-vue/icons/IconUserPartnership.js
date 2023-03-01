import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserPartnership',
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
            class: 'c-pieIcon c-pieIcon--userPartnership'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.865 7.598a2.424 2.424 0 10-2.091-.132 3.106 3.106 0 00-1.829 1.409L8 10.293l-.936-1.418a3.133 3.133 0 00-1.838-1.374 2.389 2.389 0 10-2.091.132 3.089 3.089 0 00-1.916 2.808v3.684H2.53v-3.684a1.811 1.811 0 011.838-1.75 1.846 1.846 0 011.583.875L8 12.707l2.047-3.176a1.854 1.854 0 011.584-.875 1.812 1.812 0 011.838 1.75v3.719h1.312v-3.684a3.088 3.088 0 00-1.916-2.843zM4.062 4.28a1.094 1.094 0 110 2.188 1.094 1.094 0 010-2.188zm7.875 0a1.094 1.094 0 110 2.188 1.094 1.094 0 010-2.188zM4.72 11.5H6.03v2.625H4.72V11.5zm5.25 0h1.312v2.625H9.97V11.5z',
                fill: '#242E30'
            }
        })]);
    }
};
