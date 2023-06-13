import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNavigationCollapseLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--navigationCollapseLarge');
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
                d: 'M4.625 4.625v22.75H23A4.375 4.375 0 0 0 27.375 23V4.625H4.625Zm1.75 1.75h1.75v19.25h-1.75V6.375ZM25.625 23A2.625 2.625 0 0 1 23 25.625H9.875V6.375h15.75V23Z',
            },
        }), h('path', {
            attrs: {
                d: 'm19.614 16.945-1.243-1.242-2.861 2.87a1.305 1.305 0 0 0 0 1.854l2.861 2.87 1.243-1.242-1.68-1.68h5.941v-1.75h-5.941l1.68-1.68Z',
            },
        })]);
    },
};
