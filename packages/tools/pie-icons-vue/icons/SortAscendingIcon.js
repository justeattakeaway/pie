import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'SortAscendingIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--sortAscending'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.03 8.75H0V7H16.765L16.03 8.75ZM0 21H10.8675L11.6025 19.25H0V21ZM0 14.875H13.4487L14.1837 13.125H0V14.875ZM25.8913 18.0162L21.875 22.0937V10.5H20.125V22.0237L16.1087 18.0162L14.875 19.25L19.8012 24.185C20.1258 24.4902 20.5545 24.66 21 24.66C21.4455 24.66 21.8742 24.4902 22.1988 24.185L27.125 19.25L25.8913 18.0162Z'
            }
        })]);
    }
};
