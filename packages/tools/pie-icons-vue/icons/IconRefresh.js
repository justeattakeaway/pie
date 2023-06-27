import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconRefresh',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--refresh', 'IconRefresh');
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
                d: 'M12.594 1.875v2.791L12.48 4.5a5.67 5.67 0 1 0 1.076 4.629l-1.286-.254a4.375 4.375 0 1 1-.875-3.553l.21.272h-2.73v1.312h3.938a1.094 1.094 0 0 0 1.093-1.093V1.874h-1.312Z',
            },
        })]);
    },
};
