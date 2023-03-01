import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserCommunityLarge',
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
            class: 'c-pieIcon c-pieIcon--userCommunityLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.5 12.5H3.645a13.125 13.125 0 0124.71 0H26.5a11.374 11.374 0 00-21 0zm4.813.875a3.937 3.937 0 11-3.938 3.938 3.946 3.946 0 013.938-3.938zm0 1.75a2.187 2.187 0 100 4.374 2.187 2.187 0 000-4.374zm11.374-1.75a3.937 3.937 0 11-3.937 3.938 3.946 3.946 0 013.938-3.938zm0 1.75a2.187 2.187 0 100 4.375 2.187 2.187 0 000-4.375zm6.476 10.036a5.407 5.407 0 00-5.093-3.036h-3.64a6.029 6.029 0 00-3.43 1.05 5.923 5.923 0 00-3.43-1.05H8.93a5.399 5.399 0 00-5.092 3.045L2.55 28.25H4.46l.989-2.415a3.728 3.728 0 013.5-1.96h3.64a4.376 4.376 0 012.16.56 4.185 4.185 0 00-.393.726l-1.286 3.089h1.89L16 25.835a3.701 3.701 0 013.5-1.96h3.64a3.702 3.702 0 013.5 1.96l.901 2.415h1.873l-1.252-3.089z',
                fill: '#242E30'
            }
        })]);
    }
};
