const webComponentStatuses = require('@justeattakeaway/pie-monorepo-utils/dist/component-statuses.json');
const resourceTypes = require('./_data/resourceTypes');
const statusTypes = require('./_data/statusTypes');

const webHeadings = [
    {
        title: 'Component',
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
        title: 'Component',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1410&mode=design&t=RgSr9spTcPyOytpv-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1410&mode=design&t=fi48JZ4cPeb7qkf2-0',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=981-5354&mode=design&t=eHntVWyoMgUqEPSN-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=981-5354&mode=design&t=eGcAax5wgCPMal5i-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/assistive-text--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=44260-73570&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=36949-318262&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=38419-73358&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=33780-373521&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=9832-49773&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=9832-49773&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2425-1312&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2425-1312&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/components-breadcrumb--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=727-0&mode=design&t=CQEMbUPtF2XxT6Nu-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=727-0&mode=design&t=P7rOGYbNedINS79O-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/button--primary',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-326&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-326&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/card--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=21877-137791&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=21877-137791&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=835-3026&mode=design&t=6BvgpFnD3pPWQayd-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-382941&mode=design&t=aOGQYXIwnBhahFPU-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/checkbox--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/aD4m0j97Ruw8Q4S5lED2Bl/Checkbox-audit?node-id=6312-11778&t=7rNtILex9xojH5wx-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/aD4m0j97Ruw8Q4S5lED2Bl/Checkbox-audit?node-id=9938-14138&t=8Cx93DX9PwzEgNJS-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/checkbox-group--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=733-1358&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=733-1358&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/chip--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/Rqz8KHogVsGCS4j0nDueNo/[Core]-Patterns-%E2%9A%AA%EF%B8%8F-[PIE-2.0]?type=design&node-id=1599-41380&mode=design&t=8G38n2fCOYB5Bd2d-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/Rqz8KHogVsGCS4j0nDueNo/[Core]-Patterns-%E2%9A%AA%EF%B8%8F-[PIE-2.0]?type=design&node-id=2755-20043&mode=design&t=8G38n2fCOYB5Bd2d-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/cookie-banner--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2308-0&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2308-0&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=19180-143092&mode=design&t=6BvgpFnD3pPWQayd-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=35122-293317&mode=design&t=aOGQYXIwnBhahFPU-4',
            status: statusTypes.PLANNED,
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=35122-283303&mode=design&t=aOGQYXIwnBhahFPU-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=19207-143051&mode=design&t=6BvgpFnD3pPWQayd-4',
            status: statusTypes.PLANNED,
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=746-1146&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            status: statusTypes.PLANNED,
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1227&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            status: statusTypes.PLANNED,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/divider--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=41132-65796&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=35988-277118&mode=design',
            status: statusTypes.PLANNED,
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=820-0&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=981-5350&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=981-5350&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-317&mode=design&t=TQwLuC8jGD8UIgAs-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-317&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/icon-button--primary',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2163-13005&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2163-13005&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/link--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14779-121656&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14779-121656&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14779-121656&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14779-121656&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=5491-23578&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=5491-23578&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=1098-1144&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=1098-1144&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/modal--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=782-1302&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=782-1302&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/notification--neutral',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14449-108513&mode=design&t=6BvgpFnD3pPWQayd-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-398251&mode=design&t=aOGQYXIwnBhahFPU-4',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=1729-4184&mode=design&t=6BvgpFnD3pPWQayd-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-397795&mode=design&t=aOGQYXIwnBhahFPU-4',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=1860-14678&mode=design&t=6BvgpFnD3pPWQayd-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-398034&mode=design&t=aOGQYXIwnBhahFPU-4',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14460-114966&mode=design&t=6BvgpFnD3pPWQayd-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-398424&mode=design&t=aOGQYXIwnBhahFPU-4',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2373-13285&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2373-13285&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1484&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1484&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2420-13282&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2420-13282&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=3919-19442&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=3919-19442&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=835-2959&mode=design&t=6BvgpFnD3pPWQayd-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-383138&mode=design&t=aOGQYXIwnBhahFPU-4',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/radio--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=198-33663',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/design/OOgnT2oNMdGFytj5AanYvt/%5BCore%5D-Web-Component-Documentation-%5BPIE-3%5D?node-id=29-22',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/radio-group--default',
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
        { componentName: 'Rating' },
        {
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=3472-16894&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=3472-16894&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-319&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-319&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1329&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1329&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/select--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14115-101942&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=14115-101942&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=3762-19209&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=24738-224311&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=24738-224311&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2236-12979&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-329&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-329&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/spinner--brand',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=882-3264&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=882-3264&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/switch--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2087-13001&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=2087-13001&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-328&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-328&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/tag--neutral',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-323&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-323&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/text-input--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=972-5408&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=972-5408&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/textarea--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=15875-125982&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=15875-125982&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/thumbnail--default',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-324&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/sjkhCbCcv7t4QkDrz7g0Xx/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=7934-11960&node-type=frame&t=SxRV1mF3FT7S4lAP-0',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.WEB_COMPONENTS,
            link: 'https://webc.pie.design/?path=/story/toast--neutral',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-325&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=742-325&mode=design',
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
            resource: resourceTypes.COMPONENT,
            link: 'https://www.figma.com/file/R2rBfzJP0hG0MZorq6FLZ1/%5BCore%5D-Components-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1368&mode=design',
            status: statusTypes.STABLE,
        },
        {
            resource: resourceTypes.DOCUMENTATION,
            link: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=876-1368&mode=design',
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
