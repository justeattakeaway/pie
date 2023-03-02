import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockAddLarge',
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
            class: 'c-pieIcon c-pieIcon--clockAddLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M20.795 20.253l-5.67-3.404V9h1.75v6.851l4.83 2.896-.91 1.506z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16 3.75A12.25 12.25 0 004.266 19.5h1.847A10.325 10.325 0 015.5 16 10.5 10.5 0 1116 26.5a10.299 10.299 0 01-4.375-.971v1.898A12.25 12.25 0 1016 3.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M10.094 21.049v-3.736h-1.75v3.718H4.625v1.75l3.719-.017V26.5h1.75v-3.719h3.719v-1.75l-3.72.018z',
                fill: '#242E30',
            },
        })]);
    },
};
