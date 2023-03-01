import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNoteLarge',
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
            class: 'c-pieIcon c-pieIcon--noteLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 23H3.75v1.75h18.375V23z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M28.25 7.25H3.75V9h24.5V7.25z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M28.25 15.125H3.75v1.75h24.5v-1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
