import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNumeroSymbolLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--numeroSymbolLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.5 21.25V19.5h-7v1.75h7z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23 17.75a5.11 5.11 0 01-1.978-.359 4.374 4.374 0 01-1.417-.971 4.006 4.006 0 01-.875-1.444 5.608 5.608 0 010-3.5 3.99 3.99 0 012.275-2.423A4.952 4.952 0 0123 8.703a4.953 4.953 0 011.977.358 3.78 3.78 0 011.4.98c.386.418.684.909.875 1.444.189.564.283 1.155.28 1.75 0 .595-.094 1.185-.28 1.75a4.235 4.235 0 01-.875 1.444c-.393.418-.87.75-1.4.971a5.108 5.108 0 01-1.977.35zm-2.188-4.533c-.04.72.164 1.432.578 2.022A1.934 1.934 0 0023 16a1.916 1.916 0 001.592-.744c.414-.59.617-1.302.578-2.021a3.22 3.22 0 00-.578-2.03A1.909 1.909 0 0023 10.47a1.925 1.925 0 00-1.61.735 3.22 3.22 0 00-.56 2.03l-.018-.018z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.092 7.25v13.02L8.002 7.25H4.625v17.5h2.362V10.435l6.694 14.315h2.774V7.25h-2.362z',
                fill: '#242E30'
            }
        })]);
    }
};
