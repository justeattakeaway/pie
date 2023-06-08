import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPeanutsLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--peanutsLarge');
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
                d: 'M11.852 27.375c-.27 0-.55 0-.83-.044a7.271 7.271 0 0 1-5.347-3.456 7.193 7.193 0 0 1 .149-7.726 7.192 7.192 0 0 1 4.524-3.037 3.947 3.947 0 0 0 3.027-2.94c.064-.27.143-.535.236-.796A7.105 7.105 0 0 1 25.957 7.46a7.307 7.307 0 0 1 .683 7.56 6.125 6.125 0 0 1-2.196 2.511 8.46 8.46 0 0 1-2.625 1.129 4.375 4.375 0 0 0-3.028 3.343 7.202 7.202 0 0 1-7 5.372h.061ZM7.25 17.155A5.425 5.425 0 0 0 7.162 23a5.469 5.469 0 0 0 8.55 1.041 5.433 5.433 0 0 0 1.408-2.459 6.125 6.125 0 0 1 4.314-4.602 6.712 6.712 0 0 0 2.056-.875 4.375 4.375 0 0 0 1.558-1.75 5.513 5.513 0 0 0-.49-5.775 5.347 5.347 0 0 0-9.328 1.382 3.974 3.974 0 0 0-.184.604 5.73 5.73 0 0 1-4.375 4.261 5.434 5.434 0 0 0-3.421 2.328Z',
            },
        }), h('path', {
            attrs: {
                d: 'M21.25 9.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M22.125 13.375a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M18.625 12.5a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z',
            },
        })]);
    },
};
