import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMoon',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--moon');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.219 8a4.174 4.174 0 0 1 3.412-4.078 5.249 5.249 0 0 0-1.444-.927A5.39 5.39 0 0 0 8 2.531 5.469 5.469 0 0 0 8 13.47a5.39 5.39 0 0 0 2.188-.464 5.248 5.248 0 0 0 1.443-.928A4.174 4.174 0 0 1 8.22 8ZM8 12.156a4.155 4.155 0 0 1-3.689-6.18 4.156 4.156 0 0 1 4.433-2.054 5.443 5.443 0 0 0 0 8.155 4.12 4.12 0 0 1-.744.08Z',
            },
        })]);
    },
};
