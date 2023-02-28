import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBallotBox',
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
            class: 'c-pieIcon c-pieIcon--ballotBox'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.625 6.469V7.78h8.75V6.47h-1.094V3.625a2.406 2.406 0 00-2.406-2.406H4.719v5.25H3.625zM6.031 2.53h2.844a1.094 1.094 0 011.094 1.094v2.844H6.03V2.53zm8.75 1.313v8.312H1.22V3.844h2.406v1.312H2.531v5.688H13.47V5.156h-1.094V3.844h2.406z',
                fill: '#242E30'
            }
        })]);
    }
};
