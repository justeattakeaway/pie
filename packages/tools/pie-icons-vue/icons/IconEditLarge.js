import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEditLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--editLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.559 7.74L24.26 4.441a2.424 2.424 0 00-3.343 0L5.072 20.288a2.45 2.45 0 00-.7 1.46l-.735 6.616 6.615-.735a2.45 2.45 0 001.462-.7l15.846-15.846a2.364 2.364 0 000-3.343zm-8.47 1.006l4.165 4.165-11.235 11.244a7.927 7.927 0 00-4.174-4.165L19.089 8.746zm-9.03 17.142l-4.445.498.498-4.445a.7.7 0 01.202-.42l.166-.166a6.125 6.125 0 014.165 4.165l-.166.166a.7.7 0 01-.42.201zM26.325 9.875l-1.829 1.82-4.121-4.191 1.75-1.82a.612.612 0 01.67-.137c.075.032.141.078.196.137L26.325 9a.621.621 0 010 .875z',
                fill: '#242E30'
            }
        })]);
    }
};
