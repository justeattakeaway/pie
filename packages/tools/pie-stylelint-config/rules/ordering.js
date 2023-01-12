module.exports = {
    plugins: ['stylelint-order'],
    rules: {
        'order/order': [
            'custom-properties',
            'dollar-variables',
            {
                hasBlock: false,
                name: 'include',
                type: 'at-rule'
            },
            'declarations',
            {
                hasBlock: true,
                name: 'include',
                parameter: /focus|hover/,
                type: 'at-rule'
            },
            {
                hasBlock: true,
                name: 'include',
                parameter: 'active',
                type: 'at-rule'
            },
            {
                selector: '^&:focus|hover$',
                type: 'rule'
            },
            {
                selector: '^&:active$',
                type: 'rule'
            },
            {
                hasBlock: true,
                name: 'include',
                type: 'at-rule'
            },
            {
                name: 'media',
                type: 'at-rule'
            },
            'rules'
        ],
        'order/properties-order': [
            'composes',
            'content',
            {
                emptyLineBefore: 'always',
                properties: ['position']
            },
            {
                order: 'flexible',
                properties: ['top', 'bottom', 'left', 'right', 'z-index']
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: ['display', 'vertical-align']
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: [
                    'flex',
                    'flex-basis',
                    'flex-direction',
                    'flex-flow',
                    'flex-grow',
                    'flex-shrink',
                    'flex-wrap',
                    'justify-content',
                    'justify-items',
                    'justify-self',
                    'align-content',
                    'align-items',
                    'align-self',
                    'align'
                ]
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: [
                    'width',
                    'height',
                    'min-width',
                    'max-width',
                    'min-height',
                    'max-height',
                    'overflow',
                    'overflow-x',
                    'overflow-y',
                    'box-sizing'
                ]
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: [
                    'margin',
                    'margin-top',
                    'margin-bottom',
                    'margin-left',
                    'margin-right',
                    'padding',
                    'padding-top',
                    'padding-bottom',
                    'padding-left',
                    'padding-right'
                ]
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: [
                    'appearance',
                    'border',
                    'border-collapse',
                    'border-color',
                    'border-image',
                    'border-border-image-outset',
                    'border-image-repeat',
                    'border-image-slice',
                    'border-image-source',
                    'border-image-width',
                    'border-bottom',
                    'border-bottom-color',
                    'border-bottom-left-radius',
                    'border-bottom-right-radius',
                    'border-bottom-style',
                    'border-bottom-width',
                    'border-left',
                    'border-left-color',
                    'border-left-style',
                    'border-left-width',
                    'border-right',
                    'border-right-color',
                    'border-right-style',
                    'border-right-width',
                    'border-top',
                    'border-top-color',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-top-style',
                    'border-top-width',
                    'border-radius',
                    'border-spacing',
                    'border-style',
                    'border-width',
                    'outline',
                    'outline-color',
                    'outline-offset',
                    'outline-style',
                    'outline-width',
                    'background',
                    'background-attachment',
                    'background-blend-mode',
                    'background-clip',
                    'background-color',
                    'background-image',
                    'background-origin',
                    'background-position',
                    'background-repeat',
                    'background-size',
                    'box-shadow'
                ]
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: [
                    'font',
                    'font-family',
                    'font-size',
                    'font-style',
                    'font-variant',
                    'font-weight',
                    'color',
                    'line-height',
                    'text',
                    'text-align',
                    'text-decoration',
                    'text-decoration-color',
                    'text-decoration-line',
                    'text-decoration-style',
                    'text-indent',
                    'text-justify',
                    'text-orientation',
                    'text-overflow',
                    'text-shadow',
                    'text-transform',
                    'text-underline-position',
                    'white-space',
                    'word'
                ]
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: ['opacity', 'visibility']
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: ['cursor', 'user-select', 'pointer-events']
            },
            {
                emptyLineBefore: 'always',
                order: 'flexible',
                properties: [
                    'transition',
                    'transition-delay',
                    'transition-duration',
                    'transition-timing-function',
                    'transition-property',
                    'transform',
                    'transform-origin',
                    'transform-style',
                    'animation',
                    'animation-delay',
                    'animation-direction',
                    'animation-duration',
                    'animation-fill-mode',
                    'animation-iteration-count',
                    'animation-name',
                    'animation-play-state',
                    'animation-timing-function'
                ]
            }
        ]
    }
};
