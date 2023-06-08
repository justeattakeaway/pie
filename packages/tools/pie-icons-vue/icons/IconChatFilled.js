import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChatFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chatFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.969h-8.75A1.54 1.54 0 0 0 2.094 4.5v10.281h1.444l2.555-2.564c.043-.037.099-.059.157-.06h6.125a1.54 1.54 0 0 0 1.531-1.532V4.5a1.54 1.54 0 0 0-1.531-1.531Z',
            },
        })]);
    },
};
