import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPercentageLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--percentageLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M23 16c-3.001 0-4.375 2.494-4.375 4.813 0 2.318 1.374 4.812 4.375 4.812s4.375-2.494 4.375-4.813C27.375 18.494 26.01 16 23 16Zm0 7.875c-2.555 0-2.625-2.747-2.625-3.063 0-.315.07-3.062 2.625-3.062s2.625 2.747 2.625 3.063c0 .315-.07 3.062-2.625 3.062Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M22.16 6.375 7.766 25.625h2.188l14.393-19.25H22.16Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M9 16c3.01 0 4.375-2.494 4.375-4.813 0-2.318-1.365-4.812-4.375-4.812s-4.375 2.494-4.375 4.813C4.625 13.505 5.999 16 9 16Zm0-7.875c2.555 0 2.625 2.748 2.625 3.063 0 .314-.07 3.062-2.625 3.062s-2.625-2.748-2.625-3.063c0-.314.07-3.062 2.625-3.062Z',
            },
        })]);
    },
};
