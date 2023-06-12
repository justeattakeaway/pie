import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSwitchProductLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--switchProductLarge');
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
                d: 'M8.974 6.375v2.599H6.375V6.375h2.599Zm1.75-1.75H4.625v6.099h6.099V4.625Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.974 14.696v2.599H6.375v-2.599h2.599Zm1.75-1.75H4.625v6.099h6.099v-6.099Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.295 6.375v2.599h-2.599V6.375h2.599Zm1.75-1.75h-6.099v6.099h6.099V4.625Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.295 14.696v2.599h-2.599v-2.599h2.599Zm1.75-1.75h-6.099v6.099h6.099v-6.099Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.974 23.017v2.6H6.375v-2.6h2.599Zm1.75-1.75H4.625v6.1h6.099v-6.1Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.295 23.017v2.6h-2.599v-2.6h2.599Zm1.75-1.75h-6.099v6.1h6.099v-6.1Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M25.616 6.375v2.599h-2.599V6.375h2.6Zm1.75-1.75h-6.099v6.099h6.1V4.625Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M25.616 14.696v2.599h-2.599v-2.599h2.6Zm1.75-1.75h-6.099v6.099h6.1v-6.099Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M25.616 23.017v2.6h-2.599v-2.6h2.6Zm1.75-1.75h-6.099v6.1h6.1v-6.1Z',
            },
        })]);
    },
};
