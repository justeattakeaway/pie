import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFullscreenExpand',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--fullscreenExpand');
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
                d: 'm5.99 3.406.737-1.312H2.094v4.633l1.312-.738V3.406H5.99Z',
            },
        }), h('path', {
            attrs: {
                d: 'M10.01 3.406h2.584V5.99l1.312.738V2.094H9.273l.738 1.312Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.594 10.01v2.584H10.01l-.738 1.312h4.633V9.273l-1.312.738Z',
            },
        }), h('path', {
            attrs: {
                d: 'm3.406 10.01-1.312-.737v4.633h4.633l-.738-1.312H3.406V10.01Z',
            },
        })]);
    },
};
