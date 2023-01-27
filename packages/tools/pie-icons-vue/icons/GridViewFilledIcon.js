import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'GridViewFilledIcon',
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
            class: 'c-pieIcon c-pieIcon--gridViewFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.625 12.25H12.25V2.625H2.625V12.25Z'
            }
        }), h('path', {
            attrs: {
                d: 'M15.75 12.25H25.375V2.625H15.75V12.25Z'
            }
        }), h('path', {
            attrs: {
                d: 'M2.625 25.375H12.25V15.75H2.625V25.375Z'
            }
        }), h('path', {
            attrs: {
                d: 'M15.75 25.375H25.375V15.75H15.75V25.375Z'
            }
        })]);
    }
};
