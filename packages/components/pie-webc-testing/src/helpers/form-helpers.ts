import type { Page } from '@playwright/test';

/**
 * Sets up form data extraction for testing form submissions. This function expects a form element
 * and a designated output element to exist on the page. It intercepts the form submit event,
 * prevents the actual submission, and serializes the form data into JSON, which is then placed in
 * the output element.
 *
 * Expected HTML structure on the page:
 * <form id="form-selector" action="/foo" method="POST">
 *     <pie-text-input type="text" name="username"></pie-text-input>
 *     <!-- other form elements -->
 *     <button type="submit">Submit</button>
 * </form>
 * <div id="output-selector"></div>
 *
 * @param {Page} page - The Playwright Page object representing the browser page.
 * @param {string} formSelector - The CSS selector for the form element.
 * @param {string} outputSelector - The CSS selector for the output element where serialized form data will be set.
 * @returns {Promise<void>} A promise that resolves when the setup is complete.
 */
export const setupFormDataExtraction = async (page:Page, formSelector:string, outputSelector:string): Promise<void> => {
    await page.evaluate((config) => {
        const form = document.querySelector(config.formSelector) as HTMLFormElement;
        const output = document.querySelector(config.outputSelector) as HTMLDivElement;

        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the actual submission

            const formData = new FormData(form);
            const formDataObj: { [key: string]: FormDataEntryValue } = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });

            // Serialize and set form data as JSON text in the output element
            output.innerText = JSON.stringify(formDataObj);
        });
    }, { formSelector, outputSelector });
};

/**
 * Retrieves serialized form data from a specified output element and parses it into an object.
 * This function is typically used in conjunction with `setupFormDataExtraction` to test form submissions.
 *
 * @param {Page} page - The Playwright Page object representing the browser page.
 * @param {string} outputSelector - The CSS selector for the output element from which to retrieve the serialized form data.
 * @returns {Promise<{ [key: string]: FormDataEntryValue }>} A promise that resolves to an object representing the form data.
 * Each key-value pair in the object corresponds to a form field and its value.
 */
export const getFormDataObject = async (page:Page, outputSelector:string): Promise<{ [key: string]: FormDataEntryValue }> => {
    const formDataJson = await page.$eval(outputSelector, (el) => (el as HTMLDivElement).innerText);

    return JSON.parse(formDataJson || '{}');
};
