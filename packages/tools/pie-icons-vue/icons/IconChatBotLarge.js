import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatBotLarge',
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
            class: 'c-pieIcon c-pieIcon--chatBotLarge',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__a)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M26.36 9.131a11.769 11.769 0 1 0-14.446 16.573l.105 4.453.997-.157c7-1.172 12.25-5.617 14.202-11.891a11.647 11.647 0 0 0-.858-8.978Zm-.814 8.453c-1.627 5.329-6.01 9.187-11.82 10.5l-.097-3.649-.604-.184a10.033 10.033 0 0 1 5.871-19.188 10.027 10.027 0 0 1 6.65 12.52Zm-7.35-1.532 1.698.43a4.016 4.016 0 0 1-7.788 0l1.698-.43a2.266 2.266 0 0 0 4.375 0h.017Zm5.68-2.86-1.698.41a1.365 1.365 0 0 0-2.678 0l-1.697-.41a3.107 3.107 0 0 1 6.072 0Zm-11.323.41a1.365 1.365 0 0 0-2.678 0l-1.697-.41a3.106 3.106 0 0 1 6.072 0l-1.697.41Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__a',
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
