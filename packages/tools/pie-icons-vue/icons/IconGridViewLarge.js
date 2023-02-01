import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGridViewLarge',
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
            class: 'c-pieIcon c-pieIcon--gridViewLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.25 14.25H4.625V4.625H14.25V14.25ZM6.375 12.5H12.5V6.375H6.375V12.5ZM27.375 14.25H17.75V4.625H27.375V14.25ZM19.5 12.5H25.625V6.375H19.5V12.5ZM14.25 27.375H4.625V17.75H14.25V27.375ZM6.375 25.625H12.5V19.5H6.375V25.625ZM27.375 27.375H17.75V17.75H27.375V27.375ZM19.5 25.625H25.625V19.5H19.5V25.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
