import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagsAustria',
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
            class: 'c-pieIcon c-pieIcon--austria'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z',
                fill: '#EEEEEE'
            }
        }), h('path', {
            attrs: {
                d: 'M8 1C6.57078 1.00017 5.17586 1.43783 4.0027 2.25415C2.82955 3.07047 1.93438 4.22634 1.4375 5.56641H14.5625C14.0656 4.22634 13.1705 3.07047 11.9973 2.25415C10.8241 1.43783 9.42922 1.00017 8 1Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M8 15C9.42922 14.9998 10.8241 14.5622 11.9973 13.7458C13.1705 12.9295 14.0656 11.7737 14.5625 10.4336H1.4375C1.93438 11.7737 2.82955 12.9295 4.0027 13.7458C5.17586 14.5622 6.57078 14.9998 8 15Z',
                fill: '#D80027'
            }
        })]);
    }
};
