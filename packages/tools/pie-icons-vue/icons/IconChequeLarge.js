import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChequeLarge',
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
            class: 'c-pieIcon c-pieIcon--chequeLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.75 10.75l1.531-1.531a3.07 3.07 0 00.517-3.623l1.233-1.225-1.277-1.242-1.225 1.233a3.071 3.071 0 00-3.623.517L16 10.75H2.875V26.5h26.25V10.75H24.75zm-7.332 1.12l5.757-5.749a1.321 1.321 0 111.864 1.864l-5.749 5.757-2.179.307.306-2.179zm9.957 12.88H4.625V12.5h10.902l-.516 3.614 5.067-.727L23 12.5h4.375v12.25zM7.25 19.5h10.5v1.75H7.25V19.5zm14 0h3.5v1.75h-3.5V19.5z',
                fill: '#242E30'
            }
        })]);
    }
};
