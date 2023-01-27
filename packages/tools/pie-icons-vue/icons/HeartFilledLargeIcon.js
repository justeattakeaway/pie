import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'HeartFilledLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--heartFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 27.7513L26.8237 16.63C28.0884 15.2754 28.7917 13.4913 28.7917 11.6382C28.7917 9.78499 28.0884 8.00089 26.8237 6.64629C26.2016 6.0065 25.4575 5.49795 24.6354 5.15069C23.8133 4.80343 22.9299 4.62451 22.0375 4.62451C21.1451 4.62451 20.2617 4.80343 19.4396 5.15069C18.6175 5.49795 17.8734 6.0065 17.2512 6.64629L16 7.88004L14.7225 6.65504C14.101 6.01417 13.357 5.50465 12.5349 5.15669C11.7127 4.80874 10.829 4.62945 9.93625 4.62945C9.04348 4.62945 8.15981 4.80874 7.33763 5.15669C6.51546 5.50465 5.77154 6.01417 5.15 6.65504C3.88536 8.00964 3.182 9.79374 3.182 11.6469C3.182 13.5001 3.88536 15.2842 5.15 16.6388L16 27.7513Z',
                fill: '#242E30'
            }
        })]);
    }
};
