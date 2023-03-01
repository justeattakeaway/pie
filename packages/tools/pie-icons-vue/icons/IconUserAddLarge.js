import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserAddLarge',
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
            class: 'c-pieIcon c-pieIcon--userAddLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.5 14.688a4.812 4.812 0 10-4.812-4.813 4.821 4.821 0 004.812 4.813zm0-7.876a3.062 3.062 0 110 6.125 3.062 3.062 0 010-6.124zm7.359 11.612L18.467 19.5a4.734 4.734 0 00-3.788-1.75h-4.375a4.497 4.497 0 00-4.288 2.625l-.673 1.75H3.488l.875-2.371A6.247 6.247 0 0110.32 16h4.375a6.535 6.535 0 015.163 2.424zm7.516 5.451h-3.5v3.5h-1.75v-3.5h-3.5v-1.75h3.5v-3.5h1.75v3.5h3.5v1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
