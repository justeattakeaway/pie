import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconRestaurantMenuLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--restaurantMenuLarge', 'IconRestaurantMenuLarge');
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
                d: 'M19.5 22.125h-7v1.75h7v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M23.875 3.75H8.125A2.625 2.625 0 0 0 5.5 6.375v21.927l.088-.052h20.825l.087.052V6.375a2.625 2.625 0 0 0-2.625-2.625ZM7.25 26.5V6.375a.875.875 0 0 1 .875-.875h15.75a.875.875 0 0 1 .875.875V26.5H7.25Z',
            },
        }), h('path', {
            attrs: {
                d: 'M21.25 18.625h-10.5v1.75h10.5v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M21.171 13.375a5.25 5.25 0 0 0-4.296-4.296.254.254 0 0 0 0-.079.875.875 0 0 0-1.75 0 .254.254 0 0 0 0 .079 5.25 5.25 0 0 0-4.296 4.296c-.049.29-.075.582-.079.875v.875h10.5v-.875a5.807 5.807 0 0 0-.079-.875Zm-8.548 0a3.5 3.5 0 0 1 6.755 0h-6.755Z',
            },
        })]);
    },
};
