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
                d: 'M21.25 4.1875L19.5 3.3125V12.5H28.632L27.6461 10.75H21.25V4.1875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M4.35385 21.25L3.36794 19.5H12.5V28.6875L10.75 27.8125V21.25H4.35385Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M28.6875 19.5L27.8125 21.25H21.25V27.6461L19.5 28.632V19.5H28.6875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.75 4.35385L12.5 3.36794V12.5H3.3125L4.1875 10.75H10.75V4.35385Z',
                fill: '#242E30'
            }
        })]);
    }
};
