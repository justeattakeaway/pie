import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNotificationOffLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--notificationOffLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 21.766l-.683-.682a9.554 9.554 0 01-2.817-6.834v-.875a7.875 7.875 0 00-7-7.822V2.875h-1.75v2.678a7.508 7.508 0 00-3.5 1.382l-2.476-4.06H7.1l3.15 5.25a8.409 8.409 0 00-2.126 5.574v.551a9.555 9.555 0 01-2.817 6.808l-.683.708v2.984h6.869a4.497 4.497 0 008.96.376l2.397 3.999H24.9l-2.625-4.375h5.101v-2.984zM16 27.375a2.765 2.765 0 01-2.765-2.625h5.53A2.765 2.765 0 0116 27.375zM11.713 23H6.375v-.516l.166-.167a11.28 11.28 0 003.334-8.067v-.578a6.667 6.667 0 011.33-3.99L19.176 23h-7.463zm13.912 0H21.25L12.5 8.431a5.757 5.757 0 012.887-1.181 6.072 6.072 0 014.726 1.549 6.126 6.126 0 012.012 4.576v.875a11.28 11.28 0 003.334 8.041l.166.166V23z',
                fill: '#242E30'
            }
        })]);
    }
};
