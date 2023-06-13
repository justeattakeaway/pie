import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFlagPortugal',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--portugal');
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
                fill: '#6DA544',
                d: 'M1 8a7 7 0 0 0 4.567 6.563L6.174 8l-.607-6.563A7 7 0 0 0 1 8Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M15.002 8a7 7 0 0 0-9.435-6.563v13.126A7.002 7.002 0 0 0 15.002 8Z',
            },
        }), h('path', {
            attrs: {
                fill: '#FFDA44',
                d: 'M5.567 10.434a2.434 2.434 0 1 0 0-4.868 2.434 2.434 0 0 0 0 4.868Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M4.197 6.783v1.518a1.369 1.369 0 1 0 2.737 0V6.78H4.199l-.002.002Z',
            },
        }), h('path', {
            attrs: {
                fill: '#EEE',
                d: 'M5.567 8.76a.458.458 0 0 1-.456-.456v-.605h.913v.602a.458.458 0 0 1-.457.457v.002Z',
            },
        })]);
    },
};
