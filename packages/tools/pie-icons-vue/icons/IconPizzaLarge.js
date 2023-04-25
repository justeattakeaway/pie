import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPizzaLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--pizzaLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M28.53 10.129c-1.698-2.643-6.834-8.707-17.911-8.042a2.625 2.625 0 0 0-2.494 2.66v25.13L27.988 13.63a2.625 2.625 0 0 0 .542-3.5ZM9.875 16.578a1.618 1.618 0 0 1 .67 3.149 1.62 1.62 0 0 1-.67.07v-3.22Zm0 4.97h.131a3.37 3.37 0 0 0 2.418-5.873 3.37 3.37 0 0 0-2.549-.848V7.872c7.997-.184 12.25 3.754 14.289 6.624L9.875 26.185v-4.637Zm17.001-9.275-1.356 1.102c-2.021-2.765-6.764-7.429-15.645-7.254V4.747a.875.875 0 0 1 .875-.875c.525 0 1.05-.043 1.549-.043 9.047-.035 13.326 4.996 14.761 7.245a.875.875 0 0 1-.184 1.199Zm-9.564-1.523a3.062 3.062 0 1 0 0 6.125 3.062 3.062 0 0 0 0-6.125Zm0 4.375a1.313 1.313 0 1 1 0-2.626 1.313 1.313 0 0 1 0 2.626Z',
            },
        })]);
    },
};
