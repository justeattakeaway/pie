import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPieChartLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--pieChartLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16.875 2.875H16A13.125 13.125 0 0 0 2.875 16v.875h14v-14Zm-1.75 12.25h-10.5a11.375 11.375 0 0 1 10.5-10.5v10.5Zm.07 11.375-.14 1.75a12.294 12.294 0 0 1-11.016-9.625h1.793a10.552 10.552 0 0 0 9.363 7.875ZM28.25 16a12.294 12.294 0 0 1-11.305 12.25l-.14-1.75a10.5 10.5 0 0 0 1.82-20.668V4.03A12.25 12.25 0 0 1 28.25 16Z',
            },
        })]);
    },
};
