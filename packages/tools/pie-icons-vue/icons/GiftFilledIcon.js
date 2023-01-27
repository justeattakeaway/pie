import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'GiftFilledIcon',
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
            class: 'c-pieIcon c-pieIcon--giftFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.33333 4.96594H8.66667V7.62996H14V4.96594H8.66667C8.68444 4.06905 9.42222 3.34089 10.3289 3.34089C10.4444 3.34089 10.5511 3.34977 10.6667 3.37641V2.03552C10.5511 2.02664 10.4444 2 10.3289 2C9.37778 2 8.54222 2.45288 8 3.13665C7.44889 2.45288 6.61333 2 5.67111 2C5.55556 2 5.44889 2.01776 5.33333 2.03552V3.36753C5.44 3.34977 5.55556 3.33201 5.67111 3.33201C6.57778 3.33201 7.31556 4.06017 7.33333 4.95706H2V7.62108H7.33333V4.95706V4.96594Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.66667 14.29H11.52C12.4 14.29 13.1111 13.5707 13.1111 12.7005V8.96197H8.66667V14.29Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M2.88889 8.96197V12.7005C2.88889 13.5796 3.6 14.29 4.48 14.29H7.33333V8.96197H2.88889Z',
                fill: '#242E30'
            }
        })]);
    }
};
