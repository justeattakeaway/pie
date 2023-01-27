import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'RadioUnselectedLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--radioUnselectedLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C9.245 3.75 3.75 9.245 3.75 16C3.75 22.755 9.245 28.25 16 28.25C22.755 28.25 28.25 22.755 28.25 16C28.25 9.245 22.755 3.75 16 3.75ZM16 26.5C10.2075 26.5 5.5 21.7925 5.5 16C5.5 10.2075 10.2075 5.5 16 5.5C21.7925 5.5 26.5 10.2075 26.5 16C26.5 21.7925 21.7925 26.5 16 26.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
