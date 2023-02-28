import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconShareLarge',
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
            class: 'c-pieIcon c-pieIcon--shareLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.5 18.25a3.75 3.75 0 00-3.165 1.755L12.13 16.9c.074-.294.114-.596.12-.9a4.007 4.007 0 00-.12-.9l8.205-3.105A3.75 3.75 0 1019.75 10c.005.199.025.397.06.592L11.5 13.75a3.749 3.749 0 100 4.5l8.332 3.15c-.043.198-.07.398-.082.6a3.75 3.75 0 103.75-3.75zm0-10.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-15 10.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm15 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z',
                fill: '#242E30'
            }
        })]);
    }
};
