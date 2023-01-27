import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'FullscreenExpandIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--fullscreenExpand'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.5 3.375H12.0829L11.0997 5.125H5.25V10.9747L3.5 11.9579V3.375Z'
            }
        }), h('path', {
            attrs: {
                d: 'M16.9003 5.125H22.75V10.9727L24.5 11.9544V3.375H15.9171L16.9003 5.125Z'
            }
        }), h('path', {
            attrs: {
                d: 'M24.5 24.375H15.9205L16.9023 22.625H22.75V16.7773L24.5 15.7955V24.375Z'
            }
        }), h('path', {
            attrs: {
                d: 'M3.5 24.375V15.7921L5.25 16.7753V22.625H11.0977L12.0794 24.375H3.5Z'
            }
        })]);
    }
};
