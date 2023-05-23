import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconUsersLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--usersLarge');
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
                d: 'M10.461 8.563a3.938 3.938 0 1 1 0 7.875 3.938 3.938 0 0 1 0-7.875Zm0 1.75a2.187 2.187 0 1 0 2.135 2.187 2.17 2.17 0 0 0-2.135-2.188Zm11.113-1.75A3.937 3.937 0 1 1 17.75 12.5a3.902 3.902 0 0 1 3.824-3.938Zm0 1.75a2.187 2.187 0 1 0 2.135 2.187 2.161 2.161 0 0 0-2.135-2.188ZM27.9 20.374a5.25 5.25 0 0 0-4.97-3.036h-3.57A5.767 5.767 0 0 0 16 18.363a5.67 5.67 0 0 0-3.351-1.05H9.105a5.25 5.25 0 0 0-4.979 3.062l-1.251 3.063h1.864l.971-2.415a3.605 3.605 0 0 1 3.395-1.96h3.561a4.21 4.21 0 0 1 2.109.56 4.14 4.14 0 0 0-.385.726l-1.242 3.088h1.846L16 21.023a3.614 3.614 0 0 1 3.395-1.96h3.57a3.614 3.614 0 0 1 3.395 1.96l.971 2.416h1.794L27.9 20.375Z',
            },
        })]);
    },
};
