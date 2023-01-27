import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ArrowDownCircleFilledLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--arrowDownCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.875 3.75V19.1171L21.04 14.9468L22.2737 16.1821L17.2337 21.2286C16.9059 21.5549 16.4623 21.7381 16 21.7381C15.5377 21.7381 15.0941 21.5549 14.7663 21.2286L9.72625 16.1821L10.96 14.9468L15.125 19.1171V3.75C11.96 3.97694 9.00644 5.42471 6.88618 7.78847C4.76593 10.1522 3.64444 13.2475 3.75783 16.4227C3.87123 19.5978 5.21067 22.605 7.49413 24.8111C9.7776 27.0172 12.8269 28.25 16 28.25C19.1731 28.25 22.2224 27.0172 24.5059 24.8111C26.7893 22.605 28.1288 19.5978 28.2422 16.4227C28.3556 13.2475 27.2341 10.1522 25.1138 7.78847C22.9936 5.42471 20.04 3.97694 16.875 3.75Z',
                fill: '#242E30'
            }
        })]);
    }
};
