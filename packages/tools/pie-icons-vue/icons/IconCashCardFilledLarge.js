import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCashCardFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--cashCardFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M20.174 8.484a1.969 1.969 0 00-1.96-1.943H5.22a1.96 1.96 0 00-1.96 1.943h16.914z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M6.27 13.646h13.904V11.11H3.26v6.063a1.951 1.951 0 001.96 1.952h1.05v-5.478z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8.02 15.396v10.99h20.23v-10.99H8.02zm6.23 6.37h-3.045v-1.75h3.045v1.75zm3.85 1.89a2.765 2.765 0 11.035 0H18.1zm6.93-1.89h-3.045v-1.75h3.08l-.035 1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
