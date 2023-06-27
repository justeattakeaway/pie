import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNoodlesLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--noodlesLarge', 'IconNoodlesLarge');
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
                d: 'M24.755 14.854a4.376 4.376 0 0 0-3.902-3.5l5.652-5.906-1.26-1.173-7 7.35 2.537-9.152L19.102 2l-2.432 8.627a7 7 0 0 0-11.734 4.227H4v4.375a7.875 7.875 0 0 0 5.39 7.446l.508 2.179h10.954l.508-2.179a7.875 7.875 0 0 0 5.39-7.446v-4.375h-1.995Zm-1.82 0h-4.121a7.008 7.008 0 0 0-.201-.963 2.626 2.626 0 0 1 4.322.963Zm-11.06-4.375a5.25 5.25 0 0 1 4.375 2.345c.146.23.272.474.376.726.2.413.34.852.42 1.304h-1.338a3.11 3.11 0 0 0-.254-.744 4.218 4.218 0 0 0-.289-.551 3.938 3.938 0 0 0-7.122 1.295h-1.34a5.25 5.25 0 0 1 5.172-4.375Zm1.995 4.375H9.871a2.197 2.197 0 0 1 3.824-.35c.053.096.105.192.166.324l.009.026ZM25 19.229a6.125 6.125 0 0 1-4.594 5.906l-.516.131-.429 1.838H11.29l-.429-1.838-.516-.131a6.125 6.125 0 0 1-4.594-5.906v-2.625H25v2.625Z',
            },
        })]);
    },
};
