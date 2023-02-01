import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconComponentsLarge',
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
            class: 'c-pieIcon c-pieIcon--componentsLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.5388 9.20998L16.0001 3.66248L10.4526 9.20998L16.0001 14.7575L21.5476 9.20998H21.5388ZM15.9913 6.13873L19.0626 9.20998L15.9913 12.2812L12.9201 9.20998L15.9913 6.13873Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.7901 10.4525L17.2426 16L22.7901 21.5475L28.3376 16L22.7901 10.4525ZM19.7188 16L22.7901 12.9287L25.8613 16L22.7901 19.0712L19.7188 16Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.2101 10.4437L3.6626 15.9912L9.2101 21.5387L14.7576 15.9912L9.2101 10.4437ZM6.13885 15.9912L9.2101 12.92L12.2813 15.9912L9.2101 19.0625L6.13885 15.9912Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.4526 22.7812L16.0001 28.3287L21.5476 22.7812L16.0001 17.2337L10.4526 22.7812ZM16.0001 25.8525L12.9288 22.7812L16.0001 19.71L19.0713 22.7812L16.0001 25.8525Z',
                fill: '#242E30'
            }
        })]);
    }
};
