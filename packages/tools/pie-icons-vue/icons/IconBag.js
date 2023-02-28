import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBag',
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
            class: 'c-pieIcon c-pieIcon--bag'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.996 4.719h-2.371V2.53L9.313 1.22H6.688L5.375 2.53V4.72H3.004l-.429 8.452a1.523 1.523 0 001.531 1.61h7.788a1.522 1.522 0 001.531-1.61l-.429-8.452zM6.688 2.53h2.625V4.72H6.688V2.53zM12.05 13.4a.219.219 0 01-.157.07H4.106a.228.228 0 01-.218-.219l.358-7.21h7.508l.359 7.21a.22.22 0 01-.062.149z',
                fill: '#242E30'
            }
        })]);
    }
};
