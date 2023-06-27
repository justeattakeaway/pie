import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconDashboardLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--dashboardLarge', 'IconDashboardLarge');
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
                d: 'M29.073 18.625a13.003 13.003 0 0 1-1.112 5.25h-1.933a11.28 11.28 0 0 0-.184-10.832l1.207-1.374a13.02 13.02 0 0 1 2.022 6.956ZM15.948 7.25a11.322 11.322 0 0 1 6.308 1.916l1.155-1.321a13.125 13.125 0 0 0-19.486 16.03H5.86A11.375 11.375 0 0 1 15.948 7.25Zm3.386 5.25 1.181-1.348a8.75 8.75 0 0 0-13.317 7.473h1.75A7 7 0 0 1 19.334 12.5Zm-.508 5.889a3.5 3.5 0 1 1-2.878-1.514 3.5 3.5 0 0 1 1.557.385l8.566-9.783 1.304 1.147-8.549 9.765Zm-1.128 1.986a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z',
            },
        })]);
    },
};
