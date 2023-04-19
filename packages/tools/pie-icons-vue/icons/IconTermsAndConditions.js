import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconTermsAndConditions',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--termsAndConditions');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__clip0_18_941)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8.744 4.482H4.491v1.313h4.253V4.482Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.329 7.519H4.491V8.83H6.33V7.52Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14.947 9.085c0-.831-.463-1.584-1.198-1.96l-.919-.473V1.22H1.219v12.6h5.897c.56 0 1.05 0 1.505-.018.201.158.412.315.656.447l1.68.708 1.707-.691a4.292 4.292 0 0 0 1.758-1.663c.298-.498.473-1.102.534-1.872V9.085h-.008ZM6.96 9.059v1.601l.052.411a4.39 4.39 0 0 0 .464 1.435H2.531V2.531h8.986V5.98l-.49-.254-2.8 1.339a2.214 2.214 0 0 0-1.26 1.995H6.96Zm6.326 2.879a2.955 2.955 0 0 1-1.172 1.128l-1.155.464-.053-.026-1.067-.447a2.857 2.857 0 0 1-.744-.595c-.088-.096-.184-.183-.263-.288-.262-.359-.437-.796-.516-1.313L8.28 10.6V9.05c0-.341.201-.665.516-.814l2.214-1.059.516.263 1.313.674.315.166c.297.158.49.464.49.796v1.61c-.035.49-.149.91-.35 1.234l-.009.018Z',
            },
        }), h('path', {
            attrs: {
                d: 'm10.599 10.424-.604-.665-.971.883.857.937a.95.95 0 0 0 .7.315h.009a.966.966 0 0 0 .7-.298l1.592-1.68-.953-.901-1.34 1.409h.01Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_941',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
