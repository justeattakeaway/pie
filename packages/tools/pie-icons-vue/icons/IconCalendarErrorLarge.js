import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarErrorLarge',
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
            class: 'c-pieIcon c-pieIcon--calendarErrorLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.3266 12.5087H21.7867L22.6596 10.7631H9.45382L10.3266 12.5087Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.0748 6.36407V4.61844H20.3291V6.36407H11.601V4.61844H9.85532V6.36407H4.61841V27.3117H22.9476C24.105 27.3117 25.215 26.8519 26.0335 26.0335C26.8519 25.2151 27.3117 24.105 27.3117 22.9476V6.36407H22.0748ZM25.566 22.9476C25.566 23.6421 25.2902 24.3081 24.7991 24.7991C24.3081 25.2902 23.642 25.5661 22.9476 25.5661H6.36404V8.10971H9.85532V8.98253H11.601V8.10971H20.3291V8.98253H22.0748V8.10971H25.566V22.9476Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.7705 16.2444L18.5399 15.005L15.7643 17.7805L12.9887 15.005L11.7493 16.2444L14.5249 19.0199L11.7493 21.7955L12.9887 23.0262L15.7643 20.2506L18.5399 23.0262L19.7705 21.7955L16.995 19.0199L19.7705 16.2444Z',
                fill: '#242E30'
            }
        })]);
    }
};
