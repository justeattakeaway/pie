import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'RefineSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--refineSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.75 10.7188H5.25V12.0312H8.75V10.7188Z'
            }
        }), h('path', {
            attrs: {
                d: 'M11.375 6.34375H2.625V7.65625H11.375V6.34375Z'
            }
        }), h('path', {
            attrs: {
                d: 'M14 1.96875H0V3.28125H14V1.96875Z'
            }
        })]);
    }
};
