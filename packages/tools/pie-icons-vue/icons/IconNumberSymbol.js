import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNumberSymbol',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--numberSymbol');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm13.18 6.049.184-1.295h-1.96l.472-3.247h-1.312l-.473 3.247H6.854l.472-3.247H6.022l-.48 3.247H3.545l-.184 1.295h2.013L4.806 9.95H2.82l-.184 1.295h1.96l-.472 3.246h1.312l.473-3.246h3.237l-.472 3.246h1.303l.482-3.246h1.995l.183-1.295h-2.012l.569-3.902h1.986ZM9.33 9.95H6.101L6.67 6.05h3.229L9.33 9.95Z',
            },
        })]);
    },
};
