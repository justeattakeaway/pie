import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconHeartFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--heartFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 27.751 26.824 16.63a7.315 7.315 0 0 0 0-9.984 6.675 6.675 0 0 0-9.573 0L16 7.88l-1.277-1.225a6.668 6.668 0 0 0-9.573 0 7.315 7.315 0 0 0 0 9.984L16 27.75Z',
            },
        })]);
    },
};
