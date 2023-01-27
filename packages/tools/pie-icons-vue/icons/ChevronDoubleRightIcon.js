import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ChevronDoubleRightIcon',
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
            class: 'c-pieIcon c-pieIcon--chevronDoubleRight'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.75374 13.18L13.1262 7.99998L7.70999 2.81998L8.58499 1.85748L14.1237 7.20373C14.3391 7.42158 14.4599 7.71554 14.4599 8.02186C14.4599 8.32817 14.3391 8.62214 14.1237 8.83998L8.65499 14.125L7.75374 13.18Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M2.78374 13.18L8.13874 7.99998L2.73999 2.81998L3.61499 1.85748L9.17999 7.20373C9.29192 7.31222 9.38091 7.4421 9.44168 7.58564C9.50246 7.72919 9.53377 7.88348 9.53377 8.03936C9.53377 8.19524 9.50246 8.34953 9.44168 8.49307C9.38091 8.63662 9.29192 8.76649 9.17999 8.87498L3.68499 14.125L2.78374 13.18Z',
                fill: '#242E30'
            }
        })]);
    }
};
