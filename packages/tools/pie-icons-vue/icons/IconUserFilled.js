import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--userFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.355 11.78a4.14 4.14 0 00-3.938-2.686H6.582a4.139 4.139 0 00-3.937 2.686l-.831 2.345h12.372l-.831-2.345z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8 8a3.062 3.062 0 100-6.125A3.062 3.062 0 008 8z',
                fill: '#242E30',
            },
        })]);
    },
};
