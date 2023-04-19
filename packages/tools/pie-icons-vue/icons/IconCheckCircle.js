import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCheckCircle',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--checkCircle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M13.495 8a5.487 5.487 0 1 1-1.75-3.99l.875-.962a6.764 6.764 0 1 0 1.759 2.616l-1.032 1.12c.098.398.148.806.148 1.216Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.061 10.625a1.215 1.215 0 0 1-.875-.385L4.99 7.781l.98-.875 2.118 2.38 5.416-5.888.963.875-5.522 5.95a1.181 1.181 0 0 1-.875.384l-.009.018Z',
            },
        })]);
    },
};
