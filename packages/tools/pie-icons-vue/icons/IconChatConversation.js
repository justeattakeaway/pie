import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatConversation',
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
            class: 'c-pieIcon c-pieIcon--chatConversation',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.281 8.875v-5.25A1.54 1.54 0 009.75 2.094h-7a1.54 1.54 0 00-1.531 1.531v8.531h1.444l1.68-1.689c.043-.037.099-.059.157-.06h5.25a1.54 1.54 0 001.531-1.532zm-7.875.665l-.875.875v-6.79a.219.219 0 01.219-.219h7a.219.219 0 01.219.219v5.25a.219.219 0 01-.219.219H4.5a1.522 1.522 0 00-1.085.446h-.009zm11.375-3.29v8.531h-1.444l-1.68-1.689a.245.245 0 00-.157-.06H6.25A1.54 1.54 0 014.719 11.5H6.03a.219.219 0 00.219.219h5.25c.401.003.786.16 1.076.437l.875.875V6.25a.22.22 0 00-.201-.219h-.875V4.72h.875a1.54 1.54 0 011.531 1.531z',
                fill: '#242E30',
            },
        })]);
    },
};
