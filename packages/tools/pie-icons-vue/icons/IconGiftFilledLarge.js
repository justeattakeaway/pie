import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGiftFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--giftFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.8313 28.215H23.875C25.3188 28.215 26.5 27.0338 26.5 25.59V14.215H16.8313V28.215Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 25.59C5.5 27.0338 6.68125 28.215 8.125 28.215H15.0813V14.215H5.5V25.59Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16.8487 8.09003V8.07253C17.1025 6.63753 18.345 5.53503 19.8587 5.53503C20.0337 5.53503 20.2088 5.56128 20.3838 5.58753V3.83753C20.2088 3.82003 20.0425 3.78503 19.8587 3.78503C18.2575 3.78503 16.84 4.57253 15.965 5.78003C15.09 4.57253 13.6725 3.78503 12.0712 3.78503C11.9225 3.78503 11.7825 3.81128 11.6337 3.82878V5.57878C11.7825 5.56128 11.9225 5.53503 12.0712 5.53503C13.5763 5.53503 14.8275 6.62878 15.0813 8.07253V8.09003H3.75V12.465H15.0813V8.08128H16.8313V12.4563H28.25V8.09003H16.8487Z',
                fill: '#242E30'
            }
        })]);
    }
};
