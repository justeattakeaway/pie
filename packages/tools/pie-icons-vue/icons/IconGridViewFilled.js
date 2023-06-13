import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconGridViewFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--gridViewFilled');
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
                d: 'M2.094 6.906h4.812V2.094H2.094v4.812Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.094 6.906h4.812V2.094H9.094v4.812Z',
            },
        }), h('path', {
            attrs: {
                d: 'M2.094 13.906h4.812V9.094H2.094v4.812Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.094 13.906h4.812V9.094H9.094v4.812Z',
            },
        })]);
    },
};
