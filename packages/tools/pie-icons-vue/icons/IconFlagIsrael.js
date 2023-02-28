import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagIsrael',
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
            class: 'c-pieIcon c-pieIcon--israel'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15A7 7 0 108 1a7 7 0 000 14z',
                fill: '#EEE'
            }
        }), h('path', {
            attrs: {
                d: 'M10.636 6.477h-1.76L8 4.957l-.877 1.52H5.364L6.242 8l-.875 1.523h1.756L8 11.043l.878-1.52h1.758L9.758 8l.876-1.523h.002zM9.078 8l-.54.935H7.463L6.92 8l.542-.935h1.077L9.08 8h-.002zM8 6.13l.2.347h-.4L8 6.13zm-1.618.935h.401l-.202.347-.2-.347zm0 1.87l.2-.347.201.347h-.401zM8 9.87l-.2-.347h.4L8 9.87zm1.619-.935h-.402l.202-.347.2.347zm-.402-1.87h.402l-.2.347-.202-.347zm3.142-4.542H3.642a7.036 7.036 0 00-1.614 1.824h11.944a7.034 7.034 0 00-1.613-1.824zM3.642 13.477h8.717a7.033 7.033 0 001.613-1.824H2.028a7.034 7.034 0 001.614 1.824z',
                fill: '#0052B4'
            }
        })]);
    }
};
