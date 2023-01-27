import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'FullscreenExitIcon',
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
            class: 'c-pieIcon c-pieIcon--fullscreenExit'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.03125 1.12289L4.71875 1.86025V4.71874H1.76562L1.10938 6.03124H6.03125V1.12289Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.96875 1.10938L11.2812 1.76562V4.71875H14.1397L14.8771 6.03125H9.96875V1.10938Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.8906 9.96875L14.2344 11.2812H11.2812V14.1397L9.96875 14.8771V9.96875H14.8906Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M1.12294 9.96875L1.8603 11.2812H4.71879V14.2344L6.03129 14.8906V9.96875H1.12294Z',
                fill: '#242E30'
            }
        })]);
    }
};
