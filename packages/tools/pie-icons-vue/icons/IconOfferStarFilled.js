import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOfferStarFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--offerStarFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_7019_3733)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M13.871 6.355a2.456 2.456 0 0 1-.472-.586c-.07-.26-.1-.528-.088-.796a2.467 2.467 0 0 0-.516-1.75 2.467 2.467 0 0 0-1.75-.517 2.626 2.626 0 0 1-.796-.087 2.283 2.283 0 0 1-.578-.473A2.45 2.45 0 0 0 8 1.22a2.45 2.45 0 0 0-1.654.875c-.165.188-.36.347-.577.472-.26.07-.528.1-.796.088a2.415 2.415 0 0 0-1.75.516 2.467 2.467 0 0 0-.517 1.75c.012.268-.018.537-.087.796a2.459 2.459 0 0 1-.473.587A2.415 2.415 0 0 0 1.22 8a2.415 2.415 0 0 0 .875 1.645c.186.17.346.368.472.586.07.26.1.528.088.796a2.467 2.467 0 0 0 .516 1.75c.496.39 1.122.575 1.75.517.268-.012.537.018.796.087.217.125.412.285.578.473a2.45 2.45 0 0 0 1.654.875 2.45 2.45 0 0 0 1.653-.875c.166-.188.36-.348.578-.473.26-.07.528-.099.796-.087a2.415 2.415 0 0 0 1.75-.517c.39-.495.574-1.122.516-1.75a2.621 2.621 0 0 1 .088-.796c.126-.218.286-.416.472-.586A2.415 2.415 0 0 0 14.676 8a2.415 2.415 0 0 0-.805-1.645ZM10.73 8A4.821 4.821 0 0 0 8 10.73 4.821 4.821 0 0 0 5.27 8 4.821 4.821 0 0 0 8 5.27 4.821 4.821 0 0 0 10.73 8Z',
                'clip-rule': 'evenodd',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7019_3733',
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
