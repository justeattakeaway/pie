import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretUp',
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
            class: 'c-pieIcon c-pieIcon--caretUp'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.996 10.231L8.936 4.29a1.313 1.313 0 00-1.076-.577 1.313 1.313 0 00-1.085.612l-3.798 5.941a1.33 1.33 0 000 1.339 1.312 1.312 0 001.155.682h7.823a1.312 1.312 0 001.085-2.056h-.044zm-8.907.744l3.771-5.95 4.051 5.95H4.09z',
                fill: '#242E30'
            }
        })]);
    }
};
