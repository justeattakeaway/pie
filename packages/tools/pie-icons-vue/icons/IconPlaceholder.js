import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlaceholder',
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
            class: 'c-pieIcon c-pieIcon--placeholder',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M.083 0h15.834L16 .083v15.834l-.083.083H.083L0 15.917V.083L.083 0Zm15.75 15.834V.166H.166v15.668h15.669ZM3.27 1h9.463A2.268 2.268 0 0 1 15 3.269v9.463A2.268 2.268 0 0 1 12.732 15H3.269A2.268 2.268 0 0 1 1 12.732V3.269A2.269 2.269 0 0 1 3.269 1Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
