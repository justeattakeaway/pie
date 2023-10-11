import { test, expect } from '@sand4rt/experimental-ct-web';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

import path from 'path';
import { PieButton, ButtonProps } from '@/index';

const props: Partial<ButtonProps> = {
    size: 'large',
    variant: 'primary',
};

// Mount then unmount any components that are used inside of tests that may not be directly mounted using playwright so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
});

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

test('should correctly submit an HTML form when type is `submit`', async ({ mount, page }) => {
    // Arrange
    // Inject the test form into the page
    await page.evaluate(() => {
        const formHTML = `
        <form id="testForm" action="/foo" method="POST">
            <input type="text" id="username" name="username" required>
            <input type="password" id="password" name="password" required>
            <pie-button type="submit">Submit</pie-button>
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
    await page.click('pie-button[type="submit"]');

    // Assert
    // Check if the hidden span was appended, indicating the form was submitted
    const wasFormSubmitted = Boolean(await page.$('#formSubmittedFlag'));

    expect(wasFormSubmitted).toBe(true);
});

test('should trigger native HTML form validation for required fields and submit after correcting', async ({ page }) => {
    // Arrange
    // Inject the test form into the page
    await page.evaluate(() => {
        const formHTML = `
        <form id="testForm" action="/foo" method="POST">
            <input type="text" id="username" name="username" required>
            <input type="password" id="password" name="password" required>
            <pie-button type="submit">Submit</pie-button>
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
    await page.click('pie-button[type="submit"]');

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

