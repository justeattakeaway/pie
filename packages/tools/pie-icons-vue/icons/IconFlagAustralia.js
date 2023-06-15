import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFlagAustralia',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--australia', 'IconFlagAustralia');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#0052B4',
                d: 'M15 8A7 7 0 1 1 1 8l7-7a7 7 0 0 1 7 7Z',
            },
        }), h('path', {
            attrs: {
                fill: '#EEE',
                d: 'M7.981 8h.02v-.02L7.98 8Z',
            },
        }), h('path', {
            attrs: {
                fill: '#EEE',
                d: 'M8 4.653V1a7 7 0 0 0-7 7h3.653V5.944L6.71 8h1.272l.02-.02L8 6.71 5.944 4.652H8Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M4.54 1.913a7.033 7.033 0 0 0-2.627 2.628V8H3.74V3.74H8V1.913H4.54Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M8 7.139 5.51 4.65h-.858L8 8v-.861Z',
            },
        }), h('path', {
            attrs: {
                fill: '#EEE',
                d: 'm5.222 9.217.382.804.87-.2-.388.801.697.553-.87.196.003.89-.694-.556-.695.555v-.889l-.864-.2.697-.551-.388-.802.867.2.383-.801Zm6.259 1.523.191.402.435-.101-.194.399.347.279-.435.095v.446l-.344-.279-.348.28v-.447l-.434-.095.35-.28-.195-.398.435.1.192-.401ZM9.692 6.477l.192.402.437-.099-.197.4.35.276-.437.098.003.446-.348-.279L9.345 8v-.446l-.432-.098.347-.274-.191-.402.432.099.191-.402Zm1.789-2.434.191.402.435-.1-.197.401.347.273-.435.102v.445l-.344-.279-.347.28V5.12l-.435-.099.35-.276-.194-.402.434.101.195-.402Zm1.558 1.827.192.402.437-.101-.194.402.347.273-.434.101v.443l-.345-.276-.347.276v-.443l-.435-.098.35-.276-.194-.402.432.1.191-.401ZM11.926 8l.153.465h.487l-.396.287.15.465-.396-.287-.394.287.15-.465-.396-.287h.492l.15-.465Z',
            },
        })]);
    },
};
