import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSoundOnFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--soundOnFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M21.688 3.75h-2.39l-.253.245a49.875 49.875 0 0 1-4.016 3.439 48.477 48.477 0 0 1-4.961 3.316H6.813a2.625 2.625 0 0 0-2.625 2.625v5.25a2.625 2.625 0 0 0 2.625 2.625h3.255a47.09 47.09 0 0 1 4.96 3.316 48.293 48.293 0 0 1 4.008 3.439l.254.245h2.398V3.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M23.438 10.129v1.864a4.375 4.375 0 0 1 0 8.014v1.864a6.125 6.125 0 0 0 0-11.742Z',
            },
        })]);
    },
};
