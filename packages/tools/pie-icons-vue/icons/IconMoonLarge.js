import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMoonLarge',
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
            class: 'c-pieIcon c-pieIcon--moonLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15.125 16a8.794 8.794 0 016.93-8.558 10.612 10.612 0 00-.805-.524 10.213 10.213 0 00-1.321-.64A10.317 10.317 0 0016 5.5a10.5 10.5 0 100 21c1.348 0 2.683-.265 3.929-.779.455-.18.897-.394 1.321-.639.28-.166.551-.34.805-.524A8.793 8.793 0 0115.125 16zM16 24.75a8.75 8.75 0 111.811-17.308 10.5 10.5 0 000 17.116A8.834 8.834 0 0116 24.75z',
                fill: '#242E30'
            }
        })]);
    }
};
