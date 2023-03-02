import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSponsoredFilled',
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
            class: 'c-pieIcon c-pieIcon--sponsoredFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.094h-8.75a1.54 1.54 0 00-1.531 1.531v8.75a1.54 1.54 0 001.531 1.531h8.75a1.54 1.54 0 001.531-1.531v-8.75a1.54 1.54 0 00-1.531-1.531zM10.564 9.75H9.25V7.668L7.59 9.338a.525.525 0 000 .876l-.937.875a1.828 1.828 0 010-2.678L8.316 6.74H6.25V5.427h3.22a1.094 1.094 0 011.094 1.094V9.75z',
                fill: '#242E30',
            },
        })]);
    },
};
