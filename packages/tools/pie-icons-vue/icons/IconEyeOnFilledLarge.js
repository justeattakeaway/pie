import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconEyeOnFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--eyeOnFilledLarge');
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
                d: 'M24.024 10.094a11.375 11.375 0 0 0-16.048 0L2.08 16l5.897 5.906a11.375 11.375 0 0 0 16.048 0L29.92 16l-5.897-5.906ZM16 20.813A4.813 4.813 0 1 1 20.813 16 4.821 4.821 0 0 1 16 20.813Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 19.063a3.062 3.062 0 1 0 0-6.125 3.062 3.062 0 0 0 0 6.124Z',
            },
        })]);
    },
};
