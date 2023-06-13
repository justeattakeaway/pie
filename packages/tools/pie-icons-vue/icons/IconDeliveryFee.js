import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconDeliveryFee',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--deliveryFee');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_2472)',
            },
        }, [h('path', {
            attrs: {
                d: 'M13.127 1.735 7.8 3.686 4.64 10.502l7.28 3.37 3.159-6.808-1.952-5.329Zm-2.065 9.818L6.96 9.645l2.117-4.568 3.01-1.102 1.103 3.01-2.127 4.567ZM1.876 6.25H4.5V8H1.875V6.25ZM6.031 4.5H1V2.75h5.031V4.5Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_2472',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
