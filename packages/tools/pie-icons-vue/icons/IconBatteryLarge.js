import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconBatteryLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--batteryLarge', 'IconBatteryLarge');
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
                d: 'M27.375 12.5V9.875A2.625 2.625 0 0 0 24.75 7.25H5.5a2.625 2.625 0 0 0-2.625 2.625v12.25A2.625 2.625 0 0 0 5.5 24.75h19.25a2.625 2.625 0 0 0 2.625-2.625V19.5h1.75v-7h-1.75Zm-1.75 9.625a.875.875 0 0 1-.875.875H5.5a.875.875 0 0 1-.875-.875V9.875A.875.875 0 0 1 5.5 9h19.25a.875.875 0 0 1 .875.875v12.25ZM8.125 12.5h1.75v7h-1.75v-7Zm4.375 0h1.75v7H12.5v-7Zm4.375 0h1.75v7h-1.75v-7Z',
            },
        })]);
    },
};
