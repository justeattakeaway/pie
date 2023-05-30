import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLinkLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--linkLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__clip0_18_880)',
            },
        }, [h('path', {
            attrs: {
                d: 'M12.377 21.25h-3.5A5.198 5.198 0 0 1 3.75 16a5.311 5.311 0 0 1 1.505-3.719 5.093 5.093 0 0 1 3.631-1.531h3.5L13.375 9H8.886a6.842 6.842 0 0 0-4.882 2.056A7.061 7.061 0 0 0 2 16a7 7 0 0 0 6.886 7h4.489l-.998-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M22.125 15.125H9.875v1.75h12.25v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M23.114 9h-4.008l.954 1.75h3.054A5.198 5.198 0 0 1 28.25 16a5.311 5.311 0 0 1-1.505 3.719 5.093 5.093 0 0 1-3.631 1.531H20.06L19.106 23h4.008a6.844 6.844 0 0 0 4.882-2.056A7.061 7.061 0 0 0 30 16a7 7 0 0 0-6.886-7Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_880',
            },
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)',
            },
        })])])]);
    },
};
