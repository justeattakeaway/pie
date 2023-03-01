import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCutleryCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--cutleryCircleFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zM6.985 4.5v2.8H5.672V5.069L6.986 4.5zm1.89 2.555a2.24 2.24 0 01-1.872 2.249v2.625H5.786V9.304A2.231 2.231 0 013.87 7.055V5.121L5.174 4.5v2.555a.875.875 0 00.84.945h.691a.875.875 0 00.875-.971V5.104L8.875 4.5v2.555zm3.124 4.856h-1.374c0-.358.061-.875.088-1.365l-.875-.148a.945.945 0 01-.753-.928 7.805 7.805 0 011.277-4.97.875.875 0 011.138-.341c.35.149.551.534.604 1.172a51.534 51.534 0 01-.131 6.58h.026z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M10.38 9.155l.411.07c0-.875.044-1.855 0-2.739a7.06 7.06 0 00-.411 2.669z',
                fill: '#242E30',
            },
        })]);
    },
};
