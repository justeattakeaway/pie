import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPatterns',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--patterns'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_7066_3739)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M1.551 14.589h5.662V8.936H1.55v5.653zm1.313-4.34H5.89v3.027H2.864V10.25z'
            }
        }), h('path', {
            attrs: {
                d: 'M6.128 7.624a3.085 3.085 0 003.08-3.08 3.085 3.085 0 00-3.08-3.08 3.085 3.085 0 00-3.08 3.08 3.085 3.085 0 003.08 3.08zm0-4.848c.97 0 1.767.796 1.767 1.768 0 .971-.796 1.767-1.767 1.767A1.774 1.774 0 014.36 4.544c0-.971.796-1.768 1.768-1.768z'
            }
        }), h('path', {
            attrs: {
                d: 'M11.203 4.544l-3.334 6.343h6.676l-3.334-6.343h-.008zm0 2.817l1.163 2.214H10.04l1.164-2.214z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7066_3739'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
