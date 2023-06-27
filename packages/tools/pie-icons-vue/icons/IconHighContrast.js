import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconHighContrast',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--highContrast', 'IconHighContrast');
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
                'clip-path': 'url(#prefix__clip0_3104_5201)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781Zm0 12.25A5.476 5.476 0 0 1 2.531 8c0-3.01 2.45-5.478 5.469-5.478a5.476 5.476 0 0 1 5.469 5.47A5.482 5.482 0 0 1 8 13.46v.009Z',
            },
        }), h('path', {
            attrs: {
                d: 'M3.844 8A4.16 4.16 0 0 0 8 12.156V3.835a4.16 4.16 0 0 0-4.156 4.156V8Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_3104_5201',
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
