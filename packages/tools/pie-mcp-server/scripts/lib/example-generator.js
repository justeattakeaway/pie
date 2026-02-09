/**
 * Example Generator
 *
 * Generates clean, copy-paste ready HTML code examples from component
 * API metadata (properties, validValues, slots, tagName).
 *
 * Replaces the old Storybook AST-based extraction approach which produced
 * templates with Lit interpolations and artifacts.
 */

// ──────────────────────────────────────────────────────────────────────
// Default slot content per component (keyed by short name, e.g. "button")
// ──────────────────────────────────────────────────────────────────────
const DEFAULT_SLOT_CONTENT = {
    button: 'Label',
    'icon-button': '',
    link: 'Link text',
    chip: 'Chip label',
    tag: 'Tag label',
    modal: '<p>Modal content goes here.</p>',
    notification: 'Notification message goes here.',
    toast: '',
    card: '<p>Card content</p>',
    'assistive-text': 'Assistive text content',
    'cookie-banner': '',
    checkbox: 'Checkbox label',
    'checkbox-group': '',
    radio: '',
    'radio-group': '',
    switch: '',
    select: '',
    'text-input': '',
    textarea: '',
    'form-label': 'Label text',
    breadcrumb: '',
    tabs: '',
    list: '',
    divider: '',
    spinner: '',
    avatar: '',
    thumbnail: '',
    'lottie-player': '',
    'toast-provider': '',
    'data-table': '',
};

// ──────────────────────────────────────────────────────────────────────
// Named slot content templates
// ──────────────────────────────────────────────────────────────────────
const NAMED_SLOT_CONTENT = {
    icon: '<icon-placeholder slot="icon"></icon-placeholder>',
    leadingIcon: '<icon-placeholder slot="leadingIcon"></icon-placeholder>',
    trailingIcon: '<icon-placeholder slot="trailingIcon"></icon-placeholder>',
    leadingText: '<span slot="leadingText">\u00A3</span>',
    trailingText: '<span slot="trailingText">kg</span>',
    footer: '<div slot="footer">Footer content</div>',
    headerContent: '<div slot="headerContent">Header content</div>',
};

// ──────────────────────────────────────────────────────────────────────
// Props to exclude from quick-start examples.
//
// Keep this list minimal — most props are already filtered naturally by
// the selection logic in selectQuickStartProps:
//   • null/undefined/empty default → skipped (line 219)
//   • complex types (object, array, function, indexed) → skipped by isComplexType()
//   • false booleans → skipped
//
// Only list props here that have a non-empty default and would otherwise
// leak through as noise.
// ──────────────────────────────────────────────────────────────────────
const EXCLUDED_PROPS = new Set([
    'value',          // e.g. "on" on pie-switch — noise in quick-start
    'defaultValue',   // form-binding, not visual
    'defaultChecked', // form-binding, not visual
]);

// Props that should be included even if their default is null, because they
// are essential for the component to make visual sense.
const ALWAYS_INCLUDE_PROPS = new Set([
    'heading',
    'message',
    'placeholder',
    'label',
]);

// Components that should include isOpen in quick-start
const NEEDS_IS_OPEN = new Set([
    'pie-modal',
    'pie-notification',
    'pie-toast',
]);

// Max attributes in quick-start before we stop adding more
const MAX_QUICK_START_ATTRS = 5;

// Max variants to generate
const MAX_VARIANTS = 6;

/**
 * Generate examples for a component from its API metadata.
 *
 * @param {object} componentData - The fully assembled component data object
 * @returns {object} ComponentExamples shape: { quickStart, variants, slots, import }
 */
export function generateExamples (componentData) {
    const {
        name: packageName,
        tagName,
        properties = [],
        validValues = {},
        slots = [],
    } = componentData;

    const shortName = tagName.replace('pie-', '');

    // ── Quick Start ──────────────────────────────────────────────────
    const quickStartAttrs = selectQuickStartProps(
        properties,
        validValues,
        tagName,
    );

    const defaultSlot = getDefaultSlotContent(shortName, slots);
    const namedSlots = slots.filter((s) => s.name !== '');

    const quickStart = buildHtml(tagName, quickStartAttrs, defaultSlot);

    // ── Variants ─────────────────────────────────────────────────────
    const variants = generateVariants(
        tagName,
        properties,
        validValues,
        quickStartAttrs,
        defaultSlot,
    );

    // ── Slot examples ────────────────────────────────────────────────
    const slotExamples = generateSlotExamples(
        tagName,
        quickStartAttrs,
        defaultSlot,
        namedSlots,
    );

    // ── Import path ──────────────────────────────────────────────────
    const importPath = packageName
        ? packageName.replace('@justeattakeaway/pie-', '@justeattakeaway/pie-webc/components/') + '.js'
        : `@justeattakeaway/pie-webc/components/${shortName}.js`;

    return {
        quickStart,
        variants,
        slots: slotExamples,
        import: importPath,
    };
}

// ──────────────────────────────────────────────────────────────────────
// Quick-start property selection
// ──────────────────────────────────────────────────────────────────────

function selectQuickStartProps (properties, validValues, tagName) {
    const attrs = {};
    let count = 0;

    for (const prop of properties) {
        if (count >= MAX_QUICK_START_ATTRS) break;
        if (EXCLUDED_PROPS.has(prop.name)) continue;

        // Always-include props get generated values even if default is null
        // (checked before isComplexType since some of these have unresolved
        // indexed types like TextInputProps['placeholder'] that look complex
        // but are actually simple strings)
        if (ALWAYS_INCLUDE_PROPS.has(prop.name)) {
            attrs[prop.attribute || prop.name] = getGeneratedValue(prop.name, tagName);
            count++;
            continue;
        }

        if (isComplexType(prop)) continue;

        // Boolean props with false default → skip (not interesting in quick-start)
        if (isBooleanProp(prop) && (prop.default === 'false' || prop.default === false)) {
            continue;
        }

        // Boolean props with true default → render as boolean attribute (no value)
        if (isBooleanProp(prop) && (prop.default === 'true' || prop.default === true)) {
            attrs[prop.attribute || prop.name] = true;
            count++;
            continue;
        }

        // Skip props with null/undefined/empty default (not essential)
        if (prop.default == null || prop.default === 'undefined' || prop.default === '') continue;

        // Skip 'default' values for status-like props (not interesting)
        if (prop.default === 'default' && prop.name === 'status') continue;

        attrs[prop.attribute || prop.name] = prop.default;
        count++;
    }

    // Special-case: include isOpen for certain components
    if (NEEDS_IS_OPEN.has(tagName)) {
        const isOpenProp = properties.find((p) => p.name === 'isOpen');
        if (isOpenProp) {
            attrs.isOpen = true; // boolean attr, no value
        }
    }

    return attrs;
}

function isComplexType (prop) {
    const type = (prop.type || '').toLowerCase();
    const def = prop.default || '';

    return (
        type.includes('object')
        || type.includes('htmlelement')
        || type.includes('validitystate')
        || type.includes('[]')
        || type.includes('function')
        // Indexed type references like SomeProps['optionName'] are usually
        // complex (objects, arrays, callbacks). The simple string/boolean/number
        // props have resolved types like "string" or "boolean".
        || /\w+\['.+'\]/.test(prop.type || '')
        // Default values that look like arrays or objects
        || def.startsWith('[')
        || def.startsWith('{')
    );
}

function isBooleanProp (prop) {
    const type = (prop.type || '').toLowerCase();
    return type === 'boolean' || prop.default === 'false' || prop.default === 'true' || prop.default === true || prop.default === false;
}

function getGeneratedValue (propName, tagName) {
    const shortName = tagName.replace('pie-', '').replace(/-/g, ' ');
    const values = {
        heading: `${capitalize(shortName)} Title`,
        message: `${capitalize(shortName)} message`,
        placeholder: 'Enter text',
        label: `${capitalize(shortName)} label`,
    };
    return values[propName] || propName;
}

function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ──────────────────────────────────────────────────────────────────────
// Variant generation
// ──────────────────────────────────────────────────────────────────────

function generateVariants (tagName, properties, validValues, quickStartAttrs, defaultSlot) {
    // Find the "primary enum prop" — the most interesting prop to vary
    const primaryPropName = findPrimaryEnumProp(validValues);
    if (!primaryPropName) return [];

    const propName = primaryPropName;
    const values = validValues[primaryPropName];
    if (!values || values.length === 0) return [];

    // Find the prop's attribute name
    const prop = properties.find((p) => p.name === propName);
    const attrName = prop ? (prop.attribute || prop.name) : propName;

    // Default value (from quickStartAttrs or from prop.default)
    const defaultValue = quickStartAttrs[attrName] || (prop && prop.default) || null;

    const variants = [];
    for (const val of values) {
        // Skip the default value (it's already in quickStart)
        if (val === defaultValue) continue;
        if (variants.length >= MAX_VARIANTS) break;

        // Build attrs: replace the primary prop value, keep the rest
        const variantAttrs = { ...quickStartAttrs };
        variantAttrs[attrName] = val;

        const code = buildHtml(tagName, variantAttrs, defaultSlot);
        variants.push({
            name: formatVariantName(val),
            value: val,
            code,
        });
    }

    return variants;
}

/**
 * Find the best validValues property name to use as the primary enum for variants.
 * Priority: variant > size > type > first available
 */
function findPrimaryEnumProp (validValues) {
    const priority = ['variant', 'size', 'type'];

    for (const key of priority) {
        if (validValues[key]) return key;
    }

    // Fallback: first available key
    const keys = Object.keys(validValues);
    return keys.length > 0 ? keys[0] : null;
}

function formatVariantName (value) {
    // "small-productive" → "Small Productive"
    return value
        .split(/[-_]/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

// ──────────────────────────────────────────────────────────────────────
// Slot example generation
// ──────────────────────────────────────────────────────────────────────

function generateSlotExamples (tagName, quickStartAttrs, defaultSlot, namedSlots) {
    const examples = [];

    for (const slot of namedSlots) {
        const slotContent = NAMED_SLOT_CONTENT[slot.name]
            || `<div slot="${slot.name}">${slot.name} content</div>`;

        // Combine default slot content with the named slot
        const innerParts = [];
        if (defaultSlot) innerParts.push(defaultSlot);
        innerParts.push(slotContent);

        const code = buildHtml(tagName, quickStartAttrs, innerParts.join('\n'));
        examples.push({
            name: slot.name,
            description: slot.description || `The ${slot.name} slot`,
            code,
        });
    }

    return examples;
}

// ──────────────────────────────────────────────────────────────────────
// Default slot content
// ──────────────────────────────────────────────────────────────────────

function getDefaultSlotContent (shortName, slots) {
    const hasDefaultSlot = slots.some((s) => s.name === '');
    if (!hasDefaultSlot) return '';

    return DEFAULT_SLOT_CONTENT[shortName] || '';
}

// ──────────────────────────────────────────────────────────────────────
// HTML builder
// ──────────────────────────────────────────────────────────────────────

function buildHtml (tagName, attrs, innerContent) {
    const attrParts = [];

    for (const [key, val] of Object.entries(attrs)) {
        if (val === true) {
            // Boolean attribute (no value)
            attrParts.push(key);
        } else if (val !== false && val != null && val !== '') {
            attrParts.push(`${key}="${val}"`);
        }
    }

    const attrStr = attrParts.length > 0 ? ' ' + attrParts.join(' ') : '';
    const hasContent = innerContent && innerContent.trim().length > 0;

    // Self-closing style (no content)
    if (!hasContent) {
        const singleLine = `<${tagName}${attrStr}></${tagName}>`;
        if (singleLine.length <= 80) return singleLine;

        // Multi-line attributes
        return buildMultilineTag(tagName, attrParts, '');
    }

    // With content
    const singleLine = `<${tagName}${attrStr}>${innerContent}</${tagName}>`;
    if (singleLine.length <= 80 && !innerContent.includes('\n')) {
        return singleLine;
    }

    // Multi-line
    return buildMultilineTag(tagName, attrParts, innerContent);
}

function buildMultilineTag (tagName, attrParts, innerContent) {
    const lines = [];

    if (attrParts.length <= 2) {
        // Short attr list: keep on opening tag line
        const attrStr = attrParts.length > 0 ? ' ' + attrParts.join(' ') : '';
        lines.push(`<${tagName}${attrStr}>`);
    } else {
        // Many attrs: one per line
        lines.push(`<${tagName}`);
        for (const attr of attrParts) {
            lines.push(`    ${attr}`);
        }
        // Close the opening tag on the last attribute line
        lines[lines.length - 1] += '>';
    }

    if (innerContent && innerContent.trim().length > 0) {
        // Indent each line of inner content
        const contentLines = innerContent.split('\n');
        for (const line of contentLines) {
            lines.push(`    ${line}`);
        }
    }

    lines.push(`</${tagName}>`);
    return lines.join('\n');
}
