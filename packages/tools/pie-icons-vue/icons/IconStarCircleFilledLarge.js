import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStarCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--starCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C9.245 3.75 3.75 9.245 3.75 16S9.245 28.25 16 28.25 28.25 22.755 28.25 16 22.755 3.75 16 3.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M21.652 13.62l-3.36-.49-1.505-3.045c-.148-.298-.463-.446-.787-.446s-.639.149-.787.446l-1.505 3.045-3.36.49a.873.873 0 00-.49 1.488l2.432 2.37-.577 3.343a.884.884 0 00.35.858.871.871 0 00.928.061l3-1.575 3.002 1.575a.87.87 0 00.927-.061.877.877 0 00.35-.858l-.578-3.342 2.433-2.371a.873.873 0 00-.49-1.488h.017zm-3.167 2.607l-.656.64.157.91.271 1.6-1.434-.752-.814-.429-.814.429-1.435.753.271-1.602.158-.91-.656-.639-1.164-1.128 1.601-.236.91-.132.411-.822.718-1.453.717 1.453.412.822.91.132 1.6.236-1.163 1.128z',
                fill: '#fff'
            }
        })]);
    }
};
