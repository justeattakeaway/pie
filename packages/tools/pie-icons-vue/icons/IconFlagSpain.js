import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagSpain',
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
            class: 'c-pieIcon c-pieIcon--spain',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#FFDA44',
                d: 'M1 8c0 .856.153 1.677.438 2.434l6.562.61 6.562-.61a6.99 6.99 0 0 0 0-4.868L8 4.956l-6.563.61A6.99 6.99 0 0 0 1 8Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M14.562 5.566A7.001 7.001 0 0 0 4.003 2.254a7.002 7.002 0 0 0-2.566 3.312h13.125ZM1.438 10.434A7.002 7.002 0 0 0 8 15a6.999 6.999 0 0 0 6.562-4.566H1.438Z',
            },
        })]);
    },
};
