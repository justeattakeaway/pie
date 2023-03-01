import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLink',
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
            class: 'c-pieIcon c-pieIcon--link'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.531 8.438c-.01-.861.302-1.695.875-2.337a2.791 2.791 0 012.074-.945h1.645V3.844H5.48a4.121 4.121 0 00-3.036 1.365 4.813 4.813 0 00-1.225 3.229 4.445 4.445 0 004.26 4.593h1.646V11.72H5.48A3.133 3.133 0 012.53 8.438z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.52 3.844H8.875v1.312h1.645a3.133 3.133 0 012.949 3.282c.01.86-.302 1.694-.875 2.336a2.792 2.792 0 01-2.065.945H8.875v1.312h1.645a4.12 4.12 0 003.036-1.365 4.813 4.813 0 001.225-3.229 4.445 4.445 0 00-4.261-4.593z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.471 9.094h5.058l.603-1.313H4.867l.604 1.313z',
                fill: '#242E30'
            }
        })]);
    }
};
