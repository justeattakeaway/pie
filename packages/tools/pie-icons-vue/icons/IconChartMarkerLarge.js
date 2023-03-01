import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChartMarkerLarge',
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
            class: 'c-pieIcon c-pieIcon--chartMarkerLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9 22.125h1.75v7H9v-7zm6.125 7h1.75v-12.25h-1.75v12.25zm6.125-8.75v8.75H23v-8.75h-1.75zM21.25 9a2.625 2.625 0 01-.989 2.047L16 14.495l-4.261-3.412A2.626 2.626 0 0110.75 9V2.875h10.5V9zM19.5 4.625h-7V9a.874.874 0 00.332.682L16 12.255l3.168-2.538A.874.874 0 0019.5 9V4.625z',
                fill: '#242E30'
            }
        })]);
    }
};
