import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNavigationCollapseLarge',
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
            class: 'c-pieIcon c-pieIcon--navigationCollapseLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.625 4.625V27.375H23C24.1603 27.375 25.2731 26.9141 26.0936 26.0936C26.9141 25.2731 27.375 24.1603 27.375 23V4.625H4.625ZM6.375 6.375H8.125V25.625H6.375V6.375ZM25.625 23C25.625 23.6962 25.3484 24.3639 24.8562 24.8562C24.3639 25.3484 23.6962 25.625 23 25.625H9.875V6.375H25.625V23Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.6138 16.945L18.3713 15.7025L15.51 18.5725C15.3873 18.6938 15.2898 18.8382 15.2233 18.9974C15.1568 19.1566 15.1225 19.3275 15.1225 19.5C15.1225 19.6726 15.1568 19.8434 15.2233 20.0026C15.2898 20.1618 15.3873 20.3062 15.51 20.4275L18.3713 23.2975L19.6138 22.055L17.9338 20.375H23.875V18.625H17.9338L19.6138 16.945Z',
                fill: '#242E30'
            }
        })]);
    }
};
