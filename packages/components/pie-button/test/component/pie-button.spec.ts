import { getShadowElementStylePropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/get-shadow-element-style-prop-values.ts';
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton, type ButtonProps } from '../../src/index.ts';

type SizeResponsiveSize = {
    sizeName: ButtonProps['size'];
    responsiveSize: string;
};

const sizes: Array<SizeResponsiveSize> = [
    { sizeName: 'xsmall', responsiveSize: '--btn-height--small' },
    { sizeName: 'small-expressive', responsiveSize: '--btn-height--medium' },
    { sizeName: 'small-productive', responsiveSize: '--btn-height--medium' },
    { sizeName: 'medium', responsiveSize: '--btn-height--large' },
    { sizeName: 'large', responsiveSize: '--btn-height--large' },
];

test('should correctly work with native click events', async ({ mount }) => {
    const messages: string[] = [];
    const expectedEventMessage = 'Native event dispatched';
    const component = await mount(
        PieButton,
        {
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
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieButton);
        await component.unmount();
    });

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

        test('should submit the form when pressing Enter with pie-button type `submit`', async ({ page }) => {
            // Arrange
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
                    e.preventDefault();

                    const span = document.createElement('span');
                    span.id = 'formSubmittedFlag';
                    document.body.appendChild(span);
                });
            });

            // Fill out the form
            await page.fill('#username', 'testUser');
            await page.fill('#password', 'testPassword');

            // Act
            // Press Enter in the password field
            await page.focus('#password');
            await page.press('#password', 'Enter');

            // Assert
            const formSubmittedFlagExists = Boolean(await page.$('#formSubmittedFlag'));
            expect(formSubmittedFlagExists).toBe(true);
        });

        test('should NOT submit the form when pressing Enter with pie-button type other than `submit`', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm" action="/foo" method="POST">
                    <input type="text" id="username" name="username" required>
                    <input type="password" id="password" name="password" required>
                    <pie-button id="resetButton" type="reset">Reset</pie-button>
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

            // Fill out the form
            await page.fill('#username', 'testUser');
            await page.fill('#password', 'testPassword');

            // Act
            // Press Enter in the password field
            await page.focus('#password');
            await page.press('#password', 'Enter');

            // Assert
            const formSubmittedFlagExists = Boolean(await page.$('#formSubmittedFlag'));
            expect(formSubmittedFlagExists).toBe(false);
        });

        test('should NOT submit the form when pressing Enter on a pie-button that is not type of submit', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                    <form id="testForm" action="/foo" method="POST">
                        <input type="text" id="username" name="username" required>
                        <input type="password" id="password" name="password" required>
                        <pie-button type="submit">Submit</pie-button>
                        <pie-button id="resetPieButton" type="reset">Reset</pie-button>
                    </form>
                `;
                document.body.innerHTML = formHTML;

                const form = document.querySelector('#testForm') as HTMLFormElement;

                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const span = document.createElement('span');
                    span.id = 'formSubmittedFlag';
                    document.body.appendChild(span);
                });
            });

            // Fill out the form
            await page.fill('#username', 'testUser');
            await page.fill('#password', 'testPassword');

            // Act
            // Press Tab until we focus the reset button
            await page.keyboard.press('Tab');
            await page.keyboard.press('Tab');

            // Press Enter on the pie-button with type reset
            await page.press('#resetPieButton', 'Enter');

            // Assert
            const formSubmittedFlagExists = Boolean(await page.$('#formSubmittedFlag'));
            expect(formSubmittedFlagExists).toBe(false);
        });

        test('should NOT submit the form when pressing Enter on a native non-submit button', async ({ page }) => {
            // Arrange
            await page.evaluate(() => {
                const formHTML = `
                    <form id="testForm" action="/foo" method="POST">
                        <input type="text" id="username" name="username" required>
                        <input type="password" id="password" name="password" required>
                        <pie-button type="submit">Submit</pie-button>
                        <button id="resetNativeButton" type="reset">Reset</button>
                    </form>
                `;
                document.body.innerHTML = formHTML;

                const form = document.querySelector('#testForm') as HTMLFormElement;

                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const span = document.createElement('span');
                    span.id = 'formSubmittedFlag';
                    document.body.appendChild(span);
                });
            });

            // Fill out the form
            await page.fill('#username', 'testUser');
            await page.fill('#password', 'testPassword');

            // Act
            // Press Enter on the native button with type reset
            await page.focus('#resetNativeButton');
            await page.press('#resetNativeButton', 'Enter');

            // Assert
            const formSubmittedFlagExists = Boolean(await page.$('#formSubmittedFlag'));
            expect(formSubmittedFlagExists).toBe(false);
        });
    });

    test.describe('Reset', () => {
        test('should reset the form by clicking the reset button when type is `reset`', async ({ page }) => {
            // Arrange
            // Inject the test form into the page with a reset button
            await page.evaluate(() => {
                const formHTML = `
                <form id="testForm">
                    <input type="text" data-test-id="username" id="username" name="username" required>
                    <input type="password" data-test-id="password" id="password" name="password" required>
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

test.describe('props', () => {
    test.describe('isResponsive', () => {
        test.describe('when not set', () => {
            test('the button should not have the attribute', async ({ mount }) => {
                const component = await mount(
                    PieButton,
                    {
                        slots: {
                            default: 'Click me!',
                        },
                    },
                );

                await expect(component.locator('button'))
                    .not.toHaveClass(/o-btn--responsive/);
            });
        });
        test.describe('when set to true', () => {
            test('the button should have the attribute', async ({ mount }) => {
                const props: ButtonProps = {
                    size: 'xsmall',
                    isResponsive: true,
                };

                const component = await mount(
                    PieButton,
                    {
                        props,
                        slots: {
                            default: 'Click me!',
                        },
                    },
                );

                await expect(component.locator('button'))
                    .toHaveClass(/o-btn--responsive/);
            });

            sizes.forEach(({ sizeName, responsiveSize }) => {
                test(`a "${sizeName}" size button height should be equivalent to "${responsiveSize}"`, async ({ mount }) => {
                    const props: ButtonProps = {
                        size: sizeName,
                        isResponsive: true,
                    };

                    const component = await mount(PieButton, {
                        props,
                        slots: {
                            default: 'Click me!',
                        },
                    });

                    const [currentHeight, expectedHeight] = await getShadowElementStylePropValues(component, 'button', ['--btn-height', responsiveSize]);

                    await expect(currentHeight).toBe(expectedHeight);
                });
            });
        });
    });

    test.describe('responsiveSize', () => {
        test.describe('when not set', () => {
            test('the button should not have the attribute', async ({ mount }) => {
                const component = await mount(
                    PieButton,
                    {
                        slots: {
                            default: 'Click me!',
                        },
                    },
                );

                await expect(component.locator('button'))
                    .not.toHaveClass([/o-btn--productive/, /o-btn--expressive/]);
            });
        });

        test.describe('when "isResponsive" is true', () => {
            test.describe('when "responsiveSize" is "expressive"', () => {
                test('the button should have the expected attribute', async ({ mount }) => {
                    const props: ButtonProps = {
                        size: 'xsmall',
                        isResponsive: true,
                        responsiveSize: 'expressive',
                    };

                    const component = await mount(
                        PieButton,
                        {
                            props,
                            slots: {
                                default: 'Click me!',
                            },
                        },
                    );

                    await expect(component.locator('button'))
                        .toHaveClass([/o-btn--expressive/]);
                });
            });
        });

        test.describe('when "responsiveSize" is "productive"', () => {
            test('the button should have the expected attribute', async ({ mount }) => {
                const props: ButtonProps = {
                    size: 'xsmall',
                    isResponsive: true,
                    responsiveSize: 'productive',
                };

                const component = await mount(
                    PieButton,
                    {
                        props,
                        slots: {
                            default: 'Click me!',
                        },
                    },
                );

                await expect(component.locator('button'))
                    .toHaveClass(/o-btn--productive/);
            });
        });
    });

    test.describe('tag', () => {
        test.describe('when set to "button"', () => {
            test('should render a button element', async ({ mount }) => {
                // Arrange
                const props: ButtonProps = {
                    tag: 'button',
                };

                // Act
                const component = await mount(PieButton, {
                    props,
                    slots: {
                        default: 'Click me!',
                    },
                });

                const button = component.locator('button');

                // Assert
                expect(button).toBeVisible();
            });

            test('should not render anchor-specific attributes', async ({ mount }) => {
                // Arrange
                const props: ButtonProps = {
                    tag: 'button',
                    // Anchor-specific props
                    href: '/test',
                    rel: 'noopener noreferrer',
                    target: '_blank',
                };

                // Act
                const component = await mount(PieButton, {
                    props,
                    slots: {
                        default: 'Click me!',
                    },
                });

                const button = component.locator('button');

                const href = await button.getAttribute('href');
                const rel = await button.getAttribute('rel');
                const target = await button.getAttribute('target');

                // Assert
                expect.soft(rel).toBeNull();
                expect.soft(target).toBeNull();
                expect(href).toBeNull();
            });
        });

        test.describe('when set to "a"', () => {
            test('should render an anchor element', async ({ mount }) => {
                // Arrange
                const props: ButtonProps = {
                    tag: 'a',
                };

                // Act
                const component = await mount(PieButton, {
                    props,
                    slots: {
                        default: 'Click me!',
                    },
                });

                const anchor = component.locator('a');

                // Assert
                expect(anchor).toBeVisible();
            });

            test('should not render button-specific attributes', async ({ mount }) => {
                // Arrange
                const props: ButtonProps = {
                    tag: 'a',
                    // Button-specific props
                    disabled: true,
                    isLoading: true,
                    type: 'submit',
                };

                // Act
                const component = await mount(PieButton, {
                    props,
                    slots: {
                        default: 'Click me!',
                    },
                });

                const anchor = component.locator('a');

                // Assert
                const disabled = await anchor.getAttribute('disabled');
                const type = await anchor.getAttribute('type');
                const spinner = component.locator('pie-spinner');

                expect.soft(anchor).not.toHaveClass(/is-loading/);
                expect.soft(disabled).toBeNull();
                expect.soft(type).toBeNull();
                expect(spinner).not.toBeVisible();
            });
        });
    });
});
