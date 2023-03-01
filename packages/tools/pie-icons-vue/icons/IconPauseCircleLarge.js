import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPauseCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--pauseCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.5 11.8h1.75v8.4H12.5v-8.4zm5.25 0h1.75v8.4h-1.75v-8.4z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M28.25 16a12.25 12.25 0 11-24.499 0 12.25 12.25 0 0124.499 0zm-1.75 0a10.5 10.5 0 10-21 0 10.5 10.5 0 0021 0z',
                fill: '#242E30',
            },
        })]);
    },
};
