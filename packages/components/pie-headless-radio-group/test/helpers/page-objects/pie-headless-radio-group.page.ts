import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

export class HeadlessRadioGroupPage extends BasePage {
    readonly radioGroup: Locator;
    readonly radio1: Locator;
    readonly radio2: Locator;
    readonly radio3: Locator;
    readonly radio4: Locator;

    // Form Story
    readonly formRadioA: Locator;
    readonly formRadioB: Locator;
    readonly formRadioC: Locator;
    readonly formRadioD: Locator;
    readonly formSubmitButton: Locator;
    readonly formResetButton: Locator;
    readonly formOutput: Locator;

    // Dynamic Story
    readonly dynamicGroup: Locator;
    readonly radioToDisable: Locator;
    readonly radioToRemove: Locator;
    readonly newDynamicRadio: Locator;
    readonly btnAdd: Locator;
    readonly btnRemove: Locator;
    readonly btnDisable: Locator;

    // This is the base ID for all stories in the test file.
    // It is derived from the `title` in the *.test.stories.ts file.
    private readonly storybookId = 'headless-radio-group';

    constructor (page: Page) {
        // The second argument to super() is a default component name.
        // Our custom `load` method will overwrite this with the full story ID.
        super(page, 'pie-headless-radio-group');

        this.radioGroup = page.locator('pie-headless-radio-group');
        this.radio1 = page.locator('[data-test-id="radio-1"]');
        this.radio2 = page.locator('[data-test-id="radio-2"]');
        this.radio3 = page.locator('[data-test-id="radio-3"]');
        this.radio4 = page.locator('[data-test-id="radio-4"]');

        // Form Story
        this.formRadioA = page.locator('[data-test-id="form-radio-a"]');
        this.formRadioB = page.locator('[data-test-id="form-radio-b"]');
        this.formRadioC = page.locator('[data-test-id="form-radio-c"]');
        this.formRadioD = page.locator('[data-test-id="form-radio-d"]');
        this.formSubmitButton = page.locator('button[type="submit"]');
        this.formResetButton = page.locator('button[type="reset"]');
        this.formOutput = page.locator('#form-output');

        // Dynamic Story
        this.dynamicGroup = page.locator('[data-test-id="dynamic-group-root"]');
        this.radioToDisable = page.locator('[data-test-id="radio-to-disable"]');
        this.radioToRemove = page.locator('[data-test-id="radio-to-remove"]');
        this.newDynamicRadio = page.locator('[data-test-id="radio-new"]');
        this.btnAdd = page.locator('[data-test-id="btn-add"]');
        this.btnRemove = page.locator('[data-test-id="btn-remove"]');
        this.btnDisable = page.locator('[data-test-id="btn-disable"]');
    }

    /**
     * Navigates to a specific story for the component.
     * This method constructs the full story ID and then uses the `super.load`
     * method from BasePage to build the final URL and navigate to it.
     *
     * @param storyName - The name of the story to load (e.g., 'ltr', 'rtl').
     * @param queries - Optional Storybook args to pass in the URL.
     * @param globalSettings - Optional Storybook globals to pass in the URL.
     */
    async loadStory (storyName: string, queries: Record<string, unknown> = {}, globalSettings: Record<string, unknown> = {}): Promise<void> {
        // The componentName from BasePage is used by super.load() to build the URL.
        // We need to set it to the full Storybook ID for the specific story.
        this.componentName = `${this.storybookId}--${storyName.toLowerCase()}`;

        // Now we can call the parent's load method which will handle args and globals.
        await super.load(queries, globalSettings);
    }
}

