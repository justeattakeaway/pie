import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGift',
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
            class: 'c-pieIcon c-pieIcon--gift'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.329 3.333c.112-.013.226-.013.338 0V2.071a2.18 2.18 0 00-.338 0A2.969 2.969 0 008 3.138 2.969 2.969 0 005.671 2a2.071 2.071 0 00-.338.071v1.333c.113-.013.226-.013.338 0A1.68 1.68 0 017.333 4.96H2v4h.889v3.778a1.6 1.6 0 001.555 1.555h7.112a1.6 1.6 0 001.555-1.555V8.96H14v-4H8.667a1.671 1.671 0 011.662-1.627zM7.333 12.96H4.444a.258.258 0 01-.222-.222V8.96h3.111v4zm0-5.333h-4V6.293h4v1.334zm4.445 5.075a.258.258 0 01-.258.258H8.667v-4h3.11v3.742zm.889-6.409v1.334h-4V6.293h4z',
                fill: '#242E30'
            }
        })]);
    }
};
