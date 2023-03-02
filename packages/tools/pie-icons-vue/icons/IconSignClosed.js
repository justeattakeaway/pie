import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSignClosed',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--signClosed',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.25 4.719h-2.126L8.507 1.464H7.494L4.867 4.719H2.75A1.54 1.54 0 001.219 6.25v5.25a1.54 1.54 0 001.531 1.531h10.5a1.54 1.54 0 001.531-1.531V6.25a1.54 1.54 0 00-1.531-1.531zM8 2.969l1.444 1.75H6.556L8 2.969zm5.469 8.531a.219.219 0 01-.219.219H2.75a.219.219 0 01-.219-.219V6.25a.219.219 0 01.219-.219h10.5a.219.219 0 01.219.219v5.25zm-3.5-3.692L8.928 8.874l1.076 1.068-.936.936L8 9.803l-1.067 1.076-.937-.936 1.076-1.068-1.076-1.067.936-.937L8 7.947l1.068-1.076.9.936z',
                fill: '#242E30',
            },
        })]);
    },
};
