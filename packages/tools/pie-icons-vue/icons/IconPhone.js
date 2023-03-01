import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPhone',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--phone',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.412 14.344h-.315a10.64 10.64 0 01-3.7-1.208 10.937 10.937 0 01-4.56-4.672A11.13 11.13 0 011.682 4.85a2.625 2.625 0 011.383-2.695L4.43 1.42l1.942 3.666a1.566 1.566 0 01-.428 1.969L4.272 8.341a9.625 9.625 0 003.255 3.334L8.954 9.75a1.522 1.522 0 011.994-.429l3.623 2.004-.875 1.645a2.624 2.624 0 01-2.284 1.374zM8.7 12.296a9.396 9.396 0 002.572.727 1.278 1.278 0 001.26-.648l.271-.499-2.502-1.391a.228.228 0 00-.289.07L8.7 12.296zM3.887 3.205l-.201.105a1.356 1.356 0 00-.709 1.365c.126.843.358 1.666.692 2.45l1.478-1.111a.245.245 0 00.07-.307l-1.33-2.502z',
                fill: '#242E30',
            },
        })]);
    },
};
