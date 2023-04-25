import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOver16Filled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--over16Filled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.29 7.987c.087-.03.18-.04.273-.03a.652.652 0 0 1 .717.677.665.665 0 0 1-.717.679.665.665 0 0 1-.718-.692.652.652 0 0 1 .445-.634Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M3.625 2.313h8.75a1.313 1.313 0 0 1 1.313 1.312v8.75a1.313 1.313 0 0 1-1.313 1.313h-8.75a1.313 1.313 0 0 1-1.313-1.313v-8.75a1.313 1.313 0 0 1 1.313-1.313Zm.595 7.634h.831V5.813h-.595l-1.199.538.28.704.683-.254v3.146Zm1.754-1.969c0 1.365.626 2.043 1.61 2.043a1.43 1.43 0 0 0 1.527-1.435 1.313 1.313 0 0 0-1.37-1.334 1.111 1.111 0 0 0-.935.407c0-.713.34-1.15.875-1.15a1.024 1.024 0 0 1 .756.318l.526-.577a1.597 1.597 0 0 0-1.278-.512c-.94 0-1.71.726-1.71 2.24Zm5.526.46h.875v-.876H11.5v-.875h-.875v.875H9.75v.875h.875v.876h.875v-.876Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
