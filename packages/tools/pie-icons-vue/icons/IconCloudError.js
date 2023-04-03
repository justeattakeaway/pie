import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloudError',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--cloudError',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_15_700)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M13.145 7.431A5.18 5.18 0 0 0 2.969 6.75 3.342 3.342 0 0 0 1 9.81a3.378 3.378 0 0 0 3.378 3.378h7.638a2.993 2.993 0 0 0 1.129-5.758Zm-1.129 4.445H4.378a2.065 2.065 0 0 1-2.065-2.065 2.039 2.039 0 0 1 1.426-1.96l.385-.113.061-.394a3.867 3.867 0 0 1 7.683.586v.516l.498.114a1.68 1.68 0 0 1-.358 3.316h.008Zm-1.802-4.751L8.928 8.438l1.286 1.312-.928.875L8 9.365l-1.286 1.26-.928-.875 1.287-1.312-1.287-1.313.928-.875L8 7.51l1.286-1.26.928.875Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_15_700',
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
