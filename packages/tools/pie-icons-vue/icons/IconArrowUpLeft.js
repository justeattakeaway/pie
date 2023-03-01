import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowUpLeft',
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
            class: 'c-pieIcon c-pieIcon--arrowUpLeft'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.795 11.867l-7.21-7.21h4.655V3.345H4.439a1.094 1.094 0 00-1.094 1.094v5.801h1.313V5.585l7.21 7.21.927-.928z',
                fill: '#242E30'
            }
        })]);
    }
};
