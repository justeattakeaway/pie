import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFullscreenExit',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--fullscreenExit');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M6.031 1.123 4.72 1.86V4.72H1.766L1.109 6.03h4.922V1.123Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm9.969 1.11 1.312.656v2.953h2.859l.737 1.312H9.97V1.11Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm14.89 9.969-.656 1.312h-2.953v2.859l-1.312.737V9.97h4.922Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm1.123 9.969.737 1.312H4.72v2.953l1.312.657V9.969H1.123Z',
            },
        })]);
    },
};
