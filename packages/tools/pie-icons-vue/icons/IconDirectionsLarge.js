import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconDirectionsLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--directionsLarge', 'IconDirectionsLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.451 13.664 20.9 7.25h-6.65V5.5a1.75 1.75 0 0 0-1.75-1.75h-1.75A1.75 1.75 0 0 0 9 5.5v1.75H2.875v14.875H9v5.25h1.75v-5.25h1.75v5.25h1.75v-5.25h6.65l7.499-5.495a1.91 1.91 0 0 0 .726-1.505 1.873 1.873 0 0 0-.674-1.461ZM10.75 5.938a.438.438 0 0 1 .438-.438h.874a.438.438 0 0 1 .438.438V7.25h-1.75V5.937Zm9.45 14.437H4.625V9H20.2l7.175 6.125-7.175 5.25Z',
            },
        }), h('path', {
            attrs: {
                d: 'm19.78 14.197-2.861-2.87-1.234 1.243 1.68 1.68H10.75v6.125h1.75V16h4.865l-1.68 1.68 1.234 1.242 2.861-2.87a1.303 1.303 0 0 0 0-1.854Z',
            },
        })]);
    },
};
