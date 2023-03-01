import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPizzaLarge',
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
            class: 'c-pieIcon c-pieIcon--pizzaLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.53 10.129c-1.698-2.643-6.834-8.707-17.911-8.042a2.625 2.625 0 00-2.494 2.66v25.13L27.988 13.63a2.625 2.625 0 00.542-3.5zM9.875 16.578a1.618 1.618 0 01.67 3.149 1.62 1.62 0 01-.67.07v-3.22zm0 4.97h.131a3.37 3.37 0 002.418-5.873 3.37 3.37 0 00-2.549-.848V7.872c7.997-.184 12.25 3.754 14.289 6.624L9.875 26.185v-4.637zm17.001-9.275l-1.356 1.102c-2.021-2.765-6.764-7.429-15.645-7.254V4.747a.875.875 0 01.875-.875c.525 0 1.05-.043 1.549-.043 9.047-.035 13.326 4.996 14.761 7.245a.875.875 0 01-.184 1.199zm-9.564-1.523a3.062 3.062 0 100 6.125 3.062 3.062 0 000-6.125zm0 4.375a1.313 1.313 0 110-2.626 1.313 1.313 0 010 2.626z',
                fill: '#242E30',
            },
        })]);
    },
};
