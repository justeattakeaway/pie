import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChartIncreaseLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chartIncreaseLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M6.375 23h1.75v4.375h-1.75V23Zm12.25 4.375h1.75v-8.75h-1.75v8.75Zm-6.125 0h1.75V21.25H12.5v6.125Zm12.25 0h1.75v-12.25h-1.75v12.25Zm.875-24.5h-7v1.75h5.145C17.015 12.71 12.229 14.25 5.5 14.25V16c8.006 0 13.055-2.511 19.25-9.8v4.55h1.75v-7a.875.875 0 0 0-.875-.875Z',
            },
        })]);
    },
};
