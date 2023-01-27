import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ArrowUpLeftLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--arrowUpLeftLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.2838 24.0412L9.81375 8.57123H19.7363V6.82123H8.58C8.11587 6.82123 7.67075 7.0056 7.34256 7.33379C7.01438 7.66198 6.83 8.1071 6.83 8.57123V19.7362H8.58V9.80498L24.05 25.275L25.2838 24.0412Z',
                fill: '#242E30'
            }
        })]);
    }
};
