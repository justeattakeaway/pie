import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--geolocationCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.479 22.44h-1.75l-.551-2.205a4.752 4.752 0 00-3.448-3.447l-2.205-.552v-1.75l11.917-3.929L17.48 22.44zm-4.664-7.158a6.432 6.432 0 013.903 3.903l1.96-5.862-5.863 1.96zM16 28.25a12.25 12.25 0 110-24.5 12.25 12.25 0 010 24.5zM16 5.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21z',
                fill: '#242E30'
            }
        })]);
    }
};
