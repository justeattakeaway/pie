import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCurryLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--curryLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M30 5.903l-1.523-.875-4.305 7.603a4.446 4.446 0 00-.577-.709 4.577 4.577 0 00-4.55-1.172 4.576 4.576 0 00-8.628 0 4.464 4.464 0 00-1.268-.193 4.594 4.594 0 00-4.524 3.693h-1.75v2.625a7.875 7.875 0 005.39 7.446l.508 2.179h14.454l.508-2.179a7.876 7.876 0 005.39-7.446V14.25H25.24L30 5.903zm-20.851 6.43a2.8 2.8 0 011.444.412.875.875 0 00.874 0 .875.875 0 00.473-.7 2.826 2.826 0 015.635 0 .875.875 0 00.473.7.875.875 0 00.875 0A2.817 2.817 0 0123 14.25H6.471a2.835 2.835 0 012.678-1.916zm18.226 4.542a6.125 6.125 0 01-4.594 5.906l-.516.132-.429 1.837H10.164l-.429-1.837-.516-.132a6.125 6.125 0 01-4.594-5.906V16h22.75v.875z',
                fill: '#242E30',
            },
        })]);
    },
};
