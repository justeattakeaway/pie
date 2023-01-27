import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'RomaniaIcon',
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
            class: 'c-pieIcon c-pieIcon--romania'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.99744 1C7.14158 1 6.32126 1.15313 5.56384 1.4375L1.24353 8L5.56384 14.5625C6.34256 14.8519 7.16667 15.0001 7.99744 15C8.8533 15 9.67361 14.8469 10.431 14.5625L14.7513 8L10.431 1.4375C9.6523 1.14813 8.82819 0.999982 7.99744 1Z',
                fill: '#FFDA44'
            }
        }), h('path', {
            attrs: {
                d: 'M14.9974 8C14.9973 6.57078 14.5596 5.17586 13.7433 4.0027C12.927 2.82955 11.7711 1.93438 10.431 1.4375V14.5625C11.7711 14.0656 12.927 13.1705 13.7433 11.9973C14.5596 10.8241 14.9973 9.42922 14.9974 8Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M5.56384 14.5625V1.4375C4.2242 1.93475 3.06909 2.83008 2.25321 4.00321C1.43732 5.17633 1 6.57105 1 8C1 9.42895 1.43732 10.8237 2.25321 11.9968C3.06909 13.1699 4.2242 14.0652 5.56384 14.5625Z',
                fill: '#0052B4'
            }
        })]);
    }
};
