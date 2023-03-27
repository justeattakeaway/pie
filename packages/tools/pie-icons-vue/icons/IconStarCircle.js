import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStarCircle',
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
            class: 'c-pieIcon c-pieIcon--starCircle',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M1.219 8c0-3.736 3.045-6.781 6.781-6.781A6.787 6.787 0 0 1 14.781 8c0 3.736-3.045 6.781-6.781 6.781-3.736 0-6.781-3.045-6.781-6.781ZM2.53 8A5.47 5.47 0 0 0 8 13.469 5.47 5.47 0 0 0 13.469 8 5.476 5.476 0 0 0 8 2.531 5.476 5.476 0 0 0 2.531 8ZM8 5.322l.814 1.654 1.82.263L9.32 8.525l.306 1.811L8 9.48l-1.628.857.316-1.811-1.322-1.286 1.82-.263L8 5.322Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
