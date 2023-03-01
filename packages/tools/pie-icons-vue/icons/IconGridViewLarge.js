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
                d: 'M14.25 14.25H4.625V4.625h9.625v9.625zM6.375 12.5H12.5V6.375H6.375V12.5zm21 1.75H17.75V4.625h9.625v9.625zM19.5 12.5h6.125V6.375H19.5V12.5zm-5.25 14.875H4.625V17.75h9.625v9.625zm-7.875-1.75H12.5V19.5H6.375v6.125zm21 1.75H17.75V17.75h9.625v9.625zm-7.875-1.75h6.125V19.5H19.5v6.125z',
                fill: '#242E30'
            }
        })]);
    }
};
