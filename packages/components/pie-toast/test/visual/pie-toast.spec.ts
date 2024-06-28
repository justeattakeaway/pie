
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieToast, ToastProps } from '../../src/index.ts';

test.describe('PieToast - Visual tests`', () => {
    test('should display the PieToast component successfully', async ({ page, mount }) => {
        await mount(PieToast, {
            props: {} as ToastProps,
        });

        await percySnapshot(page, 'PieToast - Visual Test');
    });
});

const mainAction = {
    text: 'Confirm',
    ariaLabel: 'Button that confirm the action',
};

const initialValues: ToastProps = {
    isOpen: true,
    isMultiline: false,
    message: 'Item has been created',
    leadingAction: mainAction,
};

test.describe('Props', () => {
    test.describe('isDismissible', () => {
        test('Should show close icon if isDismissible is true', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...initialValues,
                    isDismissible: true,
                } as ToastProps,
            });

            await percySnapshot(page, 'PieNotification - isDismissible - Should show close icon if isDismissible is true');
        });

        test('Should not show close icon if isDismissible is false', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...initialValues,
                    isDismissible: false,
                } as ToastProps,
            });

            await percySnapshot(page, 'PieNotification - isDismissible - Should not show close icon if isDismissible is false');
        });
    });

    test.describe('message', () => {
        test('Should show ellipsis when message is too big and isMultiline is false', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...initialValues,
                    isMultiline: false,
                    message: 'Donec pulvinar porta tempus. Sed ac ex ac libero pulvinar tincidunt eget non orci. Curabitur leo quam, commodo sit amet dolor eu, molestie molestie eros. Nulla rutrum vehicula sodales. Duis quis lobortis tortor. In hac habitasse platea dictumst. Vestibulum efficitur, orci at interdum eleifend, nulla nunc luctus urna, sit amet commodo libero lacus scelerisque enim. In eleifend ex ut nulla cursus, eu efficitur ligula pharetra.',
                } as ToastProps,
            });

            await percySnapshot(page, 'PieNotification - message - Should show ellipsis when message is too big and isMultiline is false');
        });

        test('Should show ellipsis when message is too big and isMultiline is true and message is limited to three lines', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...initialValues,
                    isMultiline: true,
                    message: 'Donec pulvinar porta tempus. Sed ac ex ac libero pulvinar tincidunt eget non orci. Curabitur leo quam, commodo sit amet dolor eu, molestie molestie eros. Nulla rutrum vehicula sodales. Duis quis lobortis tortor. In hac habitasse platea dictumst. Vestibulum efficitur, orci at interdum eleifend, nulla nunc luctus urna, sit amet commodo libero lacus scelerisque enim. In eleifend ex ut nulla cursus, eu efficitur ligula pharetra.',
                } as ToastProps,
            });

            await percySnapshot(page, 'PieNotification - message - Should show ellipsis when message is too big and isMultiline is true and message is limited to three lines');
        });
    });

    test.describe('isMultiline', () => {
        test('Should show close icon if isDismissible is true', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...initialValues,
                    isDismissible: true,
                } as ToastProps,
            });

            await percySnapshot(page, 'PieNotification - isMultiline - Should show close icon if isDismissible is true');
        });

        test('Should not show close icon if isDismissible is false', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...initialValues,
                    isDismissible: false,
                } as ToastProps,
            });

            await percySnapshot(page, 'PieNotification - isMultiline - Should not show close icon if isDismissible is false');
        });
    });

    test.describe('leadingAction', () => {
        test('Should show leadingAction in the footer if isMultiline is true', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...initialValues,
                    isMultiline: true,
                } as ToastProps,
            });

            await percySnapshot(page, 'PieNotification - isMultiline - Should show leadingAction in the footer if isMultiline is true');
        });

        test('Should show leadingAction inline if isMultiline is false', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...initialValues,
                    isMultiline: false,
                } as ToastProps,
            });

            await percySnapshot(page, 'PieNotification - isMultiline - Should show leadingAction inline if isMultiline is false');
        });
    });
});
