import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CheckboxUnselectedIcon',
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
            class: 'c-pieIcon c-pieIcon--checkboxUnselected'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 13.9062H3.625C2.785 13.9062 2.09375 13.215 2.09375 12.375V3.625C2.09375 2.785 2.785 2.09375 3.625 2.09375H12.375C13.215 2.09375 13.9062 2.785 13.9062 3.625V12.375C13.9062 13.215 13.215 13.9062 12.375 13.9062ZM3.625 3.40625C3.5025 3.40625 3.40625 3.5025 3.40625 3.625V12.375C3.40625 12.4975 3.5025 12.5938 3.625 12.5938H12.375C12.4975 12.5938 12.5938 12.4975 12.5938 12.375V3.625C12.5938 3.5025 12.4975 3.40625 12.375 3.40625H3.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
