import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconImageAddLarge',
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
            class: 'c-pieIcon c-pieIcon--imageAddLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.625 16.875a3.937 3.937 0 10-3.938-3.938 3.946 3.946 0 003.938 3.938zm0-6.125a2.187 2.187 0 110 4.375 2.187 2.187 0 010-4.375z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M27.375 10.313v6.124c-4.629-1.548-7.621.438-10.273 2.188-.63.42-1.233.805-1.846 1.155-2.896-1.155-6.151-2.494-10.631-.543V7.25h12.25V5.5h-14v21h26.25V10.312h-1.75zm-9.31 9.773c2.564-1.697 4.987-3.307 8.89-1.986a5.662 5.662 0 01-2.275 2.047 8.339 8.339 0 01-7.394.447l.779-.508zm9.31 4.664H4.625v-3.579c4.235-2.143 7.079-.971 10.071.28A15.192 15.192 0 0020.62 23a10.316 10.316 0 004.874-1.313 8.004 8.004 0 001.881-1.312v4.375z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M28.25 6.813h-3.938V2.874h-1.75v3.938h-3.937v1.75h3.938V12.5h1.75V8.562h3.937v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
