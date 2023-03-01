import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatBot',
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
            class: 'c-pieIcon c-pieIcon--chatBot'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.907 1.481a5.915 5.915 0 00-3.92 11.156l.053 2.258.752-.122a8.602 8.602 0 007.044-5.898 5.923 5.923 0 00-3.929-7.394zm2.67 7a7.2 7.2 0 01-5.25 4.839v-1.636l-.447-.14A4.611 4.611 0 018.175 2.53c.457.008.911.082 1.347.219a4.61 4.61 0 013.054 5.731zm-3.422-.779L10.424 8A2.415 2.415 0 015.75 8l1.269-.324a1.102 1.102 0 002.135 0v.026z',
                fill: '#242E30'
            }
        })]);
    }
};
