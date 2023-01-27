import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ChevronDownLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--chevronDownLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.87625 9.875L16 20.375H16.0963L26.1237 9.875L27.375 11.1087L17.3125 21.6087C16.9571 21.9428 16.4877 22.1288 16 22.1288C15.5123 22.1288 15.0429 21.9428 14.6875 21.6087L4.625 11.0913L5.87625 9.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
