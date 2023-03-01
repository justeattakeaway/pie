import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationPinUserLarge',
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
            class: 'c-pieIcon c-pieIcon--locationPinUserLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15.799 15.256a4.13 4.13 0 10-4.13-4.121 4.122 4.122 0 004.13 4.121zm0-6.597a2.476 2.476 0 110 4.952 2.476 2.476 0 010-4.952z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23.586 6.13a10.65 10.65 0 00-15.172 0 10.92 10.92 0 000 15.321L16 29.125l7.586-7.674a10.92 10.92 0 000-15.321zm-4.655 17.684l-2.056 2.117-.875.875-2.765-2.791-3.57-3.64a4.908 4.908 0 013.833-1.82H18.1a4.847 4.847 0 014.025 2.065l-3.194 3.194zm4.288-4.463a6.554 6.554 0 00-5.119-2.476h-4.603a6.564 6.564 0 00-4.9 2.179 9.275 9.275 0 01.99-11.804 9.004 9.004 0 0112.827 0 9.275 9.275 0 01.805 12.101z',
                fill: '#242E30'
            }
        })]);
    }
};
