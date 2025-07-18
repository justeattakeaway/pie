const webComponentStatuses = require('@justeattakeaway/pie-monorepo-utils/dist/component-statuses.json');
const resourceTypes = require('./_data/resourceTypes');
const statusTypes = require('./_data/statusTypes');

const webHeadings = [
    {
        title: resourceTypes.WEB_COMPONENT,
    },
    {
        title: 'Figma',
        icon: '/assets/img/components/icons/figma.svg',
    },
    {
        title: 'Web Components',
        icon: '/assets/img/components/icons/web-component.svg',
    },
    {
        title: 'Vue [Fozzie]',
        icon: '/assets/img/components/icons/vue.svg',
    },
    {
        title: 'React [Snacks]',
        icon: '/assets/img/components/icons/react.svg',
    }
];

const appHeadings = [
    {
        title: resourceTypes.APP_COMPONENT,
    },
    {
        title: 'Figma',
        icon: '/assets/img/components/icons/figma.svg',
    },
    {
        title: 'JustUI [UI Kit]',
        icon: '/assets/img/components/icons/apple.svg',
    },
    {
        title: 'PIE [SwiftUI]',
        icon: '/assets/img/components/icons/swift-ui.svg',
    },
    {
        title: 'Android PIE [Compose & Views]',
        icon: '/assets/img/components/icons/android.svg',
    }
];

const rows = [
    [
        { componentName: 'Accordion' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=4-21447',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=1-65907',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=4-21447',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=1-65907',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/bubble/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.PRE_RELEASE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PRE_RELEASE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.PLANNED,
        }
    ],
    [
        { componentName: 'Assistive Text' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=163-43156',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=2-65908',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=163-43156',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=2-65908',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-assistive-text--overview',
            status: webComponentStatuses['pie-assistive-text'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.PRE_RELEASE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PRE_RELEASE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Avatar' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114512',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=2-65909',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114512',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=2-65909',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Badge' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=339-24355',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=2-65910',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=339-24355',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=2-65910',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/bubble/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.PRE_RELEASE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PRE_RELEASE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Bottom Sheet' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=5-9831',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=13-17639',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=5-9831',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=13-17639',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.BETA,
        }
    ],
    [
        { componentName: 'Breadcrumb' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=314-23908',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=13-19354',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-breadcrumb--overview',
            status: webComponentStatuses['pie-breadcrumb'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-molecules--breadcrumbs-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/breadcrumbs/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Button' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1-925',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=0-1',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1-925',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=0-1',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-button--overview',
            status: webComponentStatuses['pie-button'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms-f-button--button-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/button/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Card' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=339-24607',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=1-15409',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=339-24607',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=1-15409',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-card--overview',
            status: webComponentStatuses['pie-card'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms--card-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/card/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.BETA,
        }
    ],
    [
        { componentName: 'Carousel Indicator' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114514',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=14-19646',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114514',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=14-19646',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Checkbox' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1998-6410',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=14-19647',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1998-6410',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=14-19647',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-checkbox--overview',
            status: webComponentStatuses['pie-checkbox'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms-f-form-field--checkbox-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/checkbox/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Checkbox Group' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1998-6410',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=14-19647',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1998-6410',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=14-19647',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-checkbox-group--overview',
            status: webComponentStatuses['pie-checkbox-group'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/checkbox-group/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Chip' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=75-21124',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=16-19648',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=75-21124',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=16-19648',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-chip--overview',
            status: webComponentStatuses['pie-chip'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/chip/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Cookie Banner' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/file/Rqz8KHogVsGCS4j0nDueNo/[Core]-Patterns-%E2%9A%AA%EF%B8%8F-[PIE-2.0]?type=design&node-id=1599-41380&mode=design&t=8G38n2fCOYB5Bd2d-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/file/Rqz8KHogVsGCS4j0nDueNo/[Core]-Patterns-%E2%9A%AA%EF%B8%8F-[PIE-2.0]?type=design&node-id=2755-20043&mode=design&t=8G38n2fCOYB5Bd2d-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1599-41380',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=2755-20043',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-cookie-banner--overview',
            status: webComponentStatuses['pie-cookie-banner'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Data Table' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114515',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=17-19650',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114515',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=17-19650',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Bar Chart' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114517',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=18-19651',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114517',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=18-19651',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Line Chart' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114517',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=18-19651',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114517',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=18-19651',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Date Picker' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114516',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=18-19652',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114516',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=18-19652',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.TBC,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Divider' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=341-24442',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=1-45657',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=341-24442',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=1-45657',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-divider--overview',
            status: webComponentStatuses['pie-divider'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/divider/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Dropdown' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114518',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=19-19818',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114518',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=19-19818',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms-f-form-field--dropdown-default-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/combo-box/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.PLANNED,
        }
    ],
    [
        { componentName: 'Fab' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=331-24128',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=19-19819',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=331-24128',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=19-19819',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.PLANNED,
        }
    ],
    [
        { componentName: 'Form Label' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=163-43078',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=1-49824',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=163-43078',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=1-49824',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: webComponentStatuses['pie-form-label'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Icon Button' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=235-32588',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=20-20755',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=235-32588',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=20-20755',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-icon-button--overview',
            status: webComponentStatuses['pie-icon-button'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms-f-button--icon-button-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/icon-button/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Link' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=364-29974',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=1-55378',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=364-29974',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=1-55378',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-link--overview',
            status: webComponentStatuses['pie-link'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms--v-link-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/text-link/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'List Item' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114520',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=20-21055',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114520',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=20-21055',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/list/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'List Item Interactive' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114521',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=21-21056',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114521',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=21-21056',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/list/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Map Pin' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=310-24558',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=24-21059',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=310-24558',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=24-21059',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Modal' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=45-9885',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=1-65348',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=45-9885',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=1-65348',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-modal--overview',
            status: webComponentStatuses['pie-modal'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-molecules--mega-modal-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/modal/overview/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.BETA,
        }
    ],
    [
        { componentName: 'Notification' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1005-30849',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=13-17640',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1005-30849',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=13-17640',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-notification--overview',
            status: webComponentStatuses['pie-notification'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-molecules--alert-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/notification/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Numeric Stepper' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=363-26590',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=25-21971',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=363-26590',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=25-21971',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/counter/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Numeric Stepper Form' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=363-26590',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=25-21971',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=363-26590',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=25-21971',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/counter/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Numeric Stepper Input' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=363-26590',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=25-21971',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=363-26590',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=25-21971',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/counter/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Numeric Stepper Simple' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=363-26590',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=25-21971',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=363-26590',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=25-21971',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/counter/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Pagination' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114522',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=25-21972',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/pagination/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Popover' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114523',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-19',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114523',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/dropdown-dialog/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Progress Bar' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=315-23961',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-20',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=315-23961',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=29-20',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/progress-bar/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Progress Stepper' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114524',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-21',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114524',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=29-21',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Radio' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=198-33663',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-22',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=198-33663',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=29-22',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-radio--overview',
            status: webComponentStatuses['pie-radio'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms-f-form-field--radio-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/radio/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Radio Group' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=198-33663',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-22',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-radio-group--overview',
            status: webComponentStatuses['pie-radio-group'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/radio-group/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Rating' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=113-22915',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-23',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=113-22915',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=29-23',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-molecules-f-rating--rating-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/rating/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.PLANNED,
        }
    ],
    [
        { componentName: 'Segmented Controls' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=904-31630',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-25',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=904-31630',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=29-25',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms--segmented-control-variants',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/options/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.PLANNED,
        }
    ],
    [
        { componentName: 'Select Input' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114525',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1329&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-select--overview',
            status: webComponentStatuses['pie-select'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/combo-box/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Show More' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=364-52420',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-27',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=364-52420',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=29-27',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/show-more/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Side Sheet' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114526',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114526',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Skeleton' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=345-32232',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-29',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=345-32232',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=29-29',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-molecules--skeleton-loader-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/skeleton-bar/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Slider' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=315-26593',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=29-30',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=315-26593',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=29-30',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Spinner' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=132-15914',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=32-32',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=132-15914',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=32-32',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-spinner--overview',
            status: webComponentStatuses['pie-spinner'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms--v-spinner-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/loading/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Switch' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=193-33379',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=1-60872',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=193-33379',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=1-60872',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-switch--overview',
            status: webComponentStatuses['pie-switch'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms--toggle-switch-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/switch/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Tabs' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=294-32395',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=32-255',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=294-32395',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=32-255',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-molecules--vue-tabs-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/tabs/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Tag' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=266-36459',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=32-256',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=266-36459',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=32-256',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-tag--overview',
            status: webComponentStatuses['pie-tag'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/tag/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.STABLE,
        }
    ],
    [
        { componentName: 'Text Input' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=163-22046',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=32-257',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=163-22046',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=32-257',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-text-input--overview',
            status: webComponentStatuses['pie-text-input'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms-f-form-field--text-input-default-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/input/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.ALPHA,
        }
    ],
    [
        { componentName: 'Textarea' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114527',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=32-258',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-textarea--overview',
            status: webComponentStatuses['pie-textarea'],
        },
        {
            resource: resourceTypes.VUE,
            link: 'https://vue.pie.design/?path=/story/components-atoms-f-form-field--textarea-component',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/textarea/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ],
    [
        { componentName: 'Thumbnail' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=315-28057',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=34-259',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=315-28057',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=34-259',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-thumbnail--overview',
            status: webComponentStatuses['pie-thumbnail'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/avatar/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Toast' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=193-32270',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=35-260',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=193-32270',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=35-260',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-toast--overview',
            status: webComponentStatuses['pie-toast'],
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/toast/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.BETA,
        }
    ],
    [
        { componentName: 'Tooltip' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=287-32323',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=35-261',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=287-32323',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=35-261',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            link: 'https://snacks.takeaway.com/portal/components/tooltip/',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.TBC,
        }
    ],
    [
        { componentName: 'Uploader' },
        {
            resource: resourceTypes.WEB_COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/?node-id=1573-114528',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/?node-id=35-262',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_COMPONENT,
            link: 'https://www.figma.com/design/DoilInMsO5L6Rrui7IWgl3/?node-id=1573-114528',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.APP_DOCUMENTATION,
            link: 'https://www.figma.com/design/WxPDYsTycTVhPac6nCbbgN/?node-id=35-262',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.VUE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.REACT,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_JUST_UI,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.IOS_PIE,
            status: statusTypes.NOT_APPLICABLE,
        },
        {
            resource: resourceTypes.ANDROID_PIE,
            status: statusTypes.NOT_APPLICABLE,
        }
    ]
];

module.exports = {
    rows,
    webHeadings,
    appHeadings,
};
