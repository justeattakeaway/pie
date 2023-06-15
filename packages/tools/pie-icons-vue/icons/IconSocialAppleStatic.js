import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialAppleStatic',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--appleStatic', 'IconSocialAppleStatic');
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
                fill: '#000',
                d: 'M12.909 10.704c0 .061-.053.114-.07.166a7.068 7.068 0 0 1-1.558 2.546 1.671 1.671 0 0 1-2.021.28 2.135 2.135 0 0 0-2.144 0c-.31.17-.662.249-1.015.228a1.487 1.487 0 0 1-1.076-.613 7.368 7.368 0 0 1-1.978-5.119c.005-.539.118-1.071.333-1.566A2.844 2.844 0 0 1 7.3 5.121a1.531 1.531 0 0 0 1.514 0c.243-.124.498-.224.761-.297a3.246 3.246 0 0 1 1.925.201 2.17 2.17 0 0 1 1.111.945l-.49.437a2.766 2.766 0 0 0-.481.534 2.686 2.686 0 0 0 .376 3.133c.238.284.545.501.893.63Z',
            },
        }), h('path', {
            attrs: {
                fill: '#000',
                d: 'M10.38 1.875a2.31 2.31 0 0 1-.21 1.269A2.432 2.432 0 0 1 8.42 4.63c-.551.114-.543.123-.481-.437a2.739 2.739 0 0 1 2.178-2.319 2.42 2.42 0 0 1 .263 0Z',
            },
        })]);
    },
};
