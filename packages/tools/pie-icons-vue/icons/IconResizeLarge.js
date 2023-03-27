import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconResizeLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--resizeLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#000',
                d: 'M22.726 2.243V1L1 22.735h1.243L22.726 2.243Z',
            },
        }), h('path', {
            attrs: {
                fill: '#000',
                d: 'M2.243 22.735h1.233l19.25-19.259V2.243L2.243 22.735Z',
            },
        }), h('path', {
            attrs: {
                fill: '#000',
                d: 'M14.099 22.735h1.233l7.394-7.402v-1.234L14.1 22.735Z',
            },
        }), h('path', {
            attrs: {
                fill: '#000',
                d: 'm14.099 22.735 8.627-8.636v-1.234l-9.861 9.87h1.234Z',
            },
        })]);
    },
};
