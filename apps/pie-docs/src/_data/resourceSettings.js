const resourceTypes = require('./resourceTypes');

module.exports = {
    [resourceTypes.COMPONENT]: {
        icon: '/assets/img/components/icons/figma.svg',
        resource: 'Figma Component',
    },
    [resourceTypes.DOCUMENTATION]: {
        icon: '/assets/img/components/icons/figma.svg',
        resource: 'Figma Documentation',
    },
    [resourceTypes.WEB_COMPONENTS]: {
        icon: '/assets/img/components/icons/web-component.svg',
        resource: 'Web Components',
    },
    [resourceTypes.VUE]: {
        icon: '/assets/img/components/icons/vue.svg',
        resource: 'Vue [Fozzie]',
    },
    [resourceTypes.REACT]: {
        icon: '/assets/img/components/icons/react.svg',
        resource: 'React [Snacks]',
    },
    [resourceTypes.IOS_JUST_UI]: {
        icon: '/assets/img/components/icons/apple.svg',
        resource: 'iOS JustUI [UI Kit]',
    },
    [resourceTypes.IOS_PIE]: {
        icon: '/assets/img/components/icons/swift-ui.svg',
        resource: 'iOS PIE [SwiftUI]',
    },
    [resourceTypes.ANDROID_XML]: {
        icon: '/assets/img/components/icons/android.svg',
        resource: 'Android [XML views]',
    },
    [resourceTypes.ANDROID_JETPACK]: {
        icon: '/assets/img/components/icons/jetpack-compose.svg',
        resource: 'Android [Jetpack compose]',
    },
};
