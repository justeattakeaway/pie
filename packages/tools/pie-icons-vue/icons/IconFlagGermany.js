import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFlagGermany',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--germany');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#FFDA44',
                d: 'M1.438 10.435a7.001 7.001 0 0 0 13.127 0L8 9.828l-6.563.607Z',
            },
        }), h('path', {
            attrs: {
                fill: '#333',
                d: 'M8.001 1a7.001 7.001 0 0 0-6.563 4.567L8 6.174l6.564-.607A7.001 7.001 0 0 0 8 1Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M1.438 5.567a6.987 6.987 0 0 0 0 4.868h13.127a6.984 6.984 0 0 0 0-4.868H1.438Z',
            },
        })]);
    },
};
