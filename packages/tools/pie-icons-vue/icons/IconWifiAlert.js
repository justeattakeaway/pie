import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconWifiAlert',
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
            class: 'c-pieIcon c-pieIcon--wifiAlert'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.935 9.006a2.03 2.03 0 01.166-.796 6.746 6.746 0 00-2.94 2.047l1.006.876A5.6 5.6 0 016.05 9.645a2.17 2.17 0 01-.114-.639z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.899 8.21a1.925 1.925 0 01.052 1.435 5.6 5.6 0 011.882 1.461l1.006-.875a6.746 6.746 0 00-2.94-2.021z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.049 4.946a9.441 9.441 0 00-5.005 3.185l1.006.875A8.251 8.251 0 016.18 6.25l-.131-1.304z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.951 4.946L9.82 6.25a8.251 8.251 0 014.13 2.721l1.006-.875a9.442 9.442 0 00-5.005-3.15z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.2 12.602l1.006.875a2.293 2.293 0 013.588 0l1.006-.875A3.667 3.667 0 008 11.23a3.666 3.666 0 00-2.8 1.373z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.402 7.256l.43-4.375A2.564 2.564 0 008 2.75a2.625 2.625 0 00-.875.14l.429 4.375.848-.009z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.247 9.006a.752.752 0 101.505 0 .752.752 0 00-1.505 0z',
                fill: '#242E30'
            }
        })]);
    }
};
