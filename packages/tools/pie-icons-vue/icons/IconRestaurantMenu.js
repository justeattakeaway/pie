import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRestaurantMenu',
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
            class: 'c-pieIcon c-pieIcon--restaurantMenu',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.094h-8.75a1.54 1.54 0 00-1.531 1.531v10.281h11.812V3.625a1.54 1.54 0 00-1.531-1.531zm.219 10.5H3.406V3.625a.219.219 0 01.219-.219h8.75a.219.219 0 01.219.219v8.969z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M10.625 7.668a2.625 2.625 0 00-2.196-2.144.437.437 0 10-.875 0 2.625 2.625 0 00-2.135 2.144 2.478 2.478 0 000 .437v.438h5.25v-.438a2.48 2.48 0 00-.044-.438z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M10.625 9.645h-5.25v1.313h5.25V9.644z',
                fill: '#242E30',
            },
        })]);
    },
};
