import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'TermsAndConditionsSmallIcon',
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
            class: 'c-pieIcon c-pieIcon--termsAndConditionsSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.96875 1.09375V9.84375H0L2.17 13.125C2.30813 13.3352 2.49646 13.5077 2.71798 13.6269C2.93949 13.746 3.18722 13.8081 3.43875 13.8075H11.8737C12.1516 13.7878 12.4119 13.6644 12.6032 13.4619C12.7944 13.2593 12.9026 12.9923 12.9062 12.7137V1.09375H1.96875ZM3.43875 12.4688C3.40373 12.4693 3.36916 12.4607 3.33847 12.4439C3.30778 12.427 3.28202 12.4024 3.26375 12.3725L2.45 11.1562H9.30125L10.2812 12.4688H3.43875ZM11.5938 12.0225L9.94875 9.84375H3.28125V2.40625H11.5938V12.0225ZM9.625 5.90625H5.25V4.59375H9.625V5.90625ZM7.875 8.53125H5.25V7.21875H7.875V8.53125Z'
            }
        })]);
    }
};
