import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLock',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--lock');
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
                d: 'M7.344 11.5V8.875h1.312V11.5H7.344Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M3.844 5.375v1.094h-1.75v6.221l.245.201A9.362 9.362 0 0 0 8 14.781a9.205 9.205 0 0 0 5.661-1.89l.245-.201V6.469h-1.75V5.375a4.156 4.156 0 1 0-8.312 0Zm7 0v1.094H5.156V5.375a2.844 2.844 0 1 1 5.688 0Zm-7.438 6.676A8.094 8.094 0 0 0 8 13.47a7.945 7.945 0 0 0 4.594-1.418v-4.27H3.406v4.27Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
