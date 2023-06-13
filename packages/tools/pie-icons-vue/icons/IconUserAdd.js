import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconUserAdd',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--userAdd');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_2070)',
            },
        }, [h('path', {
            attrs: {
                d: 'M7.125 7.125a3.062 3.062 0 1 0 0-6.125 3.062 3.062 0 0 0 0 6.125Zm0-4.813a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm2.861 7.674a2.826 2.826 0 0 0-1.557-.455H5.804a2.555 2.555 0 0 0-2.45 1.566l-.455 1.278h-1.4l.639-1.75A3.868 3.868 0 0 1 5.82 8.219h2.625a4.182 4.182 0 0 1 2.267.656l-.727 1.111ZM15 13.031h-1.969V15H11.72v-1.969H9.75V11.72h1.969V9.75h1.312v1.969H15v1.312Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_2070',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
