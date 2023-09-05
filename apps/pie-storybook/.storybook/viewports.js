const CUSTOM_VIEWPORTS = {
    tiny: {
        name: 'Tiny (375px – iPhone X)',
        styles: {
            width: '375px',
            height: '812px'
        },
        type: 'mobile'
    },
    tinyPlus: {
        name: 'Tiny (390px – iPhone 12)',
        styles: {
            width: '390px',
            height: '844px'
        },
        type: 'mobile'
    },
    narrow: {
        name: 'Narrow (414px – iPhone XR)',
        styles: {
            width: '414px',
            height: '896px'
        },
        type: 'mobile'
    },
    narrowPlus: {
        name: 'Narrow (428px – iPhone 12 Pro Max)',
        styles: {
            width: '428px',
            height: '926px'
        },
        type: 'mobile'
    },
    narrowMid: {
        name: 'Narrow/Mid (600px – LG tablet)',
        styles: {
            width: '600px',
            height: '960px'
        },
        type: 'mobile'
    },
    narrowMidPlus: {
        name: 'Narrow/Mid (667px – Apple iPhone SE 2020 Landscape)',
        styles: {
            width: '667px',
            height: '375px'
        },
        type: 'mobile'
    },
    mid: {
        name: 'Mid (768px – Apple iPad Mini / Samsung Fold)',
        styles: {
            width: '768px',
            height: '1024px'
        },
        type: 'tablet'
    },
    midPlus: {
        name: 'Mid (820px – iPad Air 2020)',
        styles: {
            width: '820px',
            height: '1180px'
        },
        type: 'tablet'
    },
    wide: {
        name: 'Wide (1025px – Tablet Landscape)',
        styles: {
            width: '1025px',
            height: '800px'
        },
        type: 'desktop'
    },
    widePlus: {
        name: 'Wide (1194px – iPad 11 Pro Landscape)',
        styles: {
            width: '1194px',
            height: '834px'
        },
        type: 'desktop'
    },
    huge: {
        name: 'Huge (1280px – MacBook Pro 13" / Surface Pro 3)',
        styles: {
            width: '1280px',
            height: '800px'
        },
        type: 'desktop'
    },
    hugePlus: {
        name: 'Huge (1536px – MacBook Pro 16")',
        styles: {
            width: '1536px',
            height: '960px'
        },
        type: 'desktop'
    }
};

export default CUSTOM_VIEWPORTS;
