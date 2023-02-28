import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialTwitterCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--twitterCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.671a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm6.125 10.01v.377a8.4 8.4 0 01-12.889 7.078 5.888 5.888 0 004.366-1.225 2.95 2.95 0 01-2.756-2.047c.182.035.367.053.552.052a2.84 2.84 0 00.778-.105 2.957 2.957 0 01-2.362-2.896c.408.226.864.352 1.33.368a2.957 2.957 0 01-.875-3.947 8.347 8.347 0 006.125 3.089 2.841 2.841 0 01-.079-.674 2.949 2.949 0 012.879-3.001 2.984 2.984 0 012.161.928 5.782 5.782 0 001.872-.718 2.984 2.984 0 01-1.294 1.636 5.88 5.88 0 001.697-.463 6.3 6.3 0 01-1.505 1.548z',
                fill: '#242E30'
            }
        })]);
    }
};
