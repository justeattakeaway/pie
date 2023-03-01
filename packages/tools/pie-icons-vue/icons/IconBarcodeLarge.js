import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBarcodeLarge',
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
            class: 'c-pieIcon c-pieIcon--barcodeLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.125 8.125v15.75h-1.75V8.125h1.75zm15.75 0v15.75h1.75V8.125h-1.75zM19.5 21.25h1.75V8.125H19.5V21.25zm-4.375 0h1.75V8.125h-1.75V21.25zm-4.375 0h1.75V8.125h-1.75V21.25zm17.5-16.625H23v1.75h4.375v4.375h1.75V5.5a.875.875 0 00-.875-.875zM2.875 5.5v5.25h1.75V6.375H9v-1.75H3.75a.875.875 0 00-.875.875zm1.75 15.75h-1.75v5.25a.875.875 0 00.875.875H9v-1.75H4.625V21.25zm22.75 4.375H23v1.75h5.25a.875.875 0 00.875-.875v-5.25h-1.75v4.375z',
                fill: '#242E30'
            }
        })]);
    }
};
