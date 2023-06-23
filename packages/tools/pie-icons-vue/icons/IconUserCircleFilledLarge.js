import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconUserCircleFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--userCircleFilledLarge', 'IconUserCircleFilledLarge');
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
                d: 'M16 3.75a12.25 12.25 0 0 0-9.293 20.212c1.27-4.173 4.63-5.337 6.397-5.337h5.783c1.75 0 5.128 1.164 6.397 5.346A12.25 12.25 0 0 0 16 3.75Zm0 13.125a4.375 4.375 0 1 1 0-8.75 4.375 4.375 0 0 1 0 8.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M16 15.125a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z',
            },
        }), h('path', {
            attrs: {
                d: 'M18.887 20.375h-5.783s-4.025.07-4.98 4.996a12.25 12.25 0 0 0 15.75 0c-.962-4.926-4.952-4.996-4.987-4.996Z',
            },
        })]);
    },
};
