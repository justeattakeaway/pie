import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaw',
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
            class: 'c-pieIcon c-pieIcon--law'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_6703_3640)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M9.247 8.634l-.45.451.935.936 4-3.999-.937-.936-.455.455L9.899 3.1l.455-.455-.937-.936-3.99 3.99.937.936.455-.455.743.744-5.827 5.836.936.936L8.49 7.877l.757.757zm-1.5-3.382l2.44 2.442 1.217-1.217-2.442-2.44-1.216 1.215z'
            }
        }), h('path', {
            attrs: {
                d: 'M8.035 11.929h5.574l-.35-1.322H8.385l-.35 1.322z'
            }
        }), h('path', {
            attrs: {
                d: 'M13.845 12.813H7.8l-.35 1.32h6.746l-.35-1.32z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_6703_3640'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
