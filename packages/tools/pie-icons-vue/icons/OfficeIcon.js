import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'OfficeIcon',
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
            class: 'c-pieIcon c-pieIcon--office'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.75 2.625H5.25C4.55381 2.625 3.88613 2.90156 3.39384 3.39384C2.90156 3.88613 2.625 4.55381 2.625 5.25V25.375H25.375V5.25C25.375 4.55381 25.0984 3.88613 24.6062 3.39384C24.1139 2.90156 23.4462 2.625 22.75 2.625ZM12.25 23.625V20.125H15.75V23.625H12.25ZM23.625 23.625H17.5V20.125H19.25V18.375H8.75V20.125H10.5V23.625H4.375V5.25C4.375 5.01794 4.46719 4.79538 4.63128 4.63128C4.79538 4.46719 5.01794 4.375 5.25 4.375H22.75C22.9821 4.375 23.2046 4.46719 23.3687 4.63128C23.5328 4.79538 23.625 5.01794 23.625 5.25V23.625ZM15.75 7.875H19.25V9.625H15.75V7.875ZM8.75 7.875H12.25V9.625H8.75V7.875ZM15.75 13.125H19.25V14.875H15.75V13.125ZM8.75 13.125H12.25V14.875H8.75V13.125Z'
            }
        })]);
    }
};
