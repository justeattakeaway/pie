import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlaneLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--planeLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M20.786 28.582l-2.905-.97a6.011 6.011 0 00-3.762 0l-2.905.97-.062-2.143.456-.263a1.75 1.75 0 00.874-1.531v-3.894l-7.455 1.313V18.45a2.214 2.214 0 011.13-1.916l6.343-3.868V7.25a3.5 3.5 0 117 0v5.416l6.352 3.894a2.17 2.17 0 011.103 1.89v3.614L19.5 20.75v3.894a1.75 1.75 0 00.875 1.531l.455.263-.044 2.143zM16 25.555a7.75 7.75 0 011.951.254 3.5 3.5 0 01-.201-1.164v-6.02l7.455 1.321V18.45a.446.446 0 00-.227-.385L17.75 13.69V7.25a1.75 1.75 0 00-3.5 0v6.405L7.057 18.03a.463.463 0 00-.262.402v1.532l7.455-1.339v5.985c0 .396-.069.79-.201 1.164A7.748 7.748 0 0116 25.555z',
                fill: '#242E30',
            },
        })]);
    },
};
