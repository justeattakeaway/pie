import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPatterns',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--patterns');
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
                'clip-path': 'url(#prefix__clip0_7066_3739)',
            },
        }, [h('path', {
            attrs: {
                d: 'M1.551 14.589h5.662V8.936H1.55v5.653Zm1.313-4.34H5.89v3.027H2.864V10.25Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.128 7.624a3.085 3.085 0 0 0 3.08-3.08 3.085 3.085 0 0 0-3.08-3.08 3.085 3.085 0 0 0-3.08 3.08 3.085 3.085 0 0 0 3.08 3.08Zm0-4.848c.97 0 1.767.796 1.767 1.768 0 .971-.796 1.767-1.767 1.767A1.774 1.774 0 0 1 4.36 4.544c0-.971.796-1.768 1.768-1.768Z',
            },
        }), h('path', {
            attrs: {
                d: 'm11.203 4.544-3.334 6.343h6.676l-3.334-6.343h-.008Zm0 2.817 1.163 2.214H10.04l1.164-2.214Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7066_3739',
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
