import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFlagBulgaria',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--bulgaria', 'IconFlagBulgaria');
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
                fill: '#496E2D',
                d: 'M15.002 7.999a6.91 6.91 0 0 0-.437-2.434L8 5.259l-6.563.306a6.987 6.987 0 0 0 0 4.868L8 10.739l6.564-.306a6.91 6.91 0 0 0 .437-2.434Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M8.001 15a7 7 0 0 0 6.564-4.567H1.438A7 7 0 0 0 8 15Z',
            },
        }), h('path', {
            attrs: {
                fill: '#EEE',
                d: 'M1.438 5.565h13.127a7.002 7.002 0 0 0-13.127 0Z',
            },
        })]);
    },
};
