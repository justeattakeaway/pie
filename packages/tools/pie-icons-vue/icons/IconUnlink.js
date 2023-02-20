import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUnlink',
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
            class: 'c-pieIcon c-pieIcon--unlink'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.48 11.719h1.645v1.312H5.48a4.445 4.445 0 01-4.261-4.594A4.813 4.813 0 012.444 5.21 4.121 4.121 0 015.48 3.844h1.645v1.312H5.48a2.791 2.791 0 00-2.065.945 3.448 3.448 0 00-.875 2.337 3.132 3.132 0 002.94 3.28zm5.04-7.875H8.875v1.312h1.645a3.133 3.133 0 012.949 3.282c.01.86-.302 1.694-.875 2.336a2.792 2.792 0 01-2.065.945H8.875v1.312h1.645a4.12 4.12 0 003.036-1.365 4.812 4.812 0 001.225-3.229 4.445 4.445 0 00-4.261-4.593zm-.306 5.906L8.927 8.437l1.287-1.312-.928-.875L8 7.51 6.714 6.25l-.928.875 1.286 1.313L5.786 9.75l.928.875L8 9.365l1.286 1.26.928-.875z',
                fill: '#242E30'
            }
        })]);
    }
};
