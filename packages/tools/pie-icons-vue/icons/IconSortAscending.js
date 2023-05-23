import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSortAscending',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sortAscending');
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
                d: 'M1 7.344h6.816l-.551 1.312H1V7.344Zm8.286-3.5H1v1.312h7.735l.551-1.312ZM1 12.156h4.786l.56-1.312H1v1.312Zm12.994-2.502L12.156 11.5V6.25h-1.312v5.25L9.006 9.654l-.927.971 2.625 2.625a1.075 1.075 0 0 0 1.54 0l2.625-2.625-.875-.971Z',
            },
        })]);
    },
};
