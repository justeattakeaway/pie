import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNavigationExpand',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--navigationExpand');
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
                d: 'M1.93 2.373V13.45h8.64a3.323 3.323 0 0 0 3.322-3.322V2.373H1.93Zm1.33 1.33h3.1v8.417h-3.1V3.703Zm9.303 6.424a1.994 1.994 0 0 1-1.994 1.993H7.69V3.703h4.874v6.424Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm8.797 9.666 2.605-1.826-2.605-1.674',
            },
        })]);
    },
};
