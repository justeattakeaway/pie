import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'NoteIcon',
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
            class: 'c-pieIcon c-pieIcon--note'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M20.125 21H1.75V22.75H20.125V21Z'
            }
        }), h('path', {
            attrs: {
                d: 'M26.25 5.25H1.75V7H26.25V5.25Z'
            }
        }), h('path', {
            attrs: {
                d: 'M26.25 13.125H1.75V14.875H26.25V13.125Z'
            }
        })]);
    }
};
