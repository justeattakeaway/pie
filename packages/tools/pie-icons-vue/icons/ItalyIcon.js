import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ItalyIcon',
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
            class: 'c-pieIcon c-pieIcon--italy'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z',
                fill: '#EEEEEE'
            }
        }), h('path', {
            attrs: {
                d: 'M15 8C14.9998 6.57078 14.5622 5.17586 13.7458 4.0027C12.9295 2.82955 11.7737 1.93438 10.4336 1.4375V14.5625C11.7737 14.0656 12.9295 13.1705 13.7458 11.9973C14.5622 10.8241 14.9998 9.42922 15 8Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M1 8C1.00017 9.42922 1.43783 10.8241 2.25415 11.9973C3.07047 13.1705 4.22634 14.0656 5.56641 14.5625V1.4375C4.22634 1.93438 3.07047 2.82955 2.25415 4.0027C1.43783 5.17586 1.00017 6.57078 1 8Z',
                fill: '#6DA544'
            }
        })]);
    }
};
