import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'TrashSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--trashSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.86377 0.21875H5.13626L4.48876 1.53125H9.51126L8.86377 0.21875Z'
            }
        }), h('path', {
            attrs: {
                d: 'M0.875 2.84375V4.15625H1.8375L2.625 12.3988C2.66192 12.7771 2.83823 13.1281 3.11963 13.3836C3.40102 13.6391 3.7674 13.7809 4.1475 13.7812H9.87C10.2471 13.7766 10.6092 13.6329 10.8869 13.3778C11.1646 13.1227 11.3384 12.7741 11.375 12.3988L12.1538 4.15625H13.125V2.84375H0.875ZM10.08 12.25C10.0737 12.3042 10.0482 12.3543 10.008 12.3913C9.96788 12.4282 9.91579 12.4495 9.86125 12.4513H4.13875C4.08421 12.4495 4.03212 12.4282 3.99196 12.3913C3.95181 12.3543 3.92627 12.3042 3.92 12.25L3.15 4.15625H10.85L10.08 12.25Z'
            }
        })]);
    }
};
