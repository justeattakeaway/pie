import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLawLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--lawLarge');
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
                'fill-rule': 'evenodd',
                d: 'm19.21 19.255-1.233-1.234v-.009l.849-.848-1.908-1.908L6.103 26.071 4.87 24.837l10.806-10.814-1.881-1.882-.85.849-1.233-1.234 6.921-6.921 1.234 1.234-.849.848 5.032 5.032.848-.849 1.234 1.234-6.921 6.921ZM17.786 8.16l-2.757 2.756 5.032 5.023 2.747-2.748-5.022-5.031Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm26.08 23.14-.472-1.741h-8.506l-.472 1.741h9.45Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M26.692 25.476H16.01l-.464 1.75h11.62l-.473-1.75Z',
            },
        })]);
    },
};
