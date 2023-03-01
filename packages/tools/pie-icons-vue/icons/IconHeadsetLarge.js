import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHeadsetLarge',
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
            class: 'c-pieIcon c-pieIcon--headsetLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 2.875A10.57 10.57 0 005.5 13.498v10.377a4.375 4.375 0 004.375 4.375h8.75V26.5h-8.75a2.625 2.625 0 01-2.625-2.625v-.997c.235.076.48.117.726.122H9.14a2.511 2.511 0 002.485-2.546V17.11a2.52 2.52 0 00-2.476-2.546H7.25v-1.067A8.829 8.829 0 0116 4.625a8.829 8.829 0 018.75 8.873v1.067h-1.899a2.52 2.52 0 00-2.476 2.546v3.343A2.513 2.513 0 0022.851 23h1.173a2.513 2.513 0 002.476-2.546v-6.957A10.57 10.57 0 0016 2.876zm-6.86 13.44a.763.763 0 01.726.796v3.343a.761.761 0 01-.726.796H7.976a.763.763 0 01-.726-.796v-4.139h1.89zm15.61 4.139a.76.76 0 01-.726.796H22.85a.762.762 0 01-.726-.796V17.11a.762.762 0 01.726-.796h1.899v4.139zm-7.245.796h1.873a3.5 3.5 0 01-6.755 0h1.872a1.75 1.75 0 003.01 0z',
                fill: '#242E30',
            },
        })]);
    },
};
