import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBike',
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
            class: 'c-pieIcon c-pieIcon--bike',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.139 7.405L11 4.159a.218.218 0 010-.158.246.246 0 01.158-.122l1.216-.447v-1.4l-1.627.613a1.514 1.514 0 00-.998 1.934l.359 1.015H9.75a2.433 2.433 0 00-1.925.962l-1.207 1.61-1.06-2.135h.692V4.72h-3.5V6.03h1.339l.726 1.461a2.87 2.87 0 00-.735-.105 2.826 2.826 0 102.826 2.818v-.201l1.969-2.66a1.111 1.111 0 01.875-.438h.831l.254.718a2.844 2.844 0 101.313-.219h-.01zM4.08 11.719a1.514 1.514 0 111.514-1.514 1.505 1.505 0 01-1.514 1.514zm7.875 0a1.514 1.514 0 111.4-.933 1.505 1.505 0 01-1.4.933z',
                fill: '#242E30',
            },
        })]);
    },
};
