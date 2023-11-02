import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton, ButtonProps } from '@/index';

const props: Partial<ButtonProps> = {
    size: 'large',
    variant: 'primary',
};

test('should correctly work with native click events', async ({ mount }) => {
    const messages: string[] = [];
    const expectedEventMessage = 'Native event dispatched';
    const component = await mount(
        PieButton,
        {
            props,
            slots: {
                default: 'Click me!',
            },
            on: {
                click: () => {
                    messages.push(expectedEventMessage);
                },
            },
        },
    );

    await component.click();

    expect(messages).toEqual([expectedEventMessage]);
});

test.describe('Form Actions', () => {
    test.describe('Submit', () => {
        test('should correctly submit an HTML form when type is `submit`', async ({ page }) => {
            // Arrange
            // Inject the test form into the page
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm" action="/foo" method="POST">
                    <input type="text" id="username" name="username" required>
                    <input type="password" id="password" name="password" required>
                    <pie-button id="submitButton" type="submit">Submit</pie-button>
                </form>
            `;
                document.body.innerHTML = formHTML;
            });

            // Set up the form submission listener
            await page.evaluate(() => {
                const form = document.querySelector('#testForm') as HTMLFormElement;

                form.addEventListener('submit', (e) => {
                    e.preventDefault(); // Prevent the actual submission - we only care about detecting the submit

                    // Append a hidden span element to the body
                    const span = document.createElement('span');
                    span.id = 'formSubmittedFlag';
                    span.style.display = 'none';
                    document.body.appendChild(span);
                });
            });

            // Fill out the form
            await page.fill('#username', 'testUser');
            await page.fill('#password', 'testPassword');

            // Act
            await page.click('#submitButton');

            // Assert
            // Check if the hidden span was appended, indicating the form was submitted
            const wasFormSubmitted = Boolean(await page.$('#formSubmittedFlag'));

            expect(wasFormSubmitted).toBe(true);
        });

        test('should trigger native HTML form validation for required fields and submit after correcting when type is `submit`', async ({ page }) => {
            // Arrange
            // Inject the test form into the page
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm" action="/foo" method="POST">
                    <input type="text" id="username" name="username" required>
                    <input type="password" id="password" name="password" required>
                    <pie-button id="submitButton" type="submit">Submit</pie-button>
                </form>
            `;
                document.body.innerHTML = formHTML;
            });

            // Set up the form submission listener
            await page.evaluate(() => {
                const form = document.querySelector('#testForm') as HTMLFormElement;

                form.addEventListener('submit', (e) => {
                    e.preventDefault(); // Prevent the actual submission - we only care about detecting the submit

                    // Add a span to indicate the form was submitted
                    const span = document.createElement('span');
                    span.id = 'formSubmittedFlag';
                    document.body.appendChild(span);
                });
            });

            // Act & Assert
            // Attempt to click the submit button without filling out required fields
            await page.click('#submitButton');

            // Check if the form was not submitted (indicated by the absence of the span)
            let formSubmittedFlagExists = Boolean(await page.$('#formSubmittedFlag'));
            expect(formSubmittedFlagExists).toBe(false);

            // Fill out the form
            await page.fill('#username', 'testUser');
            await page.fill('#password', 'testPassword');

            // Attempt to submit the form again
            await page.click('pie-button[type="submit"]');

            // Check if the form was submitted this time (indicated by the presence of the span)
            formSubmittedFlagExists = Boolean(await page.$('#formSubmittedFlag'));
            expect(formSubmittedFlagExists).toBe(true);
        });

        test('should not submit the form when button is disabled and type is `submit`', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm" action="/foo" method="POST">
                    <input type="text" id="username" name="username">
                    <input type="password" id="password" name="password">
                    <pie-button id="submitButton" type="submit" disabled>Submit</pie-button>
                </form>
            `;
                document.body.innerHTML = formHTML;
            });

            // Set up the form submission listener
            await page.evaluate(() => {
                const form = document.querySelector('#testForm') as HTMLFormElement;

                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const span = document.createElement('span');
                    span.id = 'formSubmittedFlag';
                    document.body.appendChild(span);
                });
            });

            // Act
            await page.click('#submitButton');

            // Assert
            const formSubmittedFlagExists = Boolean(await page.$('#formSubmittedFlag'));
            expect(formSubmittedFlagExists).toBe(false); // Form should not submit
        });

        test('should not submit the form when button has isLoading set and type is `submit`', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm" action="/foo" method="POST">
                    <input type="text" id="username" name="username">
                    <input type="password" id="password" name="password">
                    <pie-button id="submitButton" type="submit" isLoading>Submit</pie-button>
                </form>
            `;
                document.body.innerHTML = formHTML;
            });

            // Set up the form submission listener
            await page.evaluate(() => {
                const form = document.querySelector('#testForm') as HTMLFormElement;

                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const span = document.createElement('span');
                    span.id = 'formSubmittedFlag';
                    document.body.appendChild(span);
                });
            });

            // Act
            await page.click('#submitButton');

            // Assert
            const formSubmittedFlagExists = Boolean(await page.$('#formSubmittedFlag'));
            expect(formSubmittedFlagExists).toBe(false); // Form should not submit
        });

        test('should include pie-button\'s name and value in the form submission data when it triggers submission', async ({ page }) => {
            // Arrange
            // Inject the test form into the page with pie-button having name and value attributes
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm" action="/submit-endpoint" method="POST">
                    <input type="text" name="username">
                    <pie-button id="testButton" type="submit" name="submitButton" value="submitValue">Submit</pie-button>
                </form>
            `;
                document.body.innerHTML = formHTML;
            });

            // Intercept form submissions
            const [request] = await Promise.all([
                page.waitForRequest('/submit-endpoint'),
                page.fill('input[name="username"]', 'testUser'),
                page.click('#testButton'),
            ]);

            const formData = request.postData();

            // Assert
            expect(formData).toContain('submitButton=submitValue');
        });

        test('should respect all form-related attributes on the pie-button', async ({ page }) => {
            // Arrange
            // Inject the test form into the page with pie-button having multiple form attributes
            await page.evaluate(() => {
                const formHTML = `
                    <form id="testForm" action="/default-endpoint" method="GET">
                        <input type="text" name="username" required>
                        <pie-button id="testButton"
                                    type="submit"
                                    name="submitButton"
                                    value="submitValue"
                                    formaction="/custom-endpoint"
                                    formenctype="multipart/form-data"
                                    formmethod="POST"
                                    formnovalidate
                                    formtarget="_self">Submit</pie-button>
                    </form>
                `;
                document.body.innerHTML = formHTML;
            });

            // Act
            // Intercept form submissions
            const [request] = await Promise.all([
                page.waitForRequest('/custom-endpoint'),
                page.fill('input[name="username"]', 'testUser'),
                page.click('#testButton'),
            ]);

            const postData = request.postData();
            const method = request.method();
            const headers = request.headers();

            // Assert
            expect(postData).toBeTruthy();
            const submitButtonDisposition = 'Content-Disposition: form-data; name="submitButton"';
            const submitButtonValuePosition = (postData as string).indexOf(submitButtonDisposition) + submitButtonDisposition.length;
            expect((postData as string).includes(submitButtonDisposition)).toBeTruthy();
            expect((postData as string).substring(submitButtonValuePosition)).toContain('submitValue');
            expect(headers['content-type']).toMatch(/^multipart\/form-data;/);
            expect(method).toBe('POST');
        });
    });

    test.describe('Reset', () => {
        test('should reset the form by clicking the reset button when type is `reset`', async ({ page }) => {
            // Arrange
            // Inject the test form into the page with a reset button
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm">
                    <input type="text" data-testid="username" id="username" name="username" required>
                    <input type="password" data-testid="password" id="password" name="password" required>
                    <pie-button type="reset" id="resetButton">Reset</pie-button>
                    <pie-button type="submit">Submit</pie-button>
                </form>
            `;
                document.body.innerHTML = formHTML;
            });

            // Fill out the form
            const testUsername = 'testUser';
            const testPassword = 'testPassword';
            await page.fill('#username', testUsername);
            await page.fill('#password', testPassword);

            // Act
            await page.click('#resetButton');

            // Assert
            // Check if the form fields have been reset
            const usernameValue = await page.getByTestId('username').inputValue();
            const passwordValue = await page.getByTestId('password').inputValue();

            expect(usernameValue).toBe('');
            expect(passwordValue).toBe('');
        });

        test('should not reset the form when button is disabled and type is `reset`', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm">
                    <input type="text" id="username" name="username" value="initialValue">
                    <pie-button id="resetButton" type="reset" disabled>Reset</pie-button>
                </form>
            `;
                document.body.innerHTML = formHTML;
            });

            // Change the form input value
            await page.fill('#username', 'changedValue');

            // Act
            await page.click('#resetButton');

            // Assert
            const inputValue = await page.inputValue('#username');
            expect(inputValue).toBe('changedValue'); // Input value should remain as 'changedValue' and not be reset to 'initialValue'
        });

        test('should not reset the form when button has `isLoading` set and type is `reset`', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm">
                    <input type="text" id="username" name="username" value="initialValue">
                    <pie-button id="resetButton" type="reset" isLoading>Reset</pie-button>
                </form>
            `;
                document.body.innerHTML = formHTML;
            });

            // Change the form input value
            await page.fill('#username', 'changedValue');

            // Act
            await page.click('#resetButton');

            // Assert
            const inputValue = await page.inputValue('#username');
            expect(inputValue).toBe('changedValue'); // Input value should remain as 'changedValue' and not be reset to 'initialValue'
        });
    });

    test.describe('Association', () => {
        test('should correctly associate with its containing form and not with other forms', async ({ page }) => {
            // Arrange
            // Inject two forms into the page
            await page.evaluate(() => {
                const formsHTML = `
                <form id="correctForm">
                    <pie-button id="testButton" type="submit">Submit</pie-button>
                </form>
                <form id="wrongForm"></form>
            `;
                document.body.innerHTML = formsHTML;
            });

            // Act
            const associatedFormId = await page.evaluate(() => {
                const button = document.querySelector('#testButton') as HTMLButtonElement;
                return button.form ? button.form.id : null;
            });

            // Assert
            expect(associatedFormId).toBe('correctForm');
        });
    });
});
