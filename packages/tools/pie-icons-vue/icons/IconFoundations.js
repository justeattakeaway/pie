import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFoundations',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--foundations');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__clip0_7066_3748)',
            },
        }, [h('path', {
            attrs: {
                d: 'M10.739 1.945H5.252v5.486h5.487V1.945ZM9.426 6.119H6.565V3.258h2.861v2.86Z',
            },
        }), h('path', {
            attrs: {
                d: 'M1.875 14.169h5.486V8.683H1.875v5.486Zm1.313-4.174h2.86v2.861h-2.86V9.995Z',
            },
        }), h('path', {
            attrs: {
                d: 'M8.621 8.674v5.486h5.486V8.674H8.622Zm4.174 4.174H9.934V9.986h2.861v2.861Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7066_3748',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
