import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconArrowOutCircleLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--arrowOutCircleLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.512 15.037a1.696 1.696 0 0 0-.227-.27l-5.04-5.04-1.234 1.233 4.165 4.165H9.875v1.75h16.301l-4.165 4.165 1.234 1.234 5.005-5.04a1.75 1.75 0 0 0 .262-2.196Z',
            },
        }), h('path', {
            attrs: {
                d: 'M16 26.5a10.5 10.5 0 1 1 6.921-18.375h2.442a12.25 12.25 0 1 0 0 15.75H22.92A10.5 10.5 0 0 1 16 26.5Z',
            },
        })]);
    },
};
