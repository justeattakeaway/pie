import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBikeFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--bikeFilledLarge',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1380_970)',
                fill: '#242E30',
            },
        }, [h('path', {
            attrs: {
                d: 'M21.661 8.125a.875.875 0 01.534-1.068l.875-.306v-1.89l-1.444.534a2.625 2.625 0 00-1.61 3.185l.359 1.295h-.201a3.5 3.5 0 00-3.002 1.697L14.47 16l-1.566-5.25h1.347V9H8.449L9 10.75h2.039l1.54 5.162a5.687 5.687 0 101.671 4.025 4.77 4.77 0 000-.498c-.49.449-1.097.752-1.75.875-.188.03-.378.048-.569.052L9 20.323l-.586-1.75h3.5c.112-.006.223-.02.332-.044a1.75 1.75 0 00.971-.56 1.7 1.7 0 00.193-.245l.236-.385c.182.366.325.75.429 1.146.086.312.145.631.175.954a3.29 3.29 0 00.674-.797l3.701-6.142a1.75 1.75 0 011.505-.875h.709l.927 3.246a5.68 5.68 0 011.672-.542L21.66 8.125z',
            },
        }), h('path', {
            attrs: {
                d: 'M24.347 14.25a5.94 5.94 0 00-.875.079l.49 1.75c.088.288 1.252 4.331 1.252 4.331h-1.838l-1.094-3.78-.498-1.75a5.67 5.67 0 102.563-.63z',
            },
        }), h('path', {
            attrs: {
                d: 'M7.285 10.75L6.699 9h-4.41l.586 1.75h4.41z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.229 13.375h2.93l-.585-1.75h-2.94l.595 1.75z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1380_970',
            },
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)',
            },
        })])])]);
    },
};
