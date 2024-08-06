import { type Page } from '@playwright/test';
import { buildUrl } from '/Users/joshua.ng/code/personal/pie/packages/components/pie-webc-testing/src/helpers/page-object/storybook-extensions';

export class BasePage {
    readonly page: Page;
    componentName: any;
    componentTag: any;
    path: string;
    args: any;

    constructor (page: Page, componentName: any, componentTag = 'data-test-id') {
        this.page = page;
        this.componentName = componentName;
        this.componentTag = componentTag;
        this.path = '';
        this.args = '';
    }

    async load (queries: any) {
        const pageUrl = buildUrl(this.componentName, this.composePath(queries), this.args);
        await this.open(pageUrl);
    }

    async open (url: string) {
        await this.page.goto(url, { waitUntil: 'networkidle' });
        return this;
    }

    composePath (queries: { [x: string]: any; }) {
        if (!queries) {
            return '';
        }

        const flattenQueries = (obj: any, prefix = ''): string[] => Object.keys(obj).flatMap((key) => {
            const value = obj[key];
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof value === 'object' && value !== null) {
                return flattenQueries(value, newKey);
            }
            return `${newKey}:${value}`;
        });

        return `&args=${flattenQueries(queries).join(';')}`;
    }

    async clickButtonWithText (buttonText: string) {
        await this.page.locator('pie-button', { hasText: buttonText }).click();
    }
}
