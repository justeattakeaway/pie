import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconWifi',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--wifi');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__clip0_15_321)',
            },
        }, [h('path', {
            attrs: {
                d: 'M11.832 10.231A5.023 5.023 0 0 0 8 8.333a5.023 5.023 0 0 0-3.833 1.898l-1.006-.875A6.326 6.326 0 0 1 8 7.02a6.326 6.326 0 0 1 4.839 2.363l-1.007.848Z',
            },
        }), h('path', {
            attrs: {
                d: 'M13.95 8.096A7.788 7.788 0 0 0 8 5.156a7.787 7.787 0 0 0-5.95 2.94l-1.006-.875a9.074 9.074 0 0 1 7-3.412 9.074 9.074 0 0 1 7 3.412l-1.094.875Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.794 12.576a2.292 2.292 0 0 0-3.588 0L5.2 11.701A3.666 3.666 0 0 1 8 10.354a3.665 3.665 0 0 1 2.8 1.373l-1.006.85Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_15_321',
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
