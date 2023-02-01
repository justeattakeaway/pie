import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronRightLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronRightLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.2 26.1237L20.7 16C20.7036 15.968 20.7036 15.9357 20.7 15.9038L10.2 5.87625L11.4338 4.625L21.9338 14.6875C22.2678 15.0429 22.4538 15.5123 22.4538 16C22.4538 16.4877 22.2678 16.9571 21.9338 17.3125L11.4163 27.375L10.2 26.1237Z',
                fill: '#242E30'
            }
        })]);
    }
};
