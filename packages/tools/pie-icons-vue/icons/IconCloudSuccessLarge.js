import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloudSuccessLarge',
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
            class: 'c-pieIcon c-pieIcon--cloudSuccessLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.137 25.625H8.65a6.388 6.388 0 01-6.388-6.387A6.309 6.309 0 016.2 13.375a10.045 10.045 0 0119.819 1.383 5.679 5.679 0 013.719 5.267 5.61 5.61 0 01-5.6 5.6zM8.65 14.6a4.14 4.14 0 00-1.4.228 4.585 4.585 0 00-3.246 4.375 4.646 4.646 0 004.646 4.672h15.487a3.85 3.85 0 003.85-3.85 3.894 3.894 0 00-3.01-3.771l-.673-.158v-.691a8.304 8.304 0 00-16.179-2.537c.8-.062 1.603.024 2.371.253l-.525 1.671A4.762 4.762 0 008.65 14.6zm6.125 5.775a1.453 1.453 0 001.05-.455l5.512-5.95-1.286-1.19-5.25 5.688-1.925-2.17-1.312 1.155 2.196 2.467a1.417 1.417 0 001.041.455h-.026z',
                fill: '#242E30',
            },
        })]);
    },
};
