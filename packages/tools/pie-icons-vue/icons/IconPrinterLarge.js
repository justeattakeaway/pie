import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPrinterLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--printerLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M29.125 13.375A2.625 2.625 0 0 0 26.5 10.75H23v-7H9v7H5.5a2.625 2.625 0 0 0-2.625 2.625V24.75H9v3.5h14v-3.5h6.125V13.375ZM10.75 5.5h10.5v5.25h-10.5V5.5Zm10.5 21h-10.5v-6.125h10.5V26.5Zm6.125-3.5H23v-2.625h1.75v-1.75H7.25v1.75H9V23H4.625v-9.625A.875.875 0 0 1 5.5 12.5h21a.875.875 0 0 1 .875.875V23Zm-6.125-7.875h3.5v1.75h-3.5v-1.75Z',
            },
        })]);
    },
};
