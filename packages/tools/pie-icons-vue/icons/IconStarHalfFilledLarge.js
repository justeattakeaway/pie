import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStarHalfFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--starHalfFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.289 19.133l6.623-6.467-9.16-1.33a.875.875 0 01-.657-.48L16 2.56l-4.095 8.295a.875.875 0 01-.656.481l-9.162 1.33 6.624 6.467a.874.874 0 01.254.77l-1.566 9.126 8.19-4.279a.874.874 0 01.813 0l8.2 4.314L23 19.903a.875.875 0 01.289-.77zm-6.064 4.033A2.625 2.625 0 0016 22.87V6.515l2.529 5.11a2.624 2.624 0 001.977 1.435l5.644.823-4.086 3.98a2.624 2.624 0 00-.753 2.328l.963 5.627-5.05-2.652z',
                fill: '#242E30'
            }
        })]);
    }
};
