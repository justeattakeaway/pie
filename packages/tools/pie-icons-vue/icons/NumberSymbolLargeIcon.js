import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'NumberSymbolLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--numberSymbolLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.9999 13.375L23.2449 11.625H20.6199L21.2499 7.25H19.4999L18.8611 11.625H14.4861L15.1249 7.25H13.3749L12.7361 11.625H9.99738L9.75238 13.375H12.4386L11.6686 18.625H8.99988L8.75488 20.375H11.3799L10.7499 24.75H12.4999L13.1386 20.375H17.5136L16.8749 24.75H18.6249L19.2636 20.375H21.9586L22.2036 18.625H19.5611L20.3749 13.375H22.9999ZM17.8111 18.625H13.4361L14.2499 13.375H18.6249L17.8111 18.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
