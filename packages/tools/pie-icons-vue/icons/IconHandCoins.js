import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconHandCoins',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--handCoins');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M13.749 9.313a2.441 2.441 0 0 0-3.063.13l-1.26 1.13c-.198.174-.453.27-.717.27h-.315c.173-.338.263-.713.262-1.093V8.219H5.305c-.473 0-.936.14-1.33.402L1.954 9.97H1v1.312h1.348L4.7 9.75a1.05 1.05 0 0 1 .604-.184h2.039v.184a1.094 1.094 0 0 1-1.094 1.094h-.98l-.665 1.312h4.104a2.424 2.424 0 0 0 1.584-.595l1.268-1.129a1.12 1.12 0 0 1 1.409-.06h.061l-2.406 2.738a1.11 1.11 0 0 1-.814.359H1v1.312h8.846a2.408 2.408 0 0 0 1.794-.805L15 10.205l-1.251-.893Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 6.906a2.844 2.844 0 1 0-2.844-2.843A2.853 2.853 0 0 0 8 6.905Zm0-4.375a1.531 1.531 0 1 1-1.531 1.531A1.54 1.54 0 0 1 8 2.532Z',
            },
        })]);
    },
};
