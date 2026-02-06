/**
 * Lit Template Cleaner
 *
 * Cleans up Lit HTML templates to be more readable and usable
 * outside of the Storybook context. Handles Lit directives,
 * property bindings, event handlers, and boolean attributes.
 */

/**
 * Clean a Lit HTML template to make it more readable and usable
 * @param {string} template - The raw template string
 * @param {string} componentName - The component name (e.g., 'pie-modal')
 * @returns {string|null} The cleaned template or null if invalid
 */
export function cleanLitTemplate (template, componentName) {
    if (!template) return null;

    let cleaned = template;

    // Step 1: Handle Lit directives
    cleaned = cleanLitDirectives(cleaned);

    // Step 2: Clean up bindings and attributes
    cleaned = cleanBindings(cleaned);

    // Step 3: Clean up event handlers
    cleaned = cleanEventHandlers(cleaned);

    // Step 4: Clean up whitespace
    cleaned = cleanWhitespace(cleaned);

    // Step 5: If still too complex, try to extract just the main component
    if (isTemplateComplex(cleaned)) {
        const extracted = extractMainComponent(cleaned, componentName);
        if (extracted) {
            cleaned = extracted;
        }
    }

    return cleaned.length > 10 ? cleaned : null;
}

/**
 * Clean Lit directives from the template
 */
function cleanLitDirectives (template) {
    let cleaned = template;

    // ${ifDefined(x)} → ${x}
    cleaned = cleaned.replace(/\$\{ifDefined\(([^)]+)\)\}/g, (_, expr) => {
        // If it's a simple variable reference, keep it
        const trimmed = expr.trim();
        if (/^[\w.]+$/.test(trimmed)) {
            return `\${${trimmed}}`;
        }
        // For complex expressions, use a placeholder
        return `\${${trimmed}}`;
    });

    // ${nothing} → remove entirely
    cleaned = cleaned.replace(/\$\{nothing\}/g, '');

    // ${x ? html`...` : nothing} → extract the html content
    cleaned = cleaned.replace(
        /\$\{[^}]*\?\s*html`([^`]*)`\s*:\s*nothing\s*\}/g,
        '$1',
    );

    // ${x ? something : nothing} → remove (too complex)
    cleaned = cleaned.replace(/\$\{[^}]*\?\s*[^:]+:\s*nothing\s*\}/g, '');

    // ${sanitizeAndRenderHTML(slot)} → <!-- slot content -->
    cleaned = cleaned.replace(
        /\$\{sanitizeAndRenderHTML\([^)]*\)\}/g,
        '<!-- slot content -->',
    );

    // ${unsafeHTML(...)} → <!-- dynamic content -->
    cleaned = cleaned.replace(/\$\{unsafeHTML\([^)]*\)\}/g, '<!-- dynamic content -->');

    // ${repeat(...)} → <!-- repeated items -->
    cleaned = cleaned.replace(/\$\{repeat\([^)]*\)\}/g, '<!-- repeated items -->');

    // ${cache(...)} → remove
    cleaned = cleaned.replace(/\$\{cache\([^)]*\)\}/g, '');

    // ${guard(...)} → remove
    cleaned = cleaned.replace(/\$\{guard\([^)]*\)\}/g, '');

    // ${classMap(...)} → remove (class attribute will still be there)
    cleaned = cleaned.replace(/\$\{classMap\([^)]*\)\}/g, '');

    // ${styleMap(...)} → remove
    cleaned = cleaned.replace(/\$\{styleMap\([^)]*\)\}/g, '');

    return cleaned;
}

/**
 * Clean up property bindings and boolean attributes
 */
function cleanBindings (template) {
    let cleaned = template;

    // Boolean attributes: ?disabled="${x}" → disabled
    // This pattern handles: ?attr="${expr}"
    cleaned = cleaned.replace(/\?(\w+)="\$\{[^}]+\}"/g, '$1');

    // Property bindings: .prop="${x}" → prop="${x}"
    cleaned = cleaned.replace(/\.(\w+)="\$\{([^}]+)\}"/g, '$1="${$2}"');

    // Property bindings with object literals: .prop=${obj} → (remove, too complex)
    cleaned = cleaned.replace(/\.(\w+)=\$\{[^}]+\}/g, '');

    // Clean up remaining "${expr}" where expr is simple
    cleaned = cleaned.replace(/"\$\{([a-zA-Z_][\w.]*)\}"/g, (match, expr) => {
        // Keep simple variable references as example values
        if (expr.includes('.')) {
            // Object property access like props.size
            const parts = expr.split('.');
            return `"\${${parts[parts.length - 1]}}"`;
        }
        return match;
    });

    return cleaned;
}

/**
 * Clean up event handlers
 */
function cleanEventHandlers (template) {
    let cleaned = template;

    // @event="${handler}" → @event="handleEvent"
    cleaned = cleaned.replace(/@(\w+[-\w]*)="\$\{[^}]+\}"/g, '@$1="handleEvent"');

    // @event=${handler} (without quotes) → @event="handleEvent"
    cleaned = cleaned.replace(/@(\w+[-\w]*)=\$\{[^}]+\}/g, '@$1="handleEvent"');

    return cleaned;
}

/**
 * Clean up whitespace in the template
 */
function cleanWhitespace (template) {
    let cleaned = template;

    // Remove empty lines at the start
    cleaned = cleaned.replace(/^\s*\n/, '');

    // Normalize multiple blank lines to single
    cleaned = cleaned.replace(/\n\s*\n\s*\n/g, '\n\n');

    // Remove excessive indentation while preserving structure
    const lines = cleaned.split('\n');
    if (lines.length > 0) {
        // Find minimum indentation (excluding empty lines)
        let minIndent = Infinity;
        for (const line of lines) {
            if (line.trim().length > 0) {
                const match = line.match(/^(\s*)/);
                if (match && match[1].length < minIndent) {
                    minIndent = match[1].length;
                }
            }
        }

        // Remove common indentation
        if (minIndent > 0 && minIndent < Infinity) {
            cleaned = lines
                .map((line) => {
                    if (line.trim().length === 0) return '';
                    return line.slice(minIndent);
                })
                .join('\n');
        }
    }

    return cleaned.trim();
}

/**
 * Check if the template is still too complex after cleaning
 */
function isTemplateComplex (template) {
    // Count remaining interpolations
    const interpolations = (template.match(/\$\{/g) || []).length;

    // Check for problematic patterns
    const hasComplexExpressions = /\$\{[^}]{50,}\}/.test(template);
    const hasFunctionCalls = /\$\{[a-zA-Z]+\([^)]*\)\}/.test(template);

    return interpolations > 5 || hasComplexExpressions || hasFunctionCalls;
}

/**
 * Extract just the main PIE component from a complex template
 */
function extractMainComponent (template, componentName) {
    // Try to find the main component tag
    const tagPattern = new RegExp(
        `<${componentName}[^>]*>[\\s\\S]*?<\\/${componentName}>`,
        'i',
    );
    const match = template.match(tagPattern);

    if (match) {
        let component = match[0];

        // Clean up the extracted component
        component = cleanLitDirectives(component);
        component = cleanBindings(component);
        component = cleanEventHandlers(component);
        component = cleanWhitespace(component);

        return component;
    }

    // Try self-closing tag
    const selfClosingPattern = new RegExp(`<${componentName}[^>]*/?>`, 'i');
    const selfClosingMatch = template.match(selfClosingPattern);

    if (selfClosingMatch) {
        let component = selfClosingMatch[0];
        component = cleanLitDirectives(component);
        component = cleanBindings(component);
        component = cleanEventHandlers(component);
        return component.trim();
    }

    return null;
}

/**
 * Generate a simplified example from component props
 * This is used as a fallback when template extraction fails
 */
export function generateSimpleExample (componentName, properties) {
    if (!properties || properties.length === 0) {
        return `<${componentName}></${componentName}>`;
    }

    // Select a few key properties to show
    const propsToShow = properties
        .filter((p) => {
            // Skip complex types and private props
            if (p.name.startsWith('_')) return false;
            if (p.type?.includes('Object')) return false;
            if (p.type?.includes('Function')) return false;
            return true;
        })
        .slice(0, 3);

    if (propsToShow.length === 0) {
        return `<${componentName}></${componentName}>`;
    }

    const attrs = propsToShow
        .map((p) => {
            const value = getExampleValue(p);
            if (value === null) return null;
            return `${p.attribute || p.name}="${value}"`;
        })
        .filter(Boolean)
        .join('\n    ');

    return `<${componentName}
    ${attrs}>
</${componentName}>`;
}

/**
 * Get an example value for a property
 */
function getExampleValue (property) {
    const { type, name } = property;

    if (!type) return null;

    // Boolean props
    if (type === 'boolean') {
        return null; // Boolean attributes should be presence-based
    }

    // String props with common patterns
    if (name === 'variant') return 'primary';
    if (name === 'size') return 'medium';
    if (name === 'type') return 'button';

    // Default string value
    if (type === 'string') return 'value';

    return null;
}
