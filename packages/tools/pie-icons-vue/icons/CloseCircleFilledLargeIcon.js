import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CloseCircleFilledLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--closeCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.25 4C13.8272 4 11.4588 4.71845 9.44427 6.0645C7.42977 7.41054 5.85965 9.32373 4.93248 11.5621C4.00531 13.8005 3.76272 16.2636 4.23539 18.6399C4.70805 21.0161 5.87475 23.1989 7.58795 24.9121C9.30114 26.6252 11.4839 27.792 13.8601 28.2646C16.2364 28.7373 18.6995 28.4947 20.9379 27.5675C23.1763 26.6404 25.0895 25.0702 26.4355 23.0557C27.7816 21.0412 28.5 18.6728 28.5 16.25C28.5 13.0011 27.2094 9.88526 24.9121 7.58794C22.6147 5.29062 19.4989 4 16.25 4ZM21.2463 20.0037L20.0038 21.2463L16.25 17.4837L12.4963 21.2463L11.2538 20.0037L15.0163 16.25L11.2538 12.4963L12.4963 11.2537L16.25 15.0163L20.0038 11.2537L21.2463 12.4963L17.4838 16.25L21.2463 20.0037Z',
                fill: '#242E30'
            }
        })]);
    }
};
