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
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--note'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15 7.34375H1V8.65625H15V7.34375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.5 11.7188H1V13.0312H11.5V11.7188Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M15 2.96875H1V4.28125H15V2.96875Z',
                fill: '#242E30'
            }
        })]);
    }
};
