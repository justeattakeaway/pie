import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialGoogle',
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
            class: 'c-pieIcon c-pieIcon--google',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.864 6.63H14.3V6.6H8v2.8h3.956A4.198 4.198 0 013.8 8 4.2 4.2 0 018 3.8c1.07 0 2.045.404 2.786 1.064l1.98-1.98A6.968 6.968 0 008 1a7 7 0 106.864 5.63z',
                fill: '#FBC02D',
            },
        }), h('path', {
            attrs: {
                d: 'M1.807 4.742l2.3 1.686A4.198 4.198 0 018 3.8c1.07 0 2.045.404 2.786 1.064l1.98-1.98A6.968 6.968 0 008 1a6.996 6.996 0 00-6.193 3.742z',
                fill: '#E53935',
            },
        }), h('path', {
            attrs: {
                d: 'M8 15c1.808 0 3.45-.692 4.693-1.817l-2.166-1.833A4.168 4.168 0 018 12.2a4.198 4.198 0 01-3.95-2.781l-2.282 1.759A6.995 6.995 0 008 15z',
                fill: '#4CAF50',
            },
        }), h('path', {
            attrs: {
                d: 'M14.864 6.63l-.006-.03H8v2.8h3.956a4.21 4.21 0 01-1.43 1.95l2.167 1.833C12.54 13.323 15 11.5 15 8c0-.47-.048-.928-.136-1.37z',
                fill: '#1565C0',
            },
        })]);
    },
};
