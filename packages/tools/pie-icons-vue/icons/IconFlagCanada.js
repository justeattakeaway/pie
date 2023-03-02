import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagCanada',
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
            class: 'c-pieIcon c-pieIcon--canada',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15A7 7 0 108 1a7 7 0 000 14z',
                fill: '#EEE',
            },
        }), h('path', {
            attrs: {
                d: 'M15 8a7 7 0 00-3.957-6.305v12.61A7 7 0 0015 8zM1 8a7 7 0 003.957 6.306V1.694A7 7 0 001 8zm8.217.913l1.217-.612L9.827 8v-.61L8.61 8l.607-1.217H8.61L8 5.867l-.61.914h-.607l.607 1.216-1.217-.61V8l-.607.304 1.217.61-.306.61h1.222v.91h.602v-.91h1.22l-.304-.61z',
                fill: '#D80027',
            },
        })]);
    },
};
