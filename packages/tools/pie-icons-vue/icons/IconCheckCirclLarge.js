import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckCirclLarge',
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
            class: 'c-pieIcon c-pieIcon--checkCirclLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm27.375 11.38-1.339 1.426a10.587 10.587 0 1 1-2.94-4.55l1.2-1.277a12.206 12.206 0 1 0 3.08 4.375v.026Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M14.941 19.5h-.096l-3.727-4.2-1.313 1.164 3.745 4.217a1.828 1.828 0 0 0 1.33.578 1.802 1.802 0 0 0 1.33-.587l9.03-9.625 1.26-1.33.936-.997-1.295-1.19-.665.717-1.216 1.295-9.319 9.958Z',
            },
        })]);
    },
};
