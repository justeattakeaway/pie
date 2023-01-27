import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'FullscreenExitSmallIcon',
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
            class: 'c-pieIcon c-pieIcon--fullscreenExitSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.03125 0.122887L3.71875 0.860246V3.71874H0.765625L0.109375 5.03124H5.03125V0.122887Z'
            }
        }), h('path', {
            attrs: {
                d: 'M8.96875 0.109375L10.2812 0.765625V3.71875H13.1397L13.8771 5.03125H8.96875V0.109375Z'
            }
        }), h('path', {
            attrs: {
                d: 'M13.8906 8.96875L13.2344 10.2812H10.2812V13.1397L8.96875 13.8771V8.96875H13.8906Z'
            }
        }), h('path', {
            attrs: {
                d: 'M0.122937 8.96875L0.860296 10.2812H3.71879V13.2344L5.03129 13.8906V8.96875H0.122937Z'
            }
        })]);
    }
};
