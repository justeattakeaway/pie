import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLinkedin',
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
            class: 'c-pieIcon c-pieIcon--linkedin'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2 2.85961C2 2.38499 2.39451 2 2.88119 2H13.0432C13.5298 2 13.9243 2.38499 13.9243 2.85961V13.1404C13.9243 13.6152 13.5298 14 13.0432 14H2.88119C2.39451 14 2 13.6152 2 13.1404V2.85961Z',
                fill: '#006699'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M5.61427 12.0452V6.62658H3.8132V12.0452H5.61427ZM4.71373 5.88675C5.34179 5.88675 5.73271 5.47066 5.73271 4.95066C5.72101 4.41896 5.34179 4.01441 4.72564 4.01441C4.10955 4.01441 3.70673 4.41896 3.70673 4.95066C3.70673 5.47066 4.09757 5.88675 4.70199 5.88675H4.71373Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M6.61091 12.0452H8.41195V9.01923C8.41195 8.85729 8.42366 8.6955 8.47122 8.57973C8.60142 8.25616 8.89777 7.92104 9.39532 7.92104C10.047 7.92104 10.3077 8.41794 10.3077 9.14639V12.0452H12.1086V8.93826C12.1086 7.27389 11.2201 6.49943 10.0351 6.49943C9.06351 6.49943 8.63696 7.04251 8.39998 7.41243H8.412V6.62658H6.61096C6.63459 7.13503 6.61091 12.0452 6.61091 12.0452Z',
                fill: 'white'
            }
        })]);
    }
};
