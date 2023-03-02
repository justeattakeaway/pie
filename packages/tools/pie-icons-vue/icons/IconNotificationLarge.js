import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNotificationLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--notificationLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 21.766l-.683-.682a9.554 9.554 0 01-2.817-6.834v-.875a7.875 7.875 0 00-7-7.822V2.875h-1.75v2.678a8.137 8.137 0 00-7 8.146v.551a9.555 9.555 0 01-2.817 6.808l-.683.708v2.984h6.869a4.506 4.506 0 109.012 0h6.869v-2.984zM16 27.375a2.765 2.765 0 01-2.765-2.625h5.53A2.765 2.765 0 0116 27.375zM25.625 23H6.375v-.516l.166-.167a11.28 11.28 0 003.334-8.067v-.578a6.361 6.361 0 015.512-6.422 6.072 6.072 0 014.726 1.549 6.126 6.126 0 012.012 4.576v.875a11.28 11.28 0 003.334 8.041l.166.166V23z',
                fill: '#242E30',
            },
        })]);
    },
};
