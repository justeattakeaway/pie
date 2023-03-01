import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDrink',
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
            class: 'c-pieIcon c-pieIcon--drink'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 4.719H8.656V3.222l2.179-.726-.42-1.242-3.071 1.023V4.72H3.625V6.03h.586l.665 7.359a1.531 1.531 0 001.531 1.391h3.185a1.53 1.53 0 001.532-1.391l.665-7.359h.586V4.72zM9.811 13.25a.219.219 0 01-.219.201H6.407a.22.22 0 01-.218-.201l-.665-7.219h4.952l-.665 7.219z',
                fill: '#242E30'
            }
        })]);
    }
};
