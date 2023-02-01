import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPauseCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--pauseCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C13.5772 3.75 11.2088 4.46845 9.19427 5.8145C7.17977 7.16054 5.60965 9.07373 4.68248 11.3121C3.75531 13.5505 3.51272 16.0136 3.98539 18.3899C4.45805 20.7661 5.62475 22.9489 7.33795 24.6621C9.05114 26.3752 11.2339 27.542 13.6101 28.0146C15.9864 28.4873 18.4495 28.2447 20.6879 27.3175C22.9263 26.3904 24.8395 24.8202 26.1855 22.8057C27.5316 20.7912 28.25 18.4228 28.25 16C28.25 12.7511 26.9594 9.63526 24.6621 7.33794C22.3647 5.04062 19.2489 3.75 16 3.75ZM14.25 20.2H12.5V11.8H14.25V20.2ZM19.5 20.2H17.75V11.8H19.5V20.2Z',
                fill: '#242E30'
            }
        })]);
    }
};
