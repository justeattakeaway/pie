import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClose',
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
            class: 'c-pieIcon c-pieIcon--close'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.868 3.205L8 7.072 4.133 3.205l-.928.927L7.073 8l-3.868 3.867.928.928L8 8.927l3.868 3.868.927-.928L8.928 8l3.867-3.868-.927-.927z',
                fill: '#242E30'
            }
        })]);
    }
};
