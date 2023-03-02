import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDineIn',
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
            class: 'c-pieIcon c-pieIcon--dineIn',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_1460)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8.525 7.274l.263.148a1.523 1.523 0 001.75-.07l2.878-2.415H11.36L9.698 6.32a.219.219 0 01-.228 0l-1.584-.945a2.406 2.406 0 10-4.042-1.75 2.362 2.362 0 00.875 1.837A4.918 4.918 0 001.578 8l-.534 1.076 1.181.569.525-1.103A3.5 3.5 0 013.844 7.3v.875a2.721 2.721 0 001.277 2.292l.464.298c-.275.18-.568.329-.875.446L1.7 12.515l.534 1.199 2.975-1.339a6.013 6.013 0 001.557-.875l.604.385L8.77 15l1.199-.543-1.566-3.473-.718-.464c.369-.516.595-1.12.656-1.75l.184-1.496zM7.038 8.647a2.354 2.354 0 01-.455 1.164l-.753-.49a1.4 1.4 0 01-.674-1.181V6.714a3.71 3.71 0 01.823-.097h1.304l-.245 2.03zM6.25 4.72a1.094 1.094 0 110-2.188 1.094 1.094 0 010 2.188zM15 3.625h-4.375v-.289a2.161 2.161 0 014.314 0l.061.289z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_1460',
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
