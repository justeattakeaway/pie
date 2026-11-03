/*
// Configuration for the llms.txt generator (generate-llms-txt.js).
*/

// Order of the sections in the generated file. Values are the top-level content directories.
// This can differ from the website navigation, so the most relevant content for agents comes first.
// Sections missing from this list are still included, appended at the end with a warning.
const SECTION_ORDER = [
    'foundations',
    'components',
    'patterns',
    'accessibility',
    'all-about-pie',
    'agents',
    'designers',
    'engineers',
    'support',
];

// Pages that share the same structure across a section (e.g. every component has Web and Code pages)
// get a description based on their navigation key, using the page title (e.g. "Button").
// An `llmsTxtDescription` in the page frontmatter still takes precedence.
const DESIGN_GUIDANCE_TOPICS = 'such as anatomy, variants, modifiers, sizes, states, content, behaviour, dos and don\'ts, and examples';

const PAGE_TYPE_DESCRIPTIONS = {
    components: {
        Overview: (title) => `Overview of the ${title} component, with its purpose and a table of its resources and availability in Figma and the web, iOS and Android libraries.`,
        Web: (title) => `Web design guidance for the ${title} component, ${DESIGN_GUIDANCE_TOPICS}.`,
        Apps: (title) => `iOS and Android design guidance for the ${title} component, ${DESIGN_GUIDANCE_TOPICS}.`,
        Android: (title) => `Android design guidance for the ${title} component, ${DESIGN_GUIDANCE_TOPICS}.`,
        iOS: (title) => `iOS design guidance for the ${title} component, ${DESIGN_GUIDANCE_TOPICS}.`,
        Code: (title) => `Where to find the code resources for the ${title} component, with a link to its PIE Web Components Storybook docs and who to contact for iOS and Android.`,
        Motion: (title) => `Motion specifications for the ${title} component, showing how it animates between states and transitions.`,
    },
};

// Content directories that never contain pages. Directories starting with `_` or `.` are always ignored.
const IGNORED_DIRECTORIES = ['assets', '__tests__'];

module.exports = {
    SECTION_ORDER,
    PAGE_TYPE_DESCRIPTIONS,
    IGNORED_DIRECTORIES,
};
