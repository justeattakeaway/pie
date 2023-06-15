import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPinAtHomeFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--pinAtHomeFilled', 'IconPinAtHomeFilled');
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
                d: 'M8.875 2.304a1.75 1.75 0 0 0-1.75.008 42.972 42.972 0 0 0-5.819 4.813l.91.875s.298-.289.753-.7v6.571H13.03V7.335c.455.411.744.691.753.7l.875-.945a42.875 42.875 0 0 0-5.784-4.786Zm-3.5 8.321a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm2.625 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm2.625 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Z',
            },
        })]);
    },
};
