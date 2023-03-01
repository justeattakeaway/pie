import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBagFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--bagFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.625 8.125h-5.25v-3.5l-1.75-1.75h-5.25l-1.75 1.75v3.5h-5.25l-.788 18.253a2.625 2.625 0 001.584 2.535c.326.14.678.212 1.033.212h15.592a2.626 2.626 0 001.899-.814 2.624 2.624 0 00.718-1.933l-.788-18.253zm-7 7.875v-3.5h1.75V16l-1.75 1.75h-5.25L11.625 16v-3.5h1.75V16h5.25zm-5.25-11.375h5.25v3.5h-5.25v-3.5z',
                fill: '#242E30'
            }
        })]);
    }
};
