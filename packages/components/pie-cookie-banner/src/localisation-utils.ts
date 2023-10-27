import {
    TemplateResult,
} from 'lit';

import {
    type CookieBannerLocale,
    type CustomTagEnhancers,
} from './defs';

function logError (message:string):void {
    console.error(`[localisation-utils]: ${message}`);
}

function getObjectKeyValue (obj:object, path:string):string {
    // Implementation based on You-Dont-Need-Lodash-Underscore:
    // https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
    const travel = (regexp:RegExp) => String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce((acc:object, key:string) => {
            if (acc !== null && acc !== undefined) {
                // TODO: Provide proper TS solution for this
                // @ts-expect-error - Object is dynamic
                return acc[key];
            }
            return acc;
        }, obj);

    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);

    if (result === undefined || result === obj || typeof result !== 'string') return '';

    return result;
}

/**
 * Localises a plain text string
 * @param locale {CookieBannerLocale} locale data object
 * @param key {string} path to the key in the locale object
 * @returns {string} localised text
 */
export function localiseText (locale:CookieBannerLocale, key:string):string {
    if (!locale) throw new Error('"locale" parameter cannot be empty');
    if (!key) throw new Error('"key" parameter cannot be empty');

    const foundKeyValue = getObjectKeyValue(locale, key);

    if (foundKeyValue) return foundKeyValue;

    logError(`Couldn't find a value for the key "${key}", it will be used as fallback.`);

    // Returns the found key value or falls back to the passed key so it can be easily identified during development
    return key;
}

/**
 * Builds a regex that matches the custom tags
 * @param tags {Array<string>} array of custom tag names
 * @returns {RegExp} regex that matches the custom tags
 */
function buildTagSplitterRegex (tags:Array<string>):RegExp {
    const regexStrParts = tags.map((tag) => `(<${tag}.*>.*</${tag}>)`);
    const regexStr = regexStrParts.join('|');
    const regex = new RegExp(regexStr, 'igm');

    return regex;
}

/**
 * Replaces custom tags with the content returned by the enhancer functions
 * @param richText {string} rich text string
 * @param customTagEnhancers {CustomTagEnhancers} object containing the custom tag names and their respective enhancer functions
 * @returns {Array<string|TemplateResult>} array of strings and TemplateResults
 */
function enhanceCustomTags (richText:string, customTagEnhancers:CustomTagEnhancers):Array<string|TemplateResult> {
    // Find the names of tags that can be enhanced
    const customTags = Object.keys(customTagEnhancers);

    // If there are no entries in the customTagEnhancers object, return the original richText
    if (customTags.length === 0) return [richText];

    const customTagsRegex = buildTagSplitterRegex(customTags);

    return richText
        .split(customTagsRegex)
        .filter((item) => Boolean(item))
        .map((item) => {
            const isTag = item.match(customTagsRegex);

            if (!isTag) return item; // It's a plain string, return as is

            // Extract the custom tag name and its content
            const itemMatch = item.match(/<(.*)>(.*)<\/.*>/);

            if (!itemMatch) return item;

            const [, customTag, tagContent] = itemMatch;

            return [customTag, tagContent];
        })
        .map((item) => {
            // If it's a plain string, return it as is
            const isArray = Array.isArray(item);

            if (!isArray) return item;

            // If its an array, it's a custom tag, so we need to enhance it
            const [customTag, tagContent] = item;
            const enhancerFn = customTagEnhancers[customTag];
            const isEnhancerValid = enhancerFn || typeof enhancerFn === 'function';

            if (!isEnhancerValid) {
                logError(`Custom tag "${customTag}" does not have a matching enhancer function`);
                return tagContent;
            }

            return enhancerFn(tagContent);
        });
}

/**
 * Localises a rich text string by replacing custom tags with their respective enhancer functions content
 * @param locale {CookieBannerLocale} locale data object
 * @param key {string} path to the key in the locale object
 * @param customTagEnhancers {CustomTagEnhancers} object containing the custom tag names and their respective enhancer functions
 * @returns {Array<string|TemplateResult>} array of strings and TemplateResults
 */
export function localiseRichText (locale:CookieBannerLocale, key:string, customTagEnhancers:CustomTagEnhancers):Array<string|TemplateResult> {
    // TODO: This function performance can benefit from some form of caching
    if (!locale) throw new Error('"locale" parameter cannot be empty');
    if (!key) throw new Error('"key" parameter cannot be empty');
    if (!customTagEnhancers) throw new Error('"customTagEnhancers" parameter cannot be empty');

    const richText = localiseText(locale, key);

    return enhanceCustomTags(richText, customTagEnhancers);
}
