import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCopy',
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
            class: 'c-pieIcon c-pieIcon--copy'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1597_572)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M8.184 6.501h-3.44v1.356h3.44V6.502z'
            }
        }), h('path', {
            attrs: {
                d: 'M8.184 9.135h-3.44v1.356h3.44V9.135z'
            }
        }), h('path', {
            attrs: {
                d: 'M14.212 1.627a1.356 1.356 0 00-.875-.56L7.265 0A1.374 1.374 0 005.69 1.111l-.166.963h1.32l.123-.726a.061.061 0 01.07-.044l6.073 1.041.044.079-1.085 6.326v3.036a1.356 1.356 0 00.97-1.067l1.4-8.094a1.391 1.391 0 00-.227-.998z'
            }
        }), h('path', {
            attrs: {
                d: 'M9.54 14H3.415a1.365 1.365 0 01-1.365-1.365V4.428A1.356 1.356 0 013.389 3.07h6.125a1.357 1.357 0 011.365 1.357v8.19A1.366 1.366 0 019.539 14zM3.415 4.375a.061.061 0 00-.061.061v8.19a.061.061 0 00.06.062H9.54a.07.07 0 00.07-.062V4.428a.07.07 0 00-.07-.053H3.415z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1597_572'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1)'
            }
        })])])]);
    }
};
