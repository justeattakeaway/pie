import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLeiLarge',
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
            class: 'c-pieIcon c-pieIcon--leiLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.77 10.75h1.593v8.645H9.77V10.75zm9.301 5.6c0 .185-.021.37-.061.551h-4.436a1.548 1.548 0 001.583 1.225 2.005 2.005 0 001.497-.569l.971.937a3.204 3.204 0 01-2.52 1.006 3.028 3.028 0 01-3.133-3.168A2.965 2.965 0 0116 13.192a2.95 2.95 0 013.071 3.158zm-1.584-.595A1.39 1.39 0 0016 14.539a1.374 1.374 0 00-1.453 1.216h2.94zm3.947-4.926a.874.874 0 00-.954.918.954.954 0 001.907 0 .876.876 0 00-.953-.918zm-.797 8.566h1.593v-6.02h-1.593v6.02zM28.25 16a12.25 12.25 0 11-24.499 0 12.25 12.25 0 0124.499 0zm-1.75 0a10.5 10.5 0 10-21 0 10.5 10.5 0 0021 0z',
                fill: '#242E30'
            }
        })]);
    }
};
