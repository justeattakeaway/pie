import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconReceiptErrorLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--receiptErrorLarge');
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
                d: 'M19.5 11.625h-7v1.75h7v-1.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15.65 15.125h-4.9v1.75h3.447a8.444 8.444 0 0 1 1.453-1.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm12.5 25.494-2.572-1.479a1.75 1.75 0 0 0-1.69 0l-.988.499V7.486l.989.525a1.75 1.75 0 0 0 1.688 0L12.5 6.506l2.625 1.488a1.75 1.75 0 0 0 1.75 0L19.5 6.506l2.625 1.479a1.75 1.75 0 0 0 1.689 0l.936-.499v6.239a8.361 8.361 0 0 1 1.75 1.085V4.573L22.939 6.47 19.5 4.494 16 6.463l-3.5-1.97-3.439 1.978L5.5 4.573v22.854l3.561-1.898 3.439 1.977 2.161-1.216a8.642 8.642 0 0 1-.875-1.496l-1.286.7Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M27.27 18.861c-.288-.702-.737-1.315-1.242-1.881a6.47 6.47 0 0 0-.604-.595 6.501 6.501 0 0 0-8.549 0 6.44 6.44 0 0 0-1.855 2.625 6.447 6.447 0 0 0-.394 1.75v.551a6.563 6.563 0 1 0 12.644-2.45Zm-6.125 7.298a4.813 4.813 0 0 1-4.813-4.813v-.551a4.78 4.78 0 0 1 .56-1.75c.18-.318.397-.611.648-.875a4.786 4.786 0 0 1 7.149 0c.251.264.469.557.647.875a4.78 4.78 0 0 1 .56 1.75v.551a4.822 4.822 0 0 1-4.751 4.813Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm22.858 24.353-1.735-1.743-1.734 1.743-1.242-1.242 1.743-1.734-1.743-1.735 1.242-1.242 1.735 1.743 1.734-1.743 1.242 1.242-1.743 1.735L24.1 23.11l-1.242 1.242Z',
            },
        })]);
    },
};
