import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRefresh',
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
            class: 'c-pieIcon c-pieIcon--refresh',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.594 1.875v2.791L12.48 4.5a5.67 5.67 0 101.076 4.629l-1.286-.254a4.375 4.375 0 11-.875-3.553l.21.272h-2.73v1.312h3.938a1.094 1.094 0 001.093-1.093V1.874h-1.312z',
                fill: '#242E30',
            },
        })]);
    },
};
