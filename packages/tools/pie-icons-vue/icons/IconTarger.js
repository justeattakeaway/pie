import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTarger',
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
            class: 'c-pieIcon c-pieIcon--targer'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.56 11.229l.761-1.75A1.968 1.968 0 006.54 6.696l-1.75.77a3.273 3.273 0 113.788 3.763H8.56zM8 2.094A5.915 5.915 0 002.094 8c.004.205.022.41.052.613l1.269-.56a.114.114 0 010-.053A4.594 4.594 0 118 12.594l-.578 1.269c.193 0 .385.043.578.043A5.906 5.906 0 108 2.094zM6.39 9.628L3.362 10.94l.718.455c.22.142.409.33.551.551l.446.709L6.39 9.628zM8 7.518a.464.464 0 01.42.648l-2.8 6.493a.445.445 0 01-.42.28.472.472 0 01-.394-.21L3.53 12.646a.571.571 0 00-.15-.14l-2.082-1.312a.463.463 0 01.062-.814l6.475-2.818a.516.516 0 01.192 0L8 7.52z',
                fill: '#242E30'
            }
        })]);
    }
};
