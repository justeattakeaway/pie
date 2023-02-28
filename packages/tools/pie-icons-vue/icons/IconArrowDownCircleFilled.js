import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowDownCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--arrowDownCircleFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.656 1.254v7.49l1.899-1.899.945.927-2.712 2.713a1.084 1.084 0 01-1.54 0L4.5 7.772l.945-.927 1.899 1.899v-7.49a6.781 6.781 0 101.312 0z',
                fill: '#242E30'
            }
        })]);
    }
};
