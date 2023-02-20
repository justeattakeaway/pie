import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUser',
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
            class: 'c-pieIcon c-pieIcon--user'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.205 14.125l.674-1.908a2.835 2.835 0 012.703-1.81h2.835a2.835 2.835 0 012.704 1.81l.674 1.908h1.391l-.875-2.345a4.138 4.138 0 00-3.937-2.686H6.582a4.139 4.139 0 00-3.937 2.686l-.831 2.345h1.391z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8 8a3.063 3.063 0 100-6.125A3.063 3.063 0 008 8zm0-4.813a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5z',
                fill: '#242E30'
            }
        })]);
    }
};
