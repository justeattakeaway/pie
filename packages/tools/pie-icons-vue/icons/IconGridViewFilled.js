import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGridViewFilled',
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
            class: 'c-pieIcon c-pieIcon--gridViewFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.094 6.906h4.812V2.094H2.094v4.812z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.094 6.906h4.812V2.094H9.094v4.812z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M2.094 13.906h4.812V9.094H2.094v4.812z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.094 13.906h4.812V9.094H9.094v4.812z',
                fill: '#242E30'
            }
        })]);
    }
};
