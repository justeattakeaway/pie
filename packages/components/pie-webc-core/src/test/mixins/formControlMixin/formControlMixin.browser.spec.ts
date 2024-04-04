import { test, expect } from '@sand4rt/experimental-ct-web';
import { MockComponent } from './MockComponent.ts';

test.describe('FormControlMixin', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(MockComponent);
        await component.unmount();
    });

    test.describe('form property', () => {
        test.describe('when no form exists', () => {
            test('should not have an associated form', async ({ page, mount }) => {
                // Arrange
                await mount(MockComponent);

                const isFormAssociated = await page.evaluate(() => {
                    const component = document.querySelector('form-control-mixin-mock');
                    const form = component?.form;

                    return !!form;
                });

                // Assert
                expect(isFormAssociated).toBe(false);
            });

            test('should not instantiate a PieFormManager instance', async ({ mount, page }) => {
                // Arrange
                await mount(MockComponent);

                const formManagerExists = await page.evaluate(() => !!window.pieFormManager);

                // Assert
                expect(formManagerExists).toBe(false);
            });
        });

        test.describe('when inside of a form', () => {
            test('should return the associated form', async ({ page }) => {
                // Arrange
                await page.setContent(`
                    <form id="testForm" action="/foo" method="POST">
                        <input type="text" id="username" name="username" required>
                        <input type="password" id="password" name="password" required>
                        <form-control-mixin-mock></form-control-mixin-mock>
                    </form>
                `);

                const formId = await page.evaluate(() => {
                    const component = document.querySelector('form-control-mixin-mock');
                    const form = component?.form;

                    return form?.id;
                });

                // Assert
                expect(formId).toContain('testForm');
            });

            test.describe('PieFormManager integration', () => {
                test('should instantiate a PieFormManager instance if one does not exist and attach it to the window', async ({ mount, page }) => {
                    // Arrange
                    await page.setContent(`
                        <form id="testForm" action="/foo" method="POST">
                            <form-control-mixin-mock></form-control-mixin-mock>
                        </form>
                    `);

                    const formManagerExists = await page.evaluate(() => !!window.pieFormManager);

                    // Assert
                    expect(formManagerExists).toBe(true);
                });

                test('should add the associated form to the PieFormManager instance', async ({ page }) => {
                    // Arrange
                    await page.setContent(`
                        <form id="testForm" action="/foo" method="POST">
                            <form-control-mixin-mock></form-control-mixin-mock>
                        </form>
                    `);

                    const formExists = await page.evaluate(() => {
                        const form = document.getElementById('testForm') as HTMLFormElement;
                        const formManager = window.pieFormManager;

                        return !!formManager?.getForm(form);
                    });

                    // Assert
                    expect(formExists).toBe(true);
                });

                test('should remove the associated form from the PieFormManager instance when disconnected and no pie-input instances are in the form', async ({ page }) => {
                    // Arrange
                    await page.setContent(`
                        <form id="testForm" action="/foo" method="POST">
                            <form-control-mixin-mock></form-control-mixin-mock>
                        </form>
                    `);

                    await page.evaluate(() => {
                        const component = document.querySelector('form-control-mixin-mock');
                        component?.remove();
                    });

                    const formExists = await page.evaluate(() => {
                        const form = document.getElementById('testForm') as HTMLFormElement;
                        const formManager = window.pieFormManager;

                        return !!formManager?.getForm(form);
                    });

                    // Assert
                    expect(formExists).toBe(false);
                });

                test('should not remove the associated form from the PieFormManager instance when disconnected and other form controls remain inside the form', async ({ page }) => {
                    // Arrange
                    // We don't actually need pie-input to be defined here, as the tags will still appear in the DOM which the form manager queries.
                    // Once we add more form control components, we can add them here.
                    await page.setContent(`
                        <form id="testForm" action="/foo" method="POST">
                            <pie-input></pie-input>
                            <form-control-mixin-mock id="remove"></form-control-mixin-mock>
                            <pie-input></pie-input>
                            <pie-input></pie-input>
                        </form>
                    `);

                    const formExists = await page.evaluate(() => {
                        const component = document.querySelector('#remove');
                        component?.remove();

                        const form = document.getElementById('testForm') as HTMLFormElement;
                        const formManager = window.pieFormManager;

                        return !!formManager?.getForm(form);
                    });

                    // Assert
                    expect(formExists).toBe(true);
                });
            });
        });

        test.describe('when not inside of an existing form', () => {
            test('should not have an associated form', async ({ page }) => {
                // Arrange
                await page.setContent(`
                    <form id="siblingForm" action="/foo" method="POST">
                        <input type="text" id="username" name="username" required>
                        <input type="password" id="password" name="password" required>
                    </form>
                    <form-control-mixin-mock></form-control-mixin-mock>
                `);

                const isFormAssociated = await page.evaluate(() => {
                    const component = document.querySelector('form-control-mixin-mock');
                    const form = component?.form;

                    return !!form;
                });

                // Assert
                expect(isFormAssociated).toBe(false);
            });

            test('should not instantiate a PieFormManager instance', async ({ mount, page }) => {
                // Arrange
                await page.setContent(`
                    <form id="siblingForm" action="/foo" method="POST">
                        <input type="text" id="username" name="username" required>
                        <input type="password" id="password" name="password" required>
                    </form>
                    <form-control-mixin-mock></form-control-mixin-mock>
                `);

                const formManagerExists = await page.evaluate(() => !!window.pieFormManager);

                // Assert
                expect(formManagerExists).toBe(false);
            });
        });
    });
});
