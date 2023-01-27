import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ChevronDoubleRightSmallIcon',
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
            class: 'c-pieIcon c-pieIcon--chevronDoubleRightSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.75374 12.18L12.1262 6.99998L6.70999 1.81998L7.58499 0.857483L13.1237 6.20373C13.3391 6.42158 13.4599 6.71554 13.4599 7.02186C13.4599 7.32817 13.3391 7.62214 13.1237 7.83998L7.65499 13.125L6.75374 12.18Z'
            }
        }), h('path', {
            attrs: {
                d: 'M1.78374 12.18L7.13874 6.99998L1.73999 1.81998L2.61499 0.857483L8.17999 6.20373C8.29192 6.31222 8.38091 6.4421 8.44168 6.58564C8.50246 6.72919 8.53377 6.88348 8.53377 7.03936C8.53377 7.19524 8.50246 7.34953 8.44168 7.49307C8.38091 7.63662 8.29192 7.76649 8.17999 7.87498L2.68499 13.125L1.78374 12.18Z'
            }
        })]);
    }
};
