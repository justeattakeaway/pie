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

    constructor (page: Page, componentName: string, componentTag = 'data-test-id') {
        this.page = page;
        this.componentName = componentName;
        this.componentTag = componentTag;
        this.path = '';
        this.args = '';
    }

    async load (queries: Record<string, unknown> = {}) {
        const pageUrl = buildUrl(this.componentName, this.composePath(queries), this.args);
        await this.open(pageUrl);
    }

    async open (url: string) {
        await this.page.goto(url, { waitUntil: 'networkidle' });
        return this;
    }

    composePath (queries: Record<string, unknown>) {
        if (!queries) {
            return '';
        }

        const flattenQueries = (obj: Record<string, unknown>, prefix = ''): string[] => Object.keys(obj).flatMap((key) => {
            const value = obj[key];
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof value === 'object' && value !== null) {
                return flattenQueries(value as Record<string, unknown>, newKey);
            }
            return `${newKey}:${value}`;
        });

        return `&args=${flattenQueries(queries).join(';')}`;
    }

    /**
     * Emits an on push event that has been passed through from the test
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
     *                                   on the recieved event array on the page evaluate, or `null` if the attribute does not exist.
     */
    async getCapturedEvents (): Promise<string[]> {
        return this.page.evaluate(() => window.__eventsArray);
    }

    async clickButtonWithText (buttonText: string) {
        await this.page.locator('pie-button', { hasText: buttonText }).click();
    }
}
