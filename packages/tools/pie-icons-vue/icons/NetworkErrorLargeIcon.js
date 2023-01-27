import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'NetworkErrorLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--networkErrorLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7 25H11.8V14.5H7V25ZM8.5 16H10.3V23.5H8.5V16Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25 7H20.2V21.5425L18.4 18.5425V10.75H13.75L10.1275 4.75H8.37248L13.6225 13.4575V25H18.4225V21.46L20.2225 24.46V25H20.5L21.85 27.25H23.605L22.255 25H25V7ZM15.1 12.25H16.9V16.045L15.1 13.045V12.25ZM16.9 23.5H15.1V15.955L16.9 18.955V23.5ZM23.5 23.5H21.7V8.5H23.5V23.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
