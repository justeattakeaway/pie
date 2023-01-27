import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'MinusCircleFilledLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--minusCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.6626 7.33751C22.9493 5.62444 20.7666 4.45786 18.3904 3.98529C16.0141 3.51273 13.5511 3.75539 11.3128 4.6826C9.07449 5.60981 7.16138 7.17992 5.81539 9.1944C4.46939 11.2089 3.75098 13.5772 3.75098 16C3.75098 18.4228 4.46939 20.7911 5.81539 22.8056C7.16138 24.8201 9.07449 26.3902 11.3128 27.3174C13.5511 28.2446 16.0141 28.4873 18.3904 28.0147C20.7666 27.5421 22.9493 26.3756 24.6626 24.6625C25.8002 23.525 26.7027 22.1745 27.3184 20.6882C27.9341 19.2018 28.251 17.6088 28.251 16C28.251 14.3912 27.9341 12.7982 27.3184 11.3118C26.7027 9.82553 25.8002 8.47504 24.6626 7.33751ZM22.1863 16.875H9.81384V15.125H22.1863V16.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
