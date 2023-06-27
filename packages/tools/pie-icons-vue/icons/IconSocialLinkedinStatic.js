import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialLinkedinStatic',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--linkedinStatic', 'IconSocialLinkedinStatic');
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
                fill: '#069',
                d: 'M2 2.86A.87.87 0 0 1 2.881 2h10.162a.87.87 0 0 1 .881.86v10.28a.87.87 0 0 1-.88.86H2.88A.87.87 0 0 1 2 13.14V2.86Z',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                'fill-rule': 'evenodd',
                d: 'M5.614 12.045V6.627h-1.8v5.418h1.8Zm-.9-6.158c.628 0 1.019-.416 1.019-.936-.012-.532-.391-.937-1.007-.937-.616 0-1.02.405-1.02.937 0 .52.392.936.996.936h.012Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                'fill-rule': 'evenodd',
                d: 'M6.61 12.045h1.802V9.02c0-.162.012-.324.06-.44.13-.323.426-.658.923-.658.652 0 .913.497.913 1.225v2.9h1.8V8.937c0-1.664-.888-2.439-2.073-2.439-.971 0-1.398.544-1.635.913h.012v-.785H6.611c.024.508 0 5.418 0 5.418Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
