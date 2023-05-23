import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialMicrosoft',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--microsoft');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_2820_3494)',
            },
        }, [h('path', {
            attrs: {
                fill: '#00A3EE',
                d: 'M7.372 14.5H1.5V8.618h5.905L7.372 14.5Z',
            },
        }), h('path', {
            attrs: {
                fill: '#FFB700',
                d: 'M8.595 14.5H14.5V8.618H8.595V14.5Z',
            },
        }), h('path', {
            attrs: {
                fill: '#F15121',
                d: 'M7.372 7.382H1.5V1.5h5.905l-.033 5.882Z',
            },
        }), h('path', {
            attrs: {
                fill: '#7EB801',
                d: 'M14.5 7.382H8.595V1.5H14.5v5.882Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_2820_3494',
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
