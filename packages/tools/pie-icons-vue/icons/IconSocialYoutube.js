import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialYoutube',
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
            class: 'c-pieIcon c-pieIcon--youtube'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.95 4.985a1.567 1.567 0 00-1.093-1.118c-.964-.264-4.831-.264-4.831-.264s-3.867 0-4.831.264a1.567 1.567 0 00-1.093 1.118c-.259.987-.259 3.045-.259 3.045s0 2.058.259 3.045c.142.544.56.973 1.093 1.119.964.264 4.83.264 4.83.264s3.867 0 4.832-.264a1.567 1.567 0 001.093-1.119c.258-.986.258-3.045.258-3.045s0-2.058-.258-3.045z',
                fill: 'red'
            }
        }), h('path', {
            attrs: {
                d: 'M6.761 9.899L9.993 8.03 6.761 6.161V9.9z',
                fill: '#fff'
            }
        })]);
    }
};
