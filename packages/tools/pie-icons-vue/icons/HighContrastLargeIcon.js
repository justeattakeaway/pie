import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'HighContrastLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--highContrastLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C9.245 3.75 3.75 9.245 3.75 16C3.75 22.755 9.245 28.25 16 28.25C22.755 28.25 28.25 22.755 28.25 16C28.25 9.245 22.755 3.75 16 3.75ZM16 26.5088C10.2075 26.5088 5.49125 21.7925 5.49125 16C5.49125 10.2075 10.2075 5.49125 16 5.49125C21.7925 5.49125 26.5088 10.2075 26.5088 16C26.5088 21.7925 21.7925 26.5088 16 26.5088Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.24125 16C7.24125 20.83 11.17 24.7588 16 24.7588V7.24125C11.17 7.24125 7.24125 11.17 7.24125 16Z',
                fill: '#242E30'
            }
        })]);
    }
};
