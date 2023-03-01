import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--userCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 00-9.293 20.212c1.27-4.173 4.63-5.337 6.397-5.337h5.783c1.75 0 5.128 1.164 6.397 5.346A12.25 12.25 0 0016 3.75zm0 13.125a4.375 4.375 0 110-8.75 4.375 4.375 0 010 8.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16 15.125a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M18.887 20.375h-5.783s-4.025.07-4.98 4.996a12.25 12.25 0 0015.75 0c-.962-4.926-4.952-4.996-4.987-4.996z',
                fill: '#242E30'
            }
        })]);
    }
};
