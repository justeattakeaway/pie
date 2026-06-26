const pieSwitch = {
    selectors: {
        container: {
            description: 'The selector for the switch container',
            dataTestId: 'switch-component',
        },
        input: {
            description: 'The selector for the switch input',
            dataTestId: 'switch-input',
        },
        label: {
            leading: {
                description: 'The selector for the leading switch label',
                dataTestId: 'switch-label-leading',
            },
            trailing: {
                description: 'The selector for the leading switch label',
                dataTestId: 'switch-label-trailing',
            },
        },
        ariaDescription: {
            description: 'The selector for the switch aria description',
            dataTestId: 'switch-description',
        },
    },
};

export {
    pieSwitch,
};
