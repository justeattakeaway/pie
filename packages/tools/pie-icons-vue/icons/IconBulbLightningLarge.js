import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBulbLightningLarge',
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
            class: 'c-pieIcon c-pieIcon--bulbLightningLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.96 20.891l.665 3.859h8.75l.639-3.867a4.489 4.489 0 011.33-2.407 9.083 9.083 0 00-.63-13.562 9.17 9.17 0 00-7.692-1.838 9.1 9.1 0 00-4.427 15.365 4.655 4.655 0 011.365 2.45zM8.746 10.75a7.359 7.359 0 1114.041 4.085 7.271 7.271 0 01-1.642 2.399 6.196 6.196 0 00-1.829 3.368L18.914 23h-5.828l-.402-2.398A6.247 6.247 0 0010.82 17.2a7.324 7.324 0 01-2.074-6.449z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16 17.75l3.027-5.758H16V8.125l-3.028 5.801H16v3.824z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M20.2 26.5h-8.4l.463 1.75h7.473l.464-1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
