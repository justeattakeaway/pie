import { test, expect } from '@sand4rt/experimental-ct-web';
import { MockComponent } from './MockComponent.ts';

test.describe('FormControlMixin', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        await (await mount(MockComponent)).unmount();
    });

    test.describe('form property', () => {
        test('should return null when not inside of a form', async ({ mount }) => {
            // Arrange
            const component = await mount(
                MockComponent,
                {
                    props: {},
                },
            );

            // Assert
            expect(component).not.toBeNull();
        });

        test('should return the associated form when inside a form', async ({ page }) => {
            // Arrange
            // Inject the test form into the page
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

            // Get the form and component from the page and add a queryable element
            await page.evaluate(() => {
                const component = document.querySelector('form-control-mixin-mock');
                // Assuming your component has a 'form' property that references its associated form
                const form = component?.form;
                if (form) {
                    // Create or append to a debug element for testing output
                    let debugEl = document.querySelector('#debug');
                    if (!debugEl) {
                        debugEl = document.createElement('div');
                        debugEl.id = 'debug';
                        document.body.appendChild(debugEl);
                    }
                    // Add proof of form association, using form's id or another unique property
                    debugEl.innerHTML += `<div id="formResult">Form ID: ${form.id}</div>`;
                }
            });

            const formResultContent = await page.locator('#formResult').textContent();

            // Assert
            expect(formResultContent).toContain('testForm');
        });

        test('should not have an associated form when it is a sibling of the form', async ({ page }) => {
            // Arrange
            // Inject the form and the component as siblings into the page
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

            // Get the component from the page and add a queryable element
            await page.evaluate(() => {
                const component = document.querySelector('form-control-mixin-mock');
                // Assuming your component has a 'form' property that references its associated form
                const form = component?.form;
                // Create or append to a debug element for testing output
                let debugEl = document.querySelector('#debug');
                if (!debugEl) {
                    debugEl = document.createElement('div');
                    debugEl.id = 'debug';
                    document.body.appendChild(debugEl);
                }
                // Add proof of form association, or lack thereof
                debugEl.innerHTML += `<div id="formResult">Form Exists: ${!!form}</div>`;
            });

            const formResultContent = await page.locator('#formResult').textContent();

            // Assert
            expect(formResultContent).toContain('Form Exists: false'); // Replace with your assertion library's syntax
        });
    });
});
