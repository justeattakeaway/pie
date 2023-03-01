import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRecycleLarge',
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
            class: 'c-pieIcon c-pieIcon--recycleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.364 24.33a2.502 2.502 0 01-2.205 1.295H19.07l2.441 2.415-1.233 1.242-4.585-4.532 4.585-4.541 1.233 1.242-2.44 2.424h7.087a.78.78 0 00.69-.402.76.76 0 000-.762l-2.974-4.961 1.505-.875 2.957 4.996a2.476 2.476 0 01.027 2.459zM16.874 5.824l3.5 5.967-3.438-.997-.49 1.706 6.213 1.75 1.82-6.125-1.68-.499-.954 3.212-3.5-5.907a2.555 2.555 0 00-4.375 0L11.187 9.64l1.505.875 2.783-4.69a.806.806 0 011.374 0h.026zm-7.56 10.5l1.06 3.368 1.67-.533-1.924-6.125-6.204 1.872.516 1.68L7.67 15.58l-3.693 6.23a2.476 2.476 0 000 2.52 2.52 2.52 0 002.197 1.295h5.766v-1.75H6.174a.761.761 0 01-.674-.411.735.735 0 010-.761l3.815-6.38z',
                fill: '#242E30'
            }
        })]);
    }
};
