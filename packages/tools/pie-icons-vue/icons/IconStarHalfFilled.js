import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStarHalfFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--starHalfFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.544 9.601l3.386-3.299-4.672-.682a.227.227 0 01-.167-.114l-2.09-4.235-2.092 4.235a.228.228 0 01-.166.114l-4.673.682 3.43 3.3a.254.254 0 01.061.192l-.848 4.655 4.182-2.197a.219.219 0 01.21 0l4.183 2.197-.788-4.655a.251.251 0 01.044-.193zm-1.356.411l.35 2.04-1.83-.963A1.54 1.54 0 008 10.914V4.229l.875 1.855a1.531 1.531 0 001.155.875l2.048.297-1.453 1.4a1.54 1.54 0 00-.437 1.356z',
                fill: '#242E30',
            },
        })]);
    },
};
