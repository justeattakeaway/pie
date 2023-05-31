import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChatConversation',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chatConversation');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M11.281 8.875v-5.25A1.54 1.54 0 0 0 9.75 2.094h-7a1.54 1.54 0 0 0-1.531 1.531v8.531h1.444l1.68-1.689c.043-.037.099-.059.157-.06h5.25a1.54 1.54 0 0 0 1.531-1.532Zm-7.875.665-.875.875v-6.79a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v5.25a.219.219 0 0 1-.219.219H4.5a1.522 1.522 0 0 0-1.085.446h-.009Zm11.375-3.29v8.531h-1.444l-1.68-1.689a.245.245 0 0 0-.157-.06H6.25A1.54 1.54 0 0 1 4.719 11.5H6.03a.219.219 0 0 0 .219.219h5.25c.401.003.786.16 1.076.437l.875.875V6.25a.22.22 0 0 0-.201-.219h-.875V4.72h.875a1.54 1.54 0 0 1 1.531 1.531Z',
            },
        })]);
    },
};
