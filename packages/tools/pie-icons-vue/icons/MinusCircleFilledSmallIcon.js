import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'MinusCircleFilledSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--minusCircleFilledSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.7951 2.20499C10.8448 1.26156 9.63644 0.620608 8.32236 0.362951C7.00828 0.105293 5.64733 0.242464 4.4111 0.757168C3.17487 1.27187 2.1187 2.14107 1.37575 3.25516C0.632796 4.36926 0.236328 5.67839 0.236328 7.01749C0.236328 8.35659 0.632796 9.66572 1.37575 10.7798C2.1187 11.8939 3.17487 12.7631 4.4111 13.2778C5.64733 13.7925 7.00828 13.9297 8.32236 13.672C9.63644 13.4144 10.8448 12.7734 11.7951 11.83C12.429 11.1991 12.932 10.4491 13.2753 9.62326C13.6185 8.79739 13.7952 7.91184 13.7952 7.01749C13.7952 6.12314 13.6185 5.23759 13.2753 4.41172C12.932 3.58584 12.429 2.83591 11.7951 2.20499ZM10.4039 7.65624H3.5964V6.34374H10.4039V7.65624Z'
            }
        })]);
    }
};
