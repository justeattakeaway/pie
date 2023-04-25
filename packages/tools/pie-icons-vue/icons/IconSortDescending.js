import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSortDescending',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sortDescending');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M1 9.23h6.817l-.551-1.312H1V9.23Zm8.287 3.5H1v-1.312h7.736l.551 1.312ZM1 4.418h4.787l.56 1.312H1V4.418ZM13.995 6.92l-1.838-1.846v5.25h-1.312v-5.25L9.007 6.92l-.928-.97 2.626-2.626a1.077 1.077 0 0 1 1.54 0L14.87 5.95l-.875.971Z',
            },
        })]);
    },
};
