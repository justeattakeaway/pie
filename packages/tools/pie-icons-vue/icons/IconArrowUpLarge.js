import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowUpLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowUpLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.875 28.25V6.37499L23.875 13.375L25.1088 12.1412L17.2338 4.26624C17.0712 4.10353 16.8782 3.97446 16.6658 3.88639C16.4533 3.79832 16.2256 3.75299 15.9956 3.75299C15.7657 3.75299 15.5379 3.79832 15.3255 3.88639C15.113 3.97446 14.92 4.10353 14.7575 4.26624L6.88251 12.1412L8.12501 13.375L15.125 6.37499V28.25H16.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
