import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarStar',
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
            class: 'c-pieIcon c-pieIcon--calendarStar'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.281 3.083V1.989H9.97v1.094H6.03V1.989H4.72v1.094H2.094V14.02h8.531a3.29 3.29 0 003.281-3.281V3.083h-2.625zm1.313 7.656a1.969 1.969 0 01-1.969 1.968H3.406V4.396H4.72v1.094H6.03V4.395H9.97v1.094h1.312V4.395h1.313v6.344z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.75 11.561l-1.662-.875a.167.167 0 00-.158 0l-1.662.875.306-1.811a.184.184 0 00-.053-.157L5.183 8.245 7.037 8a.184.184 0 00.132-.096L8 6.189l.875 1.689A.184.184 0 008.963 8l1.855.271-1.34 1.278a.184.184 0 00-.052.157l.324 1.855z',
                fill: '#242E30'
            }
        })]);
    }
};
