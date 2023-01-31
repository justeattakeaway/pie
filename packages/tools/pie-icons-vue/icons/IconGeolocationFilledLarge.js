import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--geolocationFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.15613 12.9725V15.02L9.55988 15.895C11.1488 16.2901 12.6 17.1106 13.7578 18.2684C14.9155 19.4261 15.736 20.8774 16.1311 22.4663L17.0061 25.87H19.0536L25.4586 6.54126L6.15613 12.9725Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.0274 25.8438H16.9799L16.1049 22.44C15.7098 20.8511 14.8893 19.3998 13.7315 18.2421C12.5738 17.0844 11.1225 16.2639 9.53363 15.8688L6.12988 14.9938V12.9725L25.4586 6.54126L19.0274 25.8438Z',
                fill: '#242E30'
            }
        })]);
    }
};
