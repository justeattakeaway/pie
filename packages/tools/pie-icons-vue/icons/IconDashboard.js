import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDashboard',
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
            class: 'c-pieIcon c-pieIcon--dashboard',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.781 9.75c-.001.9-.18 1.793-.525 2.625h-1.461a5.435 5.435 0 00.306-4.585l.945-1.085a6.71 6.71 0 01.735 3.045zM8 4.281c.845 0 1.678.198 2.432.578l.875-1.015A6.773 6.773 0 001.22 9.75c.001.9.18 1.793.525 2.625h1.461A5.469 5.469 0 018 4.281zm2.012 5.031a2.406 2.406 0 11-.988-.875L13.25 3.67l.989.875-4.227 4.768zm-1.242.543a1.076 1.076 0 00-1.54 0 1.085 1.085 0 101.54 0z',
                fill: '#242E30',
            },
        })]);
    },
};
