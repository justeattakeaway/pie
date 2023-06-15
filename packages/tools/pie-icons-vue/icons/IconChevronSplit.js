import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChevronSplit',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chevronSplit', 'IconChevronSplit');
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
                d: 'M11.307 6.25 8 2.864 4.693 6.25l-.902-.936 3.5-3.597a1.068 1.068 0 0 1 1.444 0l3.509 3.658-.937.875Z',
            },
        }), h('path', {
            attrs: {
                d: 'M4.693 9.75 8 13.049l3.307-3.378.893.919-3.5 3.596a1.068 1.068 0 0 1-1.444 0l-3.5-3.561.937-.875Z',
            },
        })]);
    },
};
