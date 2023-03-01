import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconList',
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
            class: 'c-pieIcon c-pieIcon--list',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.313 11.938a1.312 1.312 0 100-2.625 1.312 1.312 0 000 2.624z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M14.125 4.719h-8.75V6.03h8.348l.402-1.312z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M2.313 6.688a1.313 1.313 0 100-2.626 1.313 1.313 0 000 2.625z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M12.506 9.969H5.375v1.312h6.729l.402-1.312z',
                fill: '#242E30',
            },
        })]);
    },
};
