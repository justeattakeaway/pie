import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserFilled',
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
            class: 'c-pieIcon c-pieIcon--userFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.355 11.78C13.0556 10.981 12.5166 10.294 11.8118 9.81313C11.1069 9.33226 10.2706 9.081 9.41747 9.09374H6.58247C5.7293 9.081 4.89305 9.33226 4.18819 9.81313C3.48333 10.294 2.94433 10.981 2.64497 11.78L1.81372 14.125H14.1862L13.355 11.78Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.99994 8C9.69131 8 11.0624 6.62887 11.0624 4.9375C11.0624 3.24613 9.69131 1.875 7.99994 1.875C6.30857 1.875 4.93744 3.24613 4.93744 4.9375C4.93744 6.62887 6.30857 8 7.99994 8Z',
                fill: '#242E30'
            }
        })]);
    }
};
