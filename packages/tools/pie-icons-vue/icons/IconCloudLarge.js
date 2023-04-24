import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCloudLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cloudLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M24.137 25.625H8.65a6.388 6.388 0 0 1-6.388-6.387A6.309 6.309 0 0 1 6.2 13.375a10.045 10.045 0 0 1 19.819 1.383 5.679 5.679 0 0 1 3.719 5.267 5.61 5.61 0 0 1-5.6 5.6ZM8.65 14.6a4.14 4.14 0 0 0-1.4.228 4.585 4.585 0 0 0-3.246 4.375 4.646 4.646 0 0 0 4.646 4.672h15.487a3.85 3.85 0 0 0 3.85-3.85 3.894 3.894 0 0 0-3.01-3.771l-.673-.158v-.691a8.304 8.304 0 0 0-16.179-2.537c.8-.062 1.603.024 2.371.253l-.525 1.671A4.762 4.762 0 0 0 8.65 14.6Z',
            },
        })]);
    },
};
