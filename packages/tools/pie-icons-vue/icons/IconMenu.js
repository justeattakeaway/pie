import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMenu',
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
            class: 'c-pieIcon c-pieIcon--menu'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15 4.28125H1V2.96875H15V4.28125ZM15 11.7188H1V13.0312H15V11.7188ZM15 7.34375H1V8.65625H15V7.34375Z',
                fill: '#242E30'
            }
        })]);
    }
};
