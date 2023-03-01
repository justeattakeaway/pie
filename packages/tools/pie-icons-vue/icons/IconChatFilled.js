import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatFilled',
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
            class: 'c-pieIcon c-pieIcon--chatFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.969h-8.75A1.54 1.54 0 002.094 4.5v10.281h1.444l2.555-2.564c.043-.037.099-.059.157-.06h6.125a1.54 1.54 0 001.531-1.532V4.5a1.54 1.54 0 00-1.531-1.531z',
                fill: '#242E30'
            }
        })]);
    }
};
