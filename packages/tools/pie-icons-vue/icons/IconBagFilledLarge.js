import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBagFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--bagFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.625 8.125H20.375V4.625L18.625 2.875H13.375L11.625 4.625V8.125H6.37499L5.58749 26.3775C5.57032 26.7316 5.62504 27.0855 5.74836 27.4178C5.87167 27.7501 6.06102 28.0541 6.30499 28.3112C6.54999 28.5683 6.84459 28.7729 7.17095 28.9128C7.49732 29.0526 7.84867 29.1248 8.20374 29.125H23.7962C24.1513 29.1248 24.5027 29.0526 24.829 28.9128C25.1554 28.7729 25.45 28.5683 25.695 28.3112C25.939 28.0541 26.1283 27.7501 26.2516 27.4178C26.3749 27.0855 26.4297 26.7316 26.4125 26.3775L25.625 8.125ZM18.625 16V12.5H20.375V16L18.625 17.75H13.375L11.625 16V12.5H13.375V16H18.625ZM13.375 4.625H18.625V8.125H13.375V4.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
