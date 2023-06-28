import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLaptop',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--laptop', 'IconLaptop');
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
                d: 'M13.031 9.549V4.5A1.54 1.54 0 0 0 11.5 2.969h-7A1.54 1.54 0 0 0 2.969 4.5v5.049l-1.75 2.625v.201a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531v-.201l-1.75-2.625ZM4.281 4.5a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v4.594H4.28V4.5Zm8.969 8.094H9.566l-.315-.718H6.75l-.315.718H2.75a.229.229 0 0 1-.175-.088l1.4-2.1h8.05l1.4 2.1a.228.228 0 0 1-.175.088Z',
            },
        })]);
    },
};
