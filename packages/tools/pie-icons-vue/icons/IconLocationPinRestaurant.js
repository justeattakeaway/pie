import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLocationPinRestaurant',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--locationPinRestaurant');
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
                'clip-path': 'url(#prefix__clip0_3_53)',
            },
        }, [h('path', {
            attrs: {
                d: 'm8 12.436 3.29-3.325a4.734 4.734 0 0 0 0-6.624 4.602 4.602 0 0 0-6.58 0 4.734 4.734 0 0 0 0 6.624L8 12.436Zm-2.354-9.03a3.299 3.299 0 0 1 4.708 0 3.404 3.404 0 0 1 0 4.778L8 10.564l-2.354-2.38a3.404 3.404 0 0 1 0-4.778ZM4.5 13.47h7v1.312h-7V13.47Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_3_53',
            },
        }, [h('rect', {
            attrs: {
                width: '16',
                height: '16',
            },
        })])])]);
    },
};
