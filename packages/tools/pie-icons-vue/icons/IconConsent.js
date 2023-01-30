import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconConsent',
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
            class: 'c-pieIcon c-pieIcon--consent'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.9237 11.5701V4.57007C13.9237 3.73007 13.2325 3.03882 12.3925 3.03882H3.64245C2.80245 3.03882 2.1112 3.73007 2.1112 4.57007V11.5701H1.26245V12.8826H14.7637V11.5701H13.9237ZM3.4237 11.5701V4.57007C3.4237 4.44757 3.51995 4.35132 3.64245 4.35132H12.3925C12.515 4.35132 12.6112 4.44757 12.6112 4.57007V11.5701H3.4237Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.1263 5.54131L7.0025 8.91006L5.9175 7.68506L4.9375 8.56006L5.97 9.72381L6.27625 10.0651C6.46 10.2663 6.73125 10.3801 7.0025 10.3801C7.27375 10.3801 7.545 10.2663 7.72875 10.0651L8.04375 9.72381L11.0887 6.44256L10.1263 5.55006V5.54131Z',
                fill: '#242E30'
            }
        })]);
    }
};
