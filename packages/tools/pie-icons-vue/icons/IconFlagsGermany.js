import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagsGermany',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--germany'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.438 10.435a7.001 7.001 0 0013.127 0L8 9.828l-6.563.607z',
                fill: '#FFDA44'
            }
        }), h('path', {
            attrs: {
                d: 'M8.001 1a7.001 7.001 0 00-6.563 4.567L8 6.174l6.564-.607A7.001 7.001 0 008 1z',
                fill: '#333'
            }
        }), h('path', {
            attrs: {
                d: 'M1.438 5.567a6.987 6.987 0 000 4.868h13.127a6.984 6.984 0 000-4.868H1.438z',
                fill: '#D80027'
            }
        })]);
    }
};
