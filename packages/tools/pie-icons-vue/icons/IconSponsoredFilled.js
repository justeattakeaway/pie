import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSponsoredFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sponsoredFilled');
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
                d: 'M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v8.75a1.54 1.54 0 0 0 1.531 1.531h8.75a1.54 1.54 0 0 0 1.531-1.531v-8.75a1.54 1.54 0 0 0-1.531-1.531ZM10.564 9.75H9.25V7.668L7.59 9.338a.525.525 0 0 0 0 .876l-.937.875a1.828 1.828 0 0 1 0-2.678L8.316 6.74H6.25V5.427h3.22a1.094 1.094 0 0 1 1.094 1.094V9.75Z',
            },
        })]);
    },
};
