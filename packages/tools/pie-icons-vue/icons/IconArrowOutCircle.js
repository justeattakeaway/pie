import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconArrowOutCircle',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--arrowOutCircle', 'IconArrowOutCircle');
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
                d: 'M14.046 7.169 11.334 4.5l-.928.875 1.899 1.899H5.139v1.312h7.166l-1.899 1.908.928.927 2.712-2.712a1.111 1.111 0 0 0 0-1.54Z',
            },
        }), h('path', {
            attrs: {
                d: 'M8.149 13.408a5.469 5.469 0 0 1 0-10.938 5.25 5.25 0 0 1 2.87.875h2.056a6.695 6.695 0 0 0-4.926-2.188 6.781 6.781 0 1 0 0 13.563 6.659 6.659 0 0 0 4.926-2.188h-2.056a5.25 5.25 0 0 1-2.87.876Z',
            },
        })]);
    },
};
