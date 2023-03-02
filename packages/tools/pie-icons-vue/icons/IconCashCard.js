import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCashCard',
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
            class: 'c-pieIcon c-pieIcon--cashCard',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.61 11.894a1.076 1.076 0 100-2.153 1.076 1.076 0 000 2.153z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M3.257 8.464h-.752a.105.105 0 01-.114-.105V5.952h7.875v.657h1.313V3.765a1.426 1.426 0 00-1.418-1.426H2.505a1.426 1.426 0 00-1.426 1.426v4.594A1.426 1.426 0 002.505 9.75h.752V8.464zm-.875-4.699a.114.114 0 01.123-.14h7.656a.104.104 0 01.1.07.106.106 0 01.005.044v.875H2.391l-.009-.849z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M15 14.055H4.229V7.589H15v6.466zm-9.45-1.313h8.137V8.875H5.541l.009 3.867z',
                fill: '#242E30',
            },
        })]);
    },
};
