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
                d: 'M15 2.094H1v1.312h1.094v5.469a1.54 1.54 0 001.531 1.531h3.719v1.707l-1.969 2.012h1.82L8 13.311l.805.814h1.82l-1.969-2.021v-1.698h3.719a1.54 1.54 0 001.531-1.531V3.406H15V2.094zm-2.406 6.781a.219.219 0 01-.219.219h-8.75a.219.219 0 01-.219-.219V3.406h9.188v5.469z',
                fill: '#242E30'
            }
        })]);
    }
};
