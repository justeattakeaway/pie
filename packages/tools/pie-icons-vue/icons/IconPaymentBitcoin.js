import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPaymentBitcoin',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--bitcoin');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#F7931A',
                'clip-path': 'url(#prefix__clip0_16_63)',
            },
        }, [h('path', {
            attrs: {
                d: 'M7.904 6.154 7.57 7.5c.377.097 1.96.482 2.153-.28.192-.761-1.435-.971-1.82-1.067Z',
            },
        }), h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm2.826 6.02a1.077 1.077 0 0 1-.875.988 1.19 1.19 0 0 1 .674 1.637c-.367 1.041-1.076 1.172-2.231.954l-.315 1.12-.823-.21.271-1.103-.533-.14-.28 1.111-.875-.21.28-1.12-.315-.087-.875-.219.341-.77.49.123a.245.245 0 0 0 .306-.167l.447-1.75.314-1.26a.367.367 0 0 0-.314-.394l-.49-.122.227-.744.875.228.263.061.314-1.103.876.21-.307 1.103.534.131.271-1.085.832.21-.28 1.094c.857.298 1.32.691 1.198 1.514Z',
            },
        }), h('path', {
            attrs: {
                d: 'M7.396 8.184 7.03 9.67c.455.114 2.275.569 2.485-.271.21-.84-1.654-1.103-2.118-1.216Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_16_63',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
