import type { Locator } from '@playwright/test';

/**
 * Gets the value of the given style properties from the shadow element
 * @param element The custom element instance
 * @param selector The selector of the element in the shadow
 * @param props The style properties to get the values from
 * @returns The values of the given style properties
 */
export const getShadowElementStylePropValues = async (element:Locator, selector:string, props:Array<string>):Promise<Array<string>> => {
    const data = { selector, props };

    const evaluated = await element.evaluate((el, data) => {
        const { selector, props } = data;

        if (!el || !el.shadowRoot) {
            throw new Error('getShadowElementStylePropValues: evaluate didn\'t return an element');
        }

        const shadowEl = el.shadowRoot.querySelector(selector);

        if (!shadowEl) {
            throw new Error('getShadowElementStylePropValues: no shadow element was found');
        }

        const shadowElStyle = getComputedStyle(shadowEl);

        return props.map((prop) => shadowElStyle.getPropertyValue(prop).trim());
    }, data);

    return evaluated;
};
