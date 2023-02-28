import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDownloadLarge',
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
            class: 'c-pieIcon c-pieIcon--downloadLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15.125 17.024V2.875h1.75v14.219l4.016-4.078 1.234 1.234-4.926 4.935a1.75 1.75 0 01-2.398 0L9.875 14.25l1.234-1.234 4.016 4.008zM24.75 7.25H19.5V9h5.25a.875.875 0 01.875.875v15.75a.875.875 0 01-.875.875H7.25a.875.875 0 01-.875-.875V9.875A.875.875 0 017.25 9h5.25V7.25H7.25a2.625 2.625 0 00-2.625 2.625v15.75A2.625 2.625 0 007.25 28.25h17.5a2.625 2.625 0 002.625-2.625V9.875A2.625 2.625 0 0024.75 7.25z',
                fill: '#242E30'
            }
        })]);
    }
};
