import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'SpainIcon',
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
            class: 'c-pieIcon c-pieIcon--spain'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1 7.99999C1 8.85613 1.15312 9.67672 1.4375 10.4344L7.99997 11.0444L14.5624 10.4344C15.1459 8.86392 15.1459 7.13606 14.5624 5.56559L7.99997 4.95562L1.4375 5.56559C1.14813 6.34458 0.999982 7.16896 1 7.99999Z',
                fill: '#FFDA44'
            }
        }), h('path', {
            attrs: {
                d: 'M14.5624 5.56559C14.0652 4.22551 13.1699 3.06977 11.9967 2.25362C10.8236 1.43746 9.42891 1 7.99997 1C6.57103 1 5.17631 1.43746 4.00319 2.25362C2.83007 3.06977 1.93475 4.22551 1.4375 5.56559H14.5624ZM1.4375 10.4344C1.93475 11.7745 2.83007 12.9302 4.00319 13.7464C5.17631 14.5625 6.57103 15 7.99997 15C9.42891 15 10.8236 14.5625 11.9967 13.7464C13.1699 12.9302 14.0652 11.7745 14.5624 10.4344H1.4375Z',
                fill: '#D80027'
            }
        })]);
    }
};
