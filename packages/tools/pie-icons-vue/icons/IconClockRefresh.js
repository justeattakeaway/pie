import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconClockRefresh',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--clockRefresh');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 14.781V13.47a5.486 5.486 0 1 0-4.812-2.949l.936-.945.464 3.623-3.404-.683L2.225 11.5A6.711 6.711 0 0 1 1.254 8 6.781 6.781 0 1 1 8 14.781Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm10.013 10.905-2.95-1.768V5.095h1.313v3.299l2.31 1.391-.673 1.12Z',
            },
        })]);
    },
};
