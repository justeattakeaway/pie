import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMoreVertical',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--moreVertical', 'IconMoreVertical');
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
                d: 'M9.313 3.188a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.625 0ZM8 6.688a1.313 1.313 0 1 0 0 2.625 1.313 1.313 0 0 0 0-2.626ZM8 11.5a1.313 1.313 0 1 0 0 2.625A1.313 1.313 0 0 0 8 11.5Z',
            },
        })]);
    },
};
