import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOffice',
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
            class: 'c-pieIcon c-pieIcon--office',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.094h-8.75a1.54 1.54 0 00-1.531 1.531v10.281h11.812V3.625a1.54 1.54 0 00-1.531-1.531zm.219 10.5H8.656v-1.969H7.344v1.969H3.406V3.625a.219.219 0 01.219-.219h8.75a.219.219 0 01.219.219v8.969zm-3.719-7h1.75v1.312h-1.75V5.594zm-3.5 0h1.75v1.312h-1.75V5.594zm3.5 2.625h1.75V9.53h-1.75V8.22zm-3.5 0h1.75V9.53h-1.75V8.22z',
                fill: '#242E30',
            },
        })]);
    },
};
