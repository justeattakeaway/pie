// This file is used by the eslint plugin to hint developers on how to migrate away from deprecated Snacks components
// - Update this file when a Snacks component is deprecated and doesn't map directly to a PIE component
// - Update this file when a Snacks migration skill is available for components replaced by a PIE component
// Unlike `snacks-components-data.json`, this file can be edited by hand.

const migrateWithSkill = 'Use the "snacks-migration-assistant" skill to migrate this component.\nCheck this page for more details: https://www.pie.design/agents/resources/#snacks-migration-skill';

const replaceWithHtmlAndCss = 'This component should be replaced with the use of div elements and CSS.';
const replaceWithCssTransitions = 'This component should be replaced with CSS transitions.';
const replaceWithCssLayout = 'This component should be replaced with CSS flexbox or grid.';

module.exports = {
    Flex: migrateWithSkill,
    FlexItem: migrateWithSkill,
    Util: migrateWithSkill,
    Button: migrateWithSkill,
    Text: migrateWithSkill,
    Heading: migrateWithSkill,
    Media: replaceWithHtmlAndCss,
    Picture: 'This component should be replaced with native img or picture elements and CSS.',
    Link: 'This component should be replaced with native anchor tag or button elements and CSS.',
    AppBanner: replaceWithHtmlAndCss,
    StaticBanner: replaceWithHtmlAndCss,
    SkipLink: 'In Consumer Web, this component should be imported from \'@cw/common/components/skip-link/index.js\'. Otherwise, create your own custom component.',
    TransitionCollapse: replaceWithCssTransitions,
    TransitionSlide: replaceWithCssTransitions,
    Icon: 'This component should be replaced with icons from @justeattakeaway/pie-icons-webc where applicable.',
    IconLogo: 'In Consumer Web, this component should be imported from \'@cw/common/components/icon-logo/index.js\'. Otherwise, create your own custom component.',
    IconInteractive: replaceWithHtmlAndCss,
    Columns: replaceWithCssLayout,
    ColumnsItem: replaceWithCssLayout,
    ContentDecorator: replaceWithHtmlAndCss,
    Sticky: 'In Consumer Web, this component should be imported from \'@cw/common/components/sticky/index.js\'. Otherwise, consider using react-sticky-el or create your own custom component.',
    ScrollTop: 'In Consumer Web, this component should be imported from \'@cw/common/components/scroll-top/index.js\'. Otherwise, create your own custom component.',
    SwipeNav: 'In Consumer Web, this component should be imported from \'@cw/common/components/swipe-nav/index.js\'. Otherwise, consider using Swiper (swiper/react) or create your own custom component.',
    LiveRegion: 'This component should be replaced with a native element using the aria-live attribute and CSS.',
};
