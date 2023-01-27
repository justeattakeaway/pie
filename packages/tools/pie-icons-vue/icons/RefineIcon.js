import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'RefineIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--refine'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.625 20.125H11.375V21.875H16.625V20.125Z'
            }
        }), h('path', {
            attrs: {
                d: 'M3.5 4.375V6.125H26.25V4.375H3.5Z'
            }
        }), h('path', {
            attrs: {
                d: 'M3.5 4.375H1.75V6.125H3.5V4.375Z'
            }
        }), h('path', {
            attrs: {
                d: 'M21 12.25H7V14H21V12.25Z'
            }
        })]);
    }
};
