import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPrinterFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--printerFilledLarge');
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
                d: 'M23 9V3.75H9V9h14Z',
            },
        }), h('path', {
            attrs: {
                d: 'M21.25 20.41h-10.5v7.84h10.5v-7.84Z',
            },
        }), h('path', {
            attrs: {
                d: 'M26.5 10.75h-21a2.625 2.625 0 0 0-2.625 2.625V24.75H9v-4.375H7.25v-1.75h17.5v1.75H23v4.375h6.125V13.375A2.625 2.625 0 0 0 26.5 10.75Zm-5.25 6.125v-1.75h3.5v1.75h-3.5Z',
            },
        })]);
    },
};
