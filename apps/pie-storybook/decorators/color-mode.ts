import { type TemplateResult } from 'lit';
import { addons } from 'storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { UPDATE_GLOBALS } from 'storybook/internal/core-events';

export type ColorMode = 'light' | 'dark';

// In Storybook v10, UPDATE_GLOBALS backgrounds.value must be the option key name
// (matching a key in the `options` object in backgrounds.ts), not a raw colour value.
// The internal decorator resolves the key → colour via options[backgroundName].
const BACKGROUND_VALUES: Record<ColorMode, string> = {
    light: 'light (container-default)',
    dark: 'dark (container-dark)',
};

let initialized = false;
let currentColorMode: ColorMode | null = null;
let storyBackgroundOverride: string | undefined;

/**
 * Returns true when Storybook is running in browser-testing mode
 * (visual regression / Playwright). In that environment, per-story
 * background selections must be preserved — the global dark-mode
 * background override is skipped so stories that declare their own
 * `parameters.backgrounds.default` keep the correct backdrop.
 */
const isBrowserTestingRuntime = (): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }

    const { hostname, port } = window.location;

    return (hostname === 'localhost' && port === '6007') ||
        hostname === 'webc-testing.pie.design' ||
        /pr\d+-storybook-testing\.pie\.design$/.test(hostname);
};

export const ColorMode = (
    story: () => TemplateResult,
    context?: { parameters?: { backgrounds?: { default?: string } } },
) => {
    const channel = addons.getChannel();

    // Track per-story background so the event handler can honour it
    // in browser-testing mode instead of forcing the color-mode background.
    storyBackgroundOverride = context?.parameters?.backgrounds?.default;

    if (!initialized) {
        initialized = true;

        channel.on(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
            const colorMode: ColorMode = isDark ? 'dark' : 'light';

            // Guard: only update when the color mode actually changes
            // to prevent a re-render loop with storybook-dark-mode addon.
            // Without this, the cycle is: DOCS_RENDERED -> renderTheme -> DARK_MODE_EVENT
            // -> UPDATE_GLOBALS -> re-render -> DOCS_RENDERED -> ...
            if (colorMode === currentColorMode) {
                return;
            }

            currentColorMode = colorMode;
            document.documentElement.setAttribute('data-color-mode', colorMode);

            // In browser-testing visual runs, use the story's own background
            // if defined; otherwise fall back to the color-mode default.
            // In normal Storybook, always mirror the color-mode background.
            const backgroundValue = isBrowserTestingRuntime() && storyBackgroundOverride
                ? storyBackgroundOverride
                : BACKGROUND_VALUES[colorMode];

            channel.emit(UPDATE_GLOBALS, {
                globals: {
                    backgrounds: { value: backgroundValue },
                },
            });
        });
    }

    return story();
};
