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
                d: 'M18.625 20.125h-5.25v1.75h5.25v-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 6.375v1.75h22.75v-1.75H5.5z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 6.375H3.75v1.75H5.5v-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23 13.25H9V15h14v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
