import { type TemplateResult } from 'lit';

import { type CookieBannerLocale, type CustomTagEnhancers } from './defs';

function logError (message:string):void {
    console.error(`[localisation-utils]: ${message}`);
}

/**
 * Retrieves a value from a nested object based on a given path string.
 *
 * @param {Record<string, any>} obj - The object to traverse.
 * @param {string} path - The path string to the desired value within the object. The path can be comma-separated or dot-separated.
 * @returns {string} - The value found at the specified path within the object. Returns an empty string if the path is invalid or the value is not a string.
 *
 * @example
 *
 * const obj = {
 *   a: {
 *     b: {
 *       c: "hello"
 *     }
 *   }
 * };
 *
 * getObjectKeyValue(obj, "a,b,c");  // Returns "hello"
 * getObjectKeyValue(obj, "a.b.c");  // Returns "hello"
 * getObjectKeyValue(obj, "a,d,c");  // Returns ""
 */
function getObjectKeyValue (obj:object, path:string):string {
    // Implementation based on You-Dont-Need-Lodash-Underscore:
    // https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
    const travel = (regexp:RegExp) => String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce((acc:{[key: string]: any}, key:string) => {
            if (acc !== null && acc !== undefined && typeof acc === 'object') {
                return acc[key];
            }
            return acc;
        }, obj);

    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);

    if (typeof result !== 'string') return '';

    return result;
}

/**
 * Localises a plain text string
 * If the key is not found, it will be used as fallback
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
 * Sanitises an HTML string to allow only safe <a> tags, and normalises anchor
 * attributes to respect the component's link-target behaviour.
 *
 * - Strips all non-<a> elements (keeping their text content).
 * - Removes unsafe href protocols (javascript:, data:, vbscript:).
 * - Removes non-allowlisted attributes (only href, rel, target survive).
 * - Sets target to linkTarget (overrides any existing target).
 * - Ensures rel contains "noopener noreferrer" when target="_blank"
 *   (prevents reverse-tabnabbing).
 */
export function sanitiseDescriptionHtml (input: string, linkTarget = '_blank'): string {
    const SAFE_ATTRS = new Set(['href', 'rel', 'target']);
    const ALLOWED_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);
    const PROTOCOL_RE = /^([a-z0-9+.-]+):/i;
    const normalisedLinkTarget = linkTarget === '_self' ? '_self' : '_blank';

    const normaliseHrefForProtocolCheck = (href: string) => Array.from(href)
        .filter((char) => {
            const charCode = char.charCodeAt(0);
            return char.trim() !== '' && charCode > 31 && charCode !== 127;
        })
        .join('');

    const ensureRelForTarget = (existingRel: string) => {
        if (normalisedLinkTarget !== '_blank') return '';

        const relTokens = new Set(existingRel
            .split(/\s+/)
            .filter(Boolean));

        relTokens.add('noopener');
        relTokens.add('noreferrer');
        return Array.from(relTokens).join(' ');
    };

    const escapeAttr = (value: string) => value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    const sanitiseDescriptionHtmlWithoutDomParser = () => {
        // SSR fallback for Node environments where DOMParser is unavailable.
        let html = input;
        let previousHtml: string;

        do {
            previousHtml = html;
            html = html
                .replace(/<script\b[^<]*(?:(?!<\/script\b[^>]*>)<[^<]*)*<\/script\b[^>]*>/gi, '')
                .replace(/<style\b[^<]*(?:(?!<\/style\b[^>]*>)<[^<]*)*<\/style\b[^>]*>/gi, '')
                .replace(/<script\b/gi, '&lt;script')
                .replace(/<style\b/gi, '&lt;style');
        } while (html !== previousHtml);

        const anchors: Array<string> = [];

        html = html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, (anchorHtml) => {
            const openTagMatch = anchorHtml.match(/^<a\b([^>]*)>/i);
            const innerHtmlMatch = anchorHtml.match(/>([\s\S]*)<\/a>$/i);
            const attrString = openTagMatch?.[1] ?? '';
            const innerText = escapeAttr(innerHtmlMatch?.[1] ?? '');

            const attrs = new Map<string, string>();
            attrString.replace(/([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g, (_m, name, dq, sq, bare) => {
                const value = dq ?? sq ?? bare ?? '';
                attrs.set(String(name).toLowerCase(), value);
                return '';
            });

            const href = (attrs.get('href') ?? '').trim();
            const hrefForProtocolCheck = normaliseHrefForProtocolCheck(href);
            const protocolMatch = hrefForProtocolCheck.match(PROTOCOL_RE);
            const isHrefAllowed = !protocolMatch || ALLOWED_PROTOCOLS.has(`${protocolMatch[1].toLowerCase()}:`);

            const rel = ensureRelForTarget(attrs.get('rel') ?? '');
            const attrParts: Array<string> = [];

            if (href && isHrefAllowed) attrParts.push(`href="${escapeAttr(href)}"`);
            attrParts.push(`target="${normalisedLinkTarget}"`);
            if (rel) attrParts.push(`rel="${escapeAttr(rel)}"`);

            anchors.push(`<a ${attrParts.join(' ')}>${innerText}</a>`);
            return `__PIE_ANCHOR_PLACEHOLDER_${anchors.length - 1}__`;
        });

        html = html
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        anchors.forEach((anchor, index) => {
            html = html.replace(`__PIE_ANCHOR_PLACEHOLDER_${index}__`, anchor);
        });

        return html;
    };

    if (typeof DOMParser === 'undefined') {
        return sanitiseDescriptionHtmlWithoutDomParser();
    }

    const doc = new DOMParser().parseFromString(input, 'text/html');
    // Reverse so deepest descendants are processed first — ensures nested <a> tags
    // survive when their parent wrapper element is unwrapped.
    const elements = Array.from(doc.body.querySelectorAll('*')).reverse();

    elements.forEach((el) => {
        if (el.tagName !== 'A') {
            // Remove executable/content-bearing tags entirely instead of leaving their text behind.
            if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') {
                el.remove();
                return;
            }

            el.replaceWith(...Array.from(el.childNodes));
            return;
        }
        const href = (el.getAttribute('href') ?? '').trim();
        const hrefForProtocolCheck = normaliseHrefForProtocolCheck(href);
        const protocolMatch = hrefForProtocolCheck.match(PROTOCOL_RE);
        if (protocolMatch) {
            const protocol = `${protocolMatch[1].toLowerCase()}:`;
            if (!ALLOWED_PROTOCOLS.has(protocol)) el.removeAttribute('href');
        }
        Array.from(el.attributes).forEach((attr) => {
            if (!SAFE_ATTRS.has(attr.name)) el.removeAttribute(attr.name);
        });
        el.setAttribute('target', normalisedLinkTarget);

        if (normalisedLinkTarget === '_blank') {
            el.setAttribute('rel', ensureRelForTarget(el.getAttribute('rel') ?? ''));
        } else {
            el.removeAttribute('rel');
        }
    });

    return doc.body.innerHTML;
}

/**
 * Localises a rich text string by replacing custom tags with their respective enhancer functions content
 * If the key is not found, it will be used as fallback
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
