import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChequeFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chequeFilled', 'IconChequeFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.1 6.81 8 7.125l.315-2.1 2.923-2.914a1.242 1.242 0 0 1 1.75 0 1.243 1.243 0 0 1 0 1.75L10.1 6.81Zm4.9-.56v7.875H1V6.25h5.819l-.341 2.398 4.243-.604 1.794-1.794H15ZM8.875 9.969h-5.25v1.312h5.25V9.97Zm3.5 0h-1.75v1.312h1.75V9.97Z',
            },
        })]);
    },
};
