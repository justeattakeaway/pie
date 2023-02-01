import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSortLarge',
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
            class: 'c-pieIcon c-pieIcon--sortLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.625 20.125H13.375V21.875H18.625V20.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 6.375V8.125H28.25V6.375H5.5Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 6.375H3.75V8.125H5.5V6.375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23 13.25H9V15H23V13.25Z',
                fill: '#242E30'
            }
        })]);
    }
};
