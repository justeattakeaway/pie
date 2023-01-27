import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ArrowRightIcon',
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
            class: 'c-pieIcon c-pieIcon--arrowRight'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1 8.75005H12.65L8.89 12.5101L10 13.5701L14.68 8.88005C14.7961 8.76479 14.8883 8.6277 14.9511 8.47667C15.014 8.32563 15.0464 8.16365 15.0464 8.00005C15.0464 7.83645 15.014 7.67447 14.9511 7.52344C14.8883 7.37241 14.7961 7.23531 14.68 7.12005L10 2.43005L8.89 3.49005L12.65 7.25005H1V8.75005Z',
                fill: '#242E30'
            }
        })]);
    }
};
