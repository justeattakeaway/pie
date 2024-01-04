import { test, expect } from '@sand4rt/experimental-ct-web';
import { MockComponent } from './MockComponent.ts';

test.describe('FormControlMixin', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        await (await mount(MockComponent)).unmount();
    });

    test.describe('form property', () => {
        test('should not have an associated form when not inside of a form', async ({ mount }) => {
            // Arrange
            const component = await mount(MockComponent);

            // Assert
            expect(component).not.toBeNull();
        });

        test('should return the associated form when inside a form', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm" action="/foo" method="POST">
                    <input type="text" id="username" name="username" required>
                    <input type="password" id="password" name="password" required>
                    <form-control-mixin-mock></form-control-mixin-mock>
                </form>
                `;
                document.body.innerHTML = formHTML;
            });

            const formId = await page.evaluate(() => {
                const component = document.querySelector('form-control-mixin-mock');
                const form = component?.form;

                return form?.id;
            });

            // Assert
            expect(formId).toContain('testForm');
        });

        test('should not have an associated form when it is a sibling of the form', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                <form id="siblingForm" action="/foo" method="POST">
                    <input type="text" id="username" name="username" required>
                    <input type="password" id="password" name="password" required>
                </form>
                <form-control-mixin-mock></form-control-mixin-mock>
                `;
                document.body.innerHTML = formHTML;
            });

            const isFormAssociated = await page.evaluate(() => {
                const component = document.querySelector('form-control-mixin-mock');
                const form = component?.form;

                return !!form;
            });

            // Assert
            expect(isFormAssociated).toBe(false);
        });
    });
});
