import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'PlusLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--plusLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 16.875V15.125H16.875V4.625H15.125V15.125H4.625V16.875H15.125V27.375H16.875V16.875H27.375Z',
                fill: '#242E30'
            }
        })]);
    }
};
