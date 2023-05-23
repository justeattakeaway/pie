import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSync',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sync');
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
                d: 'M8.875 2.164A5.906 5.906 0 0 1 13.906 8a5.845 5.845 0 0 1-1.75 4.174l-.927-.928a4.587 4.587 0 0 0 0-6.492 4.507 4.507 0 0 0-2.354-1.251V4.78L6.25 2.75 8.875 1v1.164ZM3.406 8a4.568 4.568 0 0 0 1.348 3.246 4.506 4.506 0 0 0 2.371 1.252V11.22l2.625 2.03L7.125 15v-1.164A5.906 5.906 0 0 1 2.094 8a5.845 5.845 0 0 1 1.75-4.174l.91.928A4.567 4.567 0 0 0 3.406 8Z',
            },
        })]);
    },
};
