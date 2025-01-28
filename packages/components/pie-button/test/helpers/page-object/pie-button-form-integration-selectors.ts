const form = {
    selectors: {
        container: {
            description: 'The selector for the form element',
            dataTestId: 'testForm',
        },
        name: {
            description: 'The selector for the name input element',
            dataTestId: 'name',
        },
        email: {
            description: 'The selector for the email input element',
            dataTestId: 'usermail',
        },
        password: {
            description: 'The selector for the password input element',
            dataTestId: 'password',
        },
        userPaymentCardType: {
            description: 'The selector for the user payment card type select element',
            dataTestId: 'usercard',
        },
        userPaymentCardNumber: {
            description: 'The selector for the user payment card number input element',
            dataTestId: 'card-number',
        },
        userPaymentCardExpiration: {
            description: 'The selector for the user payment card expiration input element',
            dataTestId: 'card-expiration',
        },
        formSubmittedFlag: {
            description: 'The selector for the form submitted flag element',
            dataTestId: 'formSubmittedFlag',
        },
        pieButtonSubmit: {
            description: 'The selector for the pie-button submit element',
            dataTestId: 'pie-button-submit',
        },
        pieButtonReset: {
            description: 'The selector for the pie-button reset element',
            dataTestId: 'pie-button-reset',
        },
        nativeButtonReset: {
            description: 'The selector for the native reset button element',
            dataTestId: 'button-reset',
        },
    },
};
export {
    form,
};
