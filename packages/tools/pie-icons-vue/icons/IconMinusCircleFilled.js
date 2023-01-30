import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinusCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--minusCircleFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.7951 3.20499C11.8448 2.26156 10.6364 1.62061 9.32236 1.36295C8.00828 1.10529 6.64733 1.24246 5.4111 1.75717C4.17487 2.27187 3.1187 3.14107 2.37575 4.25516C1.6328 5.36926 1.23633 6.67839 1.23633 8.01749C1.23633 9.35659 1.6328 10.6657 2.37575 11.7798C3.1187 12.8939 4.17487 13.7631 5.4111 14.2778C6.64733 14.7925 8.00828 14.9297 9.32236 14.672C10.6364 14.4144 11.8448 13.7734 12.7951 12.83C13.429 12.1991 13.932 11.4491 14.2753 10.6233C14.6185 9.79739 14.7952 8.91184 14.7952 8.01749C14.7952 7.12314 14.6185 6.23759 14.2753 5.41172C13.932 4.58584 13.429 3.83591 12.7951 3.20499ZM11.4039 8.65624H4.5964V7.34374H11.4039V8.65624Z',
                fill: '#242E30'
            }
        })]);
    }
};
