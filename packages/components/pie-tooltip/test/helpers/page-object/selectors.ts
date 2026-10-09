const tooltip = {
    selectors: {
        panel: {
            description: 'The selector for the tooltip panel',
            dataTestId: 'pie-tooltip',
        },
        heading: {
            description: 'The selector for the panel heading',
            dataTestId: 'pie-tooltip-heading',
        },
        content: {
            description: 'The selector for the content wrapper, the programmatic focus target in dialog mode',
            dataTestId: 'pie-tooltip-content',
        },
        close: {
            description: 'The selector for the close button',
            dataTestId: 'pie-tooltip-close',
        },
        trigger: {
            description: 'The selector for the trigger the panel is anchored to',
            dataTestId: 'tooltip-trigger',
        },
        modal: {
            description: 'The selector for the `pie-modal` dialog the panel is slotted into',
            dataTestId: 'pie-modal',
        },
    },
};

export {
    tooltip,
};
