import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEdit',
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
            class: 'c-pieIcon c-pieIcon--edit'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.44 3.502L12.498 1.56a1.54 1.54 0 00-2.17 0L2.033 9.855a1.61 1.61 0 00-.455.945l-.447 4.069 4.07-.447c.356-.043.688-.203.944-.455l8.295-8.295a1.54 1.54 0 000-2.17zM5.218 13.04a.236.236 0 01-.167.07l-2.432.271.262-2.432a.297.297 0 01.08-.166l6.124-6.126 2.249 2.25-6.116 6.133zm8.295-8.295l-1.217 1.207-2.248-2.248 1.207-1.217c.043-.04.1-.061.158-.06a.21.21 0 01.157.06l1.943 1.943a.236.236 0 010 .315z',
                fill: '#242E30'
            }
        })]);
    }
};
