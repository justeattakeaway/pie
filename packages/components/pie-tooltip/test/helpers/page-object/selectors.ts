const tooltip = {
    selectors: {
        panel: {
            description: 'The selector for the tooltip panel',
            dataTestId: 'pie-tooltip',
        },
        layer: {
            description: 'The selector for the placement layer the panel sits in',
            dataTestId: 'pie-tooltip-layer',
        },
        arrow: {
            description: 'The selector for the arrow',
            dataTestId: 'pie-tooltip-arrow',
        },
        heading: {
            description: 'The selector for the panel heading',
            dataTestId: 'pie-tooltip-heading',
        },
        content: {
            description: 'The selector for the content wrapper',
            dataTestId: 'pie-tooltip-content',
        },
        action: {
            description: 'The selector for the action wrapper',
            dataTestId: 'pie-tooltip-action',
        },
        close: {
            description: 'The selector for the close button',
            dataTestId: 'pie-tooltip-close',
        },
        slottedContent: {
            description: 'The selector for the content slotted by the consumer',
            dataTestId: 'pie-tooltip-slotted-content',
        },
        slottedAction: {
            description: 'The selector for the action slotted by the consumer',
            dataTestId: 'pie-tooltip-slotted-action',
        },
        trigger: {
            description: 'The selector for the trigger the panel is anchored to',
            dataTestId: 'tooltip-trigger',
        },
        triggerContainer: {
            description: 'The selector for the trigger\'s parent element, which `fill-container` is measured against',
            dataTestId: 'tooltip-trigger-container',
        },
    },
};

export {
    tooltip,
};
