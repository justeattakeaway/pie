const toastProvider = {
    selectors: {
        container: {
            description: 'The selector for the toast provider container',
            dataTestId: 'pie-toast-provider',
        },
        announcer: {
            description: 'The selector for the toast provider polite ARIA live region',
            dataTestId: 'pie-toast-provider-announcer',
        },
        announcerAssertive: {
            description: 'The selector for the toast provider assertive ARIA live region, used for error toasts',
            dataTestId: 'pie-toast-provider-announcer-assertive',
        },
        toastClose: {
            description: 'The selector for the close button of a toast rendered by the provider',
            dataTestId: 'pie-toast-close',
        },
    },
};
export {
    toastProvider,
};
