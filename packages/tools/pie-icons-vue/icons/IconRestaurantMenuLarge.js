import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRestaurantMenuLarge',
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
            class: 'c-pieIcon c-pieIcon--restaurantMenuLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.5 22.125h-7v1.75h7v-1.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M23.875 3.75H8.125A2.625 2.625 0 005.5 6.375v21.927l.088-.052h20.825l.087.052V6.375a2.625 2.625 0 00-2.625-2.625zM7.25 26.5V6.375a.875.875 0 01.875-.875h15.75a.875.875 0 01.875.875V26.5H7.25z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M21.25 18.625h-10.5v1.75h10.5v-1.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M21.171 13.375a5.25 5.25 0 00-4.296-4.296.254.254 0 000-.079.875.875 0 00-1.75 0 .254.254 0 000 .079 5.25 5.25 0 00-4.296 4.296c-.049.29-.075.582-.079.875v.875h10.5v-.875a5.807 5.807 0 00-.079-.875zm-8.548 0a3.5 3.5 0 016.755 0h-6.755z',
                fill: '#242E30',
            },
        })]);
    },
};
