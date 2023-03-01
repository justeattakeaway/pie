import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBasket',
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
            class: 'c-pieIcon c-pieIcon--basket',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.031 11.5L5.594 8h1.312l.438 3.5H6.03zM9.094 8l-.438 3.5H9.97l.437-3.5H9.094zM15 5.594v1.312h-.752l-.945 5.714a1.522 1.522 0 01-1.506 1.286H4.202a1.522 1.522 0 01-1.505-1.286l-.945-5.714H1V5.594h3.876L5.918 2.75h1.39L6.25 5.594h3.5L8.691 2.75h1.391l1.042 2.844H15zm-2.082 1.312H3.082l.874 5.504a.219.219 0 00.21.184h7.595a.219.219 0 00.21-.184l.946-5.504z',
                fill: '#242E30',
            },
        })]);
    },
};
