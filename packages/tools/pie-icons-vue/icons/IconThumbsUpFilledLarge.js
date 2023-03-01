import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconThumbsUpFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--thumbsUpFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.469 18.065L26.5 24.61a4.375 4.375 0 01-4.086 2.765h-8.882c-.295-.407-.566-.83-.813-1.269a8.522 8.522 0 01-1.094-4.419 12.118 12.118 0 011.085-5.25c.246-.467.524-.917.831-1.347.779-1.155 5.39-10.404 5.39-10.404a3.43 3.43 0 013.754 2.135c.241.622.293 1.3.149 1.952l-.971 4.82 4.724 1.165a2.626 2.626 0 011.882 3.307zm-17.037 9.31H3.75v-12.25h7.682c-.087.149-.183.306-.27.481a13.841 13.841 0 00-1.287 6.082 10.29 10.29 0 001.304 5.25l.253.437z',
                fill: '#242E30'
            }
        })]);
    }
};
