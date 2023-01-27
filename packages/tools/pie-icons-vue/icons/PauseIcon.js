import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'PauseIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--pause'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9 7H10.75V21H9V7ZM17.25 7H19V21H17.25V7Z'
            }
        })]);
    }
};
