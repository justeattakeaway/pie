import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCutleryLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cutleryLarge');
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
                d: 'm24.391 21.25 2.827.464a67.186 67.186 0 0 1-.35 4.803h1.75c.13-1.268.28-2.764.376-5.52.188-4.29.162-8.586-.079-12.872-.157-1.461-.481-2.205-1.12-2.476a1.628 1.628 0 0 0-1.969.647c-.131.184-3.29 4.76-2.774 13.221a1.75 1.75 0 0 0 1.34 1.733ZM27.078 7.6c.045.237.077.477.096.718.288 3.858.21 8.61.114 11.61-.875-.14-2.004-.314-2.468-.402a.377.377 0 0 1 0-.105C24.4 12.86 26.378 8.8 27.078 7.6Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M14.25 5.754h-.166l-1.584.761v6.86c0 2.126 1.829 3.404 3.5 3.745v9.38h1.75v-9.398c1.68-.34 3.5-1.618 3.5-3.753V5.71l-1.75.875v6.79c0 1.496-1.855 2.091-2.625 2.091s-2.625-.595-2.625-2.091V5.754Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm17.759 5.692-1.75.84v6.843h1.75V5.692Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M5.5 15.886V26.5h1.75V15.886a4.786 4.786 0 0 0 3.185-4.768v-.736c0-2.694-1.82-4.882-4.06-4.882-2.24 0-4.06 2.188-4.06 4.883v.735A4.786 4.786 0 0 0 5.5 15.886Zm-1.435-5.503c0-1.724 1.041-3.133 2.31-3.133 1.269 0 2.31 1.409 2.31 3.133v.735c0 1.723-1.041 3.132-2.31 3.132-1.269 0-2.31-1.409-2.31-3.133v-.735Z',
            },
        })]);
    },
};
