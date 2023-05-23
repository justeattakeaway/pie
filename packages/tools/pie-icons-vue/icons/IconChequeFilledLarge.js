import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChequeFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chequeFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm19.832 14.539-3.788.586.542-3.789 6.23-6.274a2.31 2.31 0 0 1 2.503-.498l1.435-1.435 1.242 1.242-1.435 1.435a2.31 2.31 0 0 1-.498 2.503l-6.23 6.23Zm9.293-2.914v14H2.875v-14h11.891l-.787 5.521 6.676-.954 4.559-4.567h3.911ZM17.75 19.5H7.25v1.75h10.5V19.5Zm7 0h-3.5v1.75h3.5V19.5Z',
            },
        })]);
    },
};
