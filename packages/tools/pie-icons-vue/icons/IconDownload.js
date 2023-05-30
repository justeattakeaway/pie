import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconDownload',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--download');
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
                d: 'M7.344 7.414V1h1.312v6.414l1.671-1.671.928.927-2.503 2.502a1.059 1.059 0 0 1-1.505 0L4.745 6.67l.928-.928 1.67 1.672Zm5.031-4.445h-2.38V4.28h2.38a.219.219 0 0 1 .219.219v7.875a.219.219 0 0 1-.219.219h-8.75a.219.219 0 0 1-.219-.219V4.5a.219.219 0 0 1 .219-.219h2.38V2.97h-2.38A1.54 1.54 0 0 0 2.094 4.5v7.875a1.54 1.54 0 0 0 1.531 1.531h8.75a1.54 1.54 0 0 0 1.531-1.531V4.5a1.54 1.54 0 0 0-1.531-1.531Z',
            },
        })]);
    },
};
