import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'TrashIcon',
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
            class: 'c-pieIcon c-pieIcon--trash'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.86377 1.21875H6.13626L5.48876 2.53125H10.5113L9.86377 1.21875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M1.875 3.84375V5.15625H2.8375L3.625 13.3988C3.66192 13.7771 3.83823 14.1281 4.11963 14.3836C4.40102 14.6391 4.7674 14.7809 5.1475 14.7812H10.87C11.2471 14.7766 11.6092 14.6329 11.8869 14.3778C12.1646 14.1227 12.3384 13.7741 12.375 13.3988L13.1538 5.15625H14.125V3.84375H1.875ZM11.08 13.25C11.0737 13.3042 11.0482 13.3543 11.008 13.3913C10.9679 13.4282 10.9158 13.4495 10.8612 13.4513H5.13875C5.08421 13.4495 5.03212 13.4282 4.99196 13.3913C4.95181 13.3543 4.92627 13.3042 4.92 13.25L4.15 5.15625H11.85L11.08 13.25Z',
                fill: '#242E30'
            }
        })]);
    }
};
