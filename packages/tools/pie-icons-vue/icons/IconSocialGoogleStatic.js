import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialGoogleStatic',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--googleStatic', 'IconSocialGoogleStatic');
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
                fill: '#FBC02D',
                d: 'M14.864 6.63H14.3V6.6H8v2.8h3.956A4.198 4.198 0 0 1 3.8 8 4.2 4.2 0 0 1 8 3.8c1.07 0 2.045.404 2.786 1.064l1.98-1.98A6.968 6.968 0 0 0 8 1a7 7 0 1 0 6.864 5.63Z',
            },
        }), h('path', {
            attrs: {
                fill: '#E53935',
                d: 'm1.807 4.742 2.3 1.686A4.198 4.198 0 0 1 8 3.8c1.07 0 2.045.404 2.786 1.064l1.98-1.98A6.968 6.968 0 0 0 8 1a6.996 6.996 0 0 0-6.193 3.742Z',
            },
        }), h('path', {
            attrs: {
                fill: '#4CAF50',
                d: 'M8 15c1.808 0 3.45-.692 4.693-1.817l-2.166-1.833A4.168 4.168 0 0 1 8 12.2a4.198 4.198 0 0 1-3.95-2.781l-2.282 1.759A6.995 6.995 0 0 0 8 15Z',
            },
        }), h('path', {
            attrs: {
                fill: '#1565C0',
                d: 'm14.864 6.63-.006-.03H8v2.8h3.956a4.21 4.21 0 0 1-1.43 1.95l2.167 1.833C12.54 13.323 15 11.5 15 8c0-.47-.048-.928-.136-1.37Z',
            },
        })]);
    },
};
