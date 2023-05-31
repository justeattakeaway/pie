import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLocationPinUserLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--locationPinUserLarge');
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
                d: 'M15.799 15.256a4.13 4.13 0 1 0-4.13-4.121 4.122 4.122 0 0 0 4.13 4.121Zm0-6.597a2.476 2.476 0 1 1 0 4.952 2.476 2.476 0 0 1 0-4.952Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M23.586 6.13a10.65 10.65 0 0 0-15.172 0 10.92 10.92 0 0 0 0 15.321L16 29.125l7.586-7.674a10.92 10.92 0 0 0 0-15.321Zm-4.655 17.684-2.056 2.117-.875.875-2.765-2.791-3.57-3.64a4.908 4.908 0 0 1 3.833-1.82H18.1a4.847 4.847 0 0 1 4.025 2.065l-3.194 3.194Zm4.288-4.463a6.554 6.554 0 0 0-5.119-2.476h-4.603a6.564 6.564 0 0 0-4.9 2.179 9.275 9.275 0 0 1 .99-11.804 9.004 9.004 0 0 1 12.827 0 9.275 9.275 0 0 1 .805 12.101Z',
            },
        })]);
    },
};
