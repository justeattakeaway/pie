import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'FlagItalyIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--flagItaly'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z',
                fill: '#EEEEEE'
            }
        }), h('path', {
            attrs: {
                d: 'M14 7C13.9998 5.57078 13.5622 4.17586 12.7458 3.0027C11.9295 1.82955 10.7737 0.934378 9.43359 0.4375V13.5625C10.7737 13.0656 11.9295 12.1705 12.7458 10.9973C13.5622 9.82414 13.9998 8.42922 14 7Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M0 7C0.000174458 8.42922 0.437831 9.82414 1.25415 10.9973C2.07047 12.1705 3.22634 13.0656 4.56641 13.5625V0.4375C3.22634 0.934378 2.07047 1.82955 1.25415 3.0027C0.437831 4.17586 0.000174458 5.57078 0 7Z',
                fill: '#6DA544'
            }
        })]);
    }
};
