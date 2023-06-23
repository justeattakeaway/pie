import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFullscreenExitLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--fullscreenExitLarge', 'IconFullscreenExitLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'm21.25 4.188-1.75-.875V12.5h9.132l-.986-1.75H21.25V4.187Z',
            },
        }), h('path', {
            attrs: {
                d: 'm4.354 21.25-.986-1.75H12.5v9.188l-1.75-.875V21.25H4.354Z',
            },
        }), h('path', {
            attrs: {
                d: 'm28.688 19.5-.875 1.75H21.25v6.396l-1.75.986V19.5h9.188Z',
            },
        }), h('path', {
            attrs: {
                d: 'm10.75 4.354 1.75-.986V12.5H3.312l.876-1.75h6.562V4.354Z',
            },
        })]);
    },
};
