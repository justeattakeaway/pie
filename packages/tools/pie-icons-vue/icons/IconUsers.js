import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUsers',
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
            class: 'c-pieIcon c-pieIcon--users',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.21 11.824l.49-1.392a2.87 2.87 0 012.021-1.75 2.704 2.704 0 01-.481-.367 2.406 2.406 0 113.395 0 1.898 1.898 0 01-.324.271A2.905 2.905 0 018 9.085a2.94 2.94 0 011.697-.534 2.415 2.415 0 01-1.04-1.977 2.406 2.406 0 114.103 1.75c-.146.14-.308.263-.481.367a2.853 2.853 0 012.021 1.75l.49 1.391h-1.391l-.341-.953A1.584 1.584 0 0011.5 9.855H9.75a1.584 1.584 0 00-1.523 1.015l-.34.954H6.46l.49-1.392c0-.122.105-.236.157-.35a1.654 1.654 0 00-.857-.227H4.5a1.584 1.584 0 00-1.523 1.015l-.34.954H1.21zm8.75-5.25a1.094 1.094 0 10.324-.77 1.084 1.084 0 00-.315.77H9.96zm-6.125 0a1.094 1.094 0 10.324-.77 1.085 1.085 0 00-.315.77h-.009z',
                fill: '#242E30',
            },
        })]);
    },
};
