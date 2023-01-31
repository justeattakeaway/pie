import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOfficeLarge',
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
            class: 'c-pieIcon c-pieIcon--officeLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.75 4.625H7.25C6.55381 4.625 5.88613 4.90156 5.39384 5.39384C4.90156 5.88613 4.625 6.55381 4.625 7.25V27.375H27.375V7.25C27.375 6.55381 27.0984 5.88613 26.6062 5.39384C26.1139 4.90156 25.4462 4.625 24.75 4.625ZM14.25 25.625V22.125H17.75V25.625H14.25ZM25.625 25.625H19.5V22.125H21.25V20.375H10.75V22.125H12.5V25.625H6.375V7.25C6.375 7.01794 6.46719 6.79538 6.63128 6.63128C6.79538 6.46719 7.01794 6.375 7.25 6.375H24.75C24.9821 6.375 25.2046 6.46719 25.3687 6.63128C25.5328 6.79538 25.625 7.01794 25.625 7.25V25.625ZM17.75 9.875H21.25V11.625H17.75V9.875ZM10.75 9.875H14.25V11.625H10.75V9.875ZM17.75 15.125H21.25V16.875H17.75V15.125ZM10.75 15.125H14.25V16.875H10.75V15.125Z',
                fill: '#242E30'
            }
        })]);
    }
};
