import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNavigationCollapse',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--navigationCollapse', 'IconNavigationCollapse');
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
                d: 'M2.32 2.373V13.45h8.64a3.325 3.325 0 0 0 3.331-3.322V2.373H2.321Zm1.338 1.33h1.33v8.417h-1.33V3.703Zm9.304 6.424a1.994 1.994 0 0 1-1.994 1.993H6.317V3.703h6.645v6.424Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.793 9.666v-3.5L9.187 7.99l2.606 1.675Z',
            },
        })]);
    },
};
