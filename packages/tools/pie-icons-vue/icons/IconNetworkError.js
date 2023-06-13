import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNetworkError',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--networkError');
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
                d: 'M13.189 3.013H9.05v5.46L4.824 1.437H3.3l3.063 5.11H2.81v6.44H6.95v-5.46l2.1 3.5v1.96h1.181l.945 1.575H12.7l-.937-1.574h1.427V3.011Zm-7.551 8.75H4.124V7.824h1.514v3.937Zm6.238 0h-.875l-.638-1.138V4.299h1.513v7.463Z',
            },
        })]);
    },
};
