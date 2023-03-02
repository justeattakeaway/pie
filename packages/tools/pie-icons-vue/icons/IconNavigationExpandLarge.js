import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNavigationExpandLarge',
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
            class: 'c-pieIcon c-pieIcon--navigationExpandLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.48 4.48v23.03h18.602a4.429 4.429 0 004.429-4.428V4.48H4.48zm7.086 21.26H6.252V6.251h5.314v19.487zm14.173-2.658a2.657 2.657 0 01-2.657 2.657h-9.744V6.252h12.401v16.83z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M19.468 16.952l1.7 1.701H15.11v1.771h6.058l-1.7 1.701 1.249 1.258 2.905-2.905a1.338 1.338 0 000-1.878l-2.905-2.897-1.25 1.25z',
                fill: '#242E30',
            },
        })]);
    },
};
