import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBagLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--bagLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.375 17.75h5.25l1.75-1.75v-3.5h-1.75V16h-5.25v-3.5h-1.75V16l1.75 1.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M25.625 8.125h-5.25v-3.5l-1.75-1.75h-5.25l-1.75 1.75v3.5h-5.25l-.788 18.253a2.625 2.625 0 001.584 2.535c.326.14.678.212 1.033.212h15.592a2.626 2.626 0 001.899-.814 2.624 2.624 0 00.718-1.933l-.788-18.253zm-12.25-3.5h5.25v3.5h-5.25v-3.5zm11.051 22.479a.873.873 0 01-.63.271H8.204a.876.876 0 01-.875-.875l.796-16.625h15.75l.761 16.625a.874.874 0 01-.21.604z',
                fill: '#242E30',
            },
        })]);
    },
};
