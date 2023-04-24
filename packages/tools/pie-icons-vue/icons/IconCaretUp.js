import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCaretUp',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--caretUp');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.996 10.231 8.936 4.29a1.313 1.313 0 0 0-1.076-.577 1.313 1.313 0 0 0-1.085.612l-3.798 5.941a1.33 1.33 0 0 0 0 1.339 1.312 1.312 0 0 0 1.155.682h7.823a1.312 1.312 0 0 0 1.085-2.056h-.044Zm-8.907.744 3.771-5.95 4.051 5.95H4.09Z',
            },
        })]);
    },
};
