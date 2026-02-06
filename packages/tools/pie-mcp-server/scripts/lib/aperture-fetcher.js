/**
 * Pie-Aperture Framework Examples Fetcher
 *
 * Fetches actual source code from the pie-aperture repository
 * on GitHub at build time. Provides examples for Next.js, Nuxt,
 * and vanilla HTML implementations of PIE components.
 */

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/justeattakeaway/pie-aperture/main';
const REQUEST_TIMEOUT = 5000; // 5 seconds

/**
 * Framework configuration for fetching examples
 */
const FRAMEWORK_CONFIGS = {
    nextjsV14: {
        pathTemplate: (component) => `nextjs-app-v14/src/app/components/${component}/${component}.tsx`,
        sourceUrlTemplate: (component) => `https://github.com/justeattakeaway/pie-aperture/tree/main/nextjs-app-v14/src/app/components/${component}`,
        liveUrlTemplate: (component) => `https://aperture-nextjs-v14.pie.design/components/${component}`,
    },
    nextjsV15: {
        pathTemplate: (component) => `nextjs-app-v15/src/app/components/${component}/${component}.tsx`,
        sourceUrlTemplate: (component) => `https://github.com/justeattakeaway/pie-aperture/tree/main/nextjs-app-v15/src/app/components/${component}`,
        liveUrlTemplate: (component) => `https://aperture-nextjs-v15.pie.design/components/${component}`,
    },
    nuxt: {
        pathTemplate: (component) => `nuxt-app/pages/components/${component}.vue`,
        sourceUrlTemplate: (component) => `https://github.com/justeattakeaway/pie-aperture/blob/main/nuxt-app/pages/components/${component}.vue`,
        liveUrlTemplate: (component) => `https://aperture-nuxt.pie.design/components/${component}`,
    },
    vanilla: {
        pathTemplate: (component) => `vanilla-app/components/${component}.html`,
        sourceUrlTemplate: (component) => `https://github.com/justeattakeaway/pie-aperture/blob/main/vanilla-app/components/${component}.html`,
        liveUrlTemplate: (component) => `https://aperture-vanilla.pie.design/components/${component}`,
    },
};

/**
 * Fetch with timeout support
 */
async function fetchWithTimeout (url, timeout = REQUEST_TIMEOUT) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

/**
 * Fetch code for a specific framework and component
 */
async function fetchFrameworkCode (framework, componentName) {
    const config = FRAMEWORK_CONFIGS[framework];
    if (!config) {
        return { available: false, code: null, error: `Unknown framework: ${framework}` };
    }

    // Strip 'pie-' prefix for aperture paths
    const cleanName = componentName.replace(/^pie-/, '');
    const filePath = config.pathTemplate(cleanName);
    const url = `${GITHUB_RAW_BASE}/${filePath}`;

    try {
        const response = await fetchWithTimeout(url);

        if (response.status === 404) {
            return {
                available: false,
                code: null,
                sourceUrl: config.sourceUrlTemplate(cleanName),
                liveUrl: config.liveUrlTemplate(cleanName),
            };
        }

        if (!response.ok) {
            return {
                available: false,
                code: null,
                error: `HTTP ${response.status}`,
                sourceUrl: config.sourceUrlTemplate(cleanName),
                liveUrl: config.liveUrlTemplate(cleanName),
            };
        }

        const code = await response.text();

        return {
            available: true,
            code: code.trim(),
            sourceUrl: config.sourceUrlTemplate(cleanName),
            liveUrl: config.liveUrlTemplate(cleanName),
        };
    } catch (error) {
        const errorMessage = error.name === 'AbortError' ? 'Request timeout' : error.message;

        return {
            available: false,
            code: null,
            error: errorMessage,
            sourceUrl: config.sourceUrlTemplate(cleanName),
            liveUrl: config.liveUrlTemplate(cleanName),
        };
    }
}

/**
 * Fetch all framework examples for a component
 *
 * @param {string} componentName - The component name (e.g., 'pie-button')
 * @returns {Promise<object>} Framework examples with code and URLs
 */
export async function fetchApertureExamples (componentName) {
    const frameworks = Object.keys(FRAMEWORK_CONFIGS);

    // Fetch all frameworks in parallel
    const results = await Promise.allSettled(frameworks.map((framework) => fetchFrameworkCode(framework, componentName)));

    const examples = {
        repository: 'https://github.com/justeattakeaway/pie-aperture',
    };

    // Process results
    frameworks.forEach((framework, index) => {
        const result = results[index];

        if (result.status === 'fulfilled') {
            examples[framework] = result.value;
        } else {
            // Promise rejected (shouldn't happen with our error handling, but just in case)
            const cleanName = componentName.replace(/^pie-/, '');
            const config = FRAMEWORK_CONFIGS[framework];

            examples[framework] = {
                available: false,
                code: null,
                error: result.reason?.message || 'Unknown error',
                sourceUrl: config.sourceUrlTemplate(cleanName),
                liveUrl: config.liveUrlTemplate(cleanName),
            };
        }
    });

    return examples;
}

/**
 * Fetch aperture examples for multiple components in parallel
 * with batching to avoid overwhelming the network
 *
 * @param {string[]} componentNames - Array of component names
 * @param {number} batchSize - Number of components to fetch in parallel
 * @returns {Promise<Map<string, object>>} Map of component name to examples
 */
export async function fetchApertureExamplesForComponents (componentNames, batchSize = 5) {
    const results = new Map();

    // Process in batches
    for (let i = 0; i < componentNames.length; i += batchSize) {
        const batch = componentNames.slice(i, i + batchSize);

        const batchResults = await Promise.allSettled(batch.map(async (name) => ({
            name,
            examples: await fetchApertureExamples(name),
        })));

        for (const result of batchResults) {
            if (result.status === 'fulfilled') {
                results.set(result.value.name, result.value.examples);
            } else {
                // This shouldn't happen, but handle it gracefully
                console.warn(`Failed to fetch aperture examples: ${result.reason?.message}`);
            }
        }
    }

    return results;
}

/**
 * Check if aperture fetching should be skipped
 * Checks for SKIP_APERTURE_FETCH environment variable
 */
export function shouldSkipApertureFetch () {
    return process.env.SKIP_APERTURE_FETCH === 'true';
}

/**
 * Create empty framework examples structure (for offline mode)
 */
export function createEmptyFrameworkExamples (componentName) {
    const cleanName = componentName.replace(/^pie-/, '');
    const examples = {
        repository: 'https://github.com/justeattakeaway/pie-aperture',
    };

    for (const [framework, config] of Object.entries(FRAMEWORK_CONFIGS)) {
        examples[framework] = {
            available: false,
            code: null,
            sourceUrl: config.sourceUrlTemplate(cleanName),
            liveUrl: config.liveUrlTemplate(cleanName),
        };
    }

    return examples;
}
