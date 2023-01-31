import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFullscreenExpandLarge',
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
            class: 'c-pieIcon c-pieIcon--fullscreenExpandLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.5 5.375H14.0829L13.0997 7.125H7.25V12.9747L5.5 13.9579V5.375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M18.9003 7.125H24.75V12.9727L26.5 13.9544V5.375H17.9171L18.9003 7.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.5 26.375H17.9205L18.9023 24.625H24.75V18.7773L26.5 17.7955V26.375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 26.375V17.7921L7.25 18.7753V24.625H13.0977L14.0794 26.375H5.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
