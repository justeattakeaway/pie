import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFullscreenExitLarge',
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
            class: 'c-pieIcon c-pieIcon--fullscreenExitLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.25 4.188l-1.75-.875V12.5h9.132l-.986-1.75H21.25V4.187z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M4.354 21.25l-.986-1.75H12.5v9.188l-1.75-.875V21.25H4.354z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M28.688 19.5l-.875 1.75H21.25v6.396l-1.75.986V19.5h9.188z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.75 4.354l1.75-.986V12.5H3.312l.876-1.75h6.562V4.354z',
                fill: '#242E30'
            }
        })]);
    }
};
