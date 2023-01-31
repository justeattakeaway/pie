import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronLeftLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronLeftLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.8038 5.87625L11.3038 16C11.3002 16.032 11.3002 16.0643 11.3038 16.0963L21.8038 26.1588L20.57 27.375L10.07 17.3125C9.73597 16.9571 9.54999 16.4877 9.54999 16C9.54999 15.5123 9.73597 15.0429 10.07 14.6875L20.5875 4.625L21.8038 5.87625Z',
                fill: '#242E30'
            }
        })]);
    }
};
