import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCashCardFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cashCardFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M20.174 8.484a1.969 1.969 0 0 0-1.96-1.943H5.22a1.96 1.96 0 0 0-1.96 1.943h16.914Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M6.27 13.646h13.904V11.11H3.26v6.063a1.951 1.951 0 0 0 1.96 1.952h1.05v-5.478Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.02 15.396v10.99h20.23v-10.99H8.02Zm6.23 6.37h-3.045v-1.75h3.045v1.75Zm3.85 1.89a2.765 2.765 0 1 1 .035 0H18.1Zm6.93-1.89h-3.045v-1.75h3.08l-.035 1.75Z',
            },
        })]);
    },
};
