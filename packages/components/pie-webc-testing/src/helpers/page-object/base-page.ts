import { type Page } from '@playwright/test';
import { buildUrl } from './storybook-extensions';

declare global {
    interface Window { __eventsArray: Array<string>; }
}

export class BasePage {
    readonly page: Page;
    componentName: string;
    componentTag: string;
    path: string;
    args: string;
    globals: string;

    constructor (page: Page, componentName: string, componentTag = 'data-test-id') {
        this.page = page;
        this.componentName = componentName;
        this.componentTag = componentTag;
        this.path = '';
        this.args = '';
        this.globals = '';
    }

    async load (queries: Record<string, unknown> = {}, globalSettings: Record<string, unknown> = {}) {
        const pageUrl = buildUrl(
            this.componentName,
            this.composePath(queries),
            this.args,
            this.composeGlobals(globalSettings),
        );
        await this.open(pageUrl);
    }

    async open (url: string) {
        await this.page.goto(url, { waitUntil: 'networkidle' });
        return this;
    }

    /**
     * Composes the path passed in from the load function.
     * If no query is passed in, returns the base component.
     * Takes in objects with key/value pairs and flatmaps the queries into string values.
     * Returns them as an interpolated string to be used in the URL.
     *
     * @param {string} queries The name of the attribute to retrieve.
     * @returns args passed into URL separated by ;
     *
     */
    composePath (queries: Record<string, unknown>) {
        if (!queries) {
            return '';
        }

        const flattenQueries = (obj: Record<string, unknown>, prefix = ''): string[] => Object.entries(obj).flatMap(([key, value]) => {
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof value === 'object' && value !== null) {
                return flattenQueries(value as Record<string, unknown>, newKey);
            }
            return `${newKey}:${value}`;
        });

        return `&args=${flattenQueries(queries).join(';')}`;
    }

    /**
     * Composes the global settings into a string to append to the URL.
     *
     * @param {Record<string, unknown>} globals Key-value pairs of global settings.
     * @returns Globals string to append to the URL.
     */
    composeGlobals (globals: Record<string, unknown>) {
        if (!globals) {
            return '';
        }

        const flattenGlobals = (obj: Record<string, unknown>): string[] => Object.entries(obj).map(([key, value]) => `${key}:${value}`);

        return `&globals=${flattenGlobals(globals).join(';')}`;
    }

    /**
     * Listens for the given event. When it is emitted, the name of the event is pushed to an array on the `window` object.
     */
    async listenForEvent (eventName: string) {
        await this.page.evaluate(() => {
            window.__eventsArray = [];
        });

        await this.page.evaluate((event) => {
            window.addEventListener(event, (e) => {
                window.__eventsArray.push(e.type);
            });
        }, eventName);
    }

    /**
     * Retrieves the emitted event from an events array
     *
     * @param {string} attribute The name of the attribute to retrieve.
     * @returns {Promise<string | null>} A Promise that resolves to the value of the specified attribute
     * on the received event array on the page evaluate, or `null` if the attribute does not exist.
     */
    async getCapturedEvents (): Promise<string[]> {
        return this.page.evaluate(() => window.__eventsArray);
    }

    async clickButtonWithText (buttonText: string) {
        await this.page.locator('pie-button', { hasText: buttonText }).click();
    }
}
