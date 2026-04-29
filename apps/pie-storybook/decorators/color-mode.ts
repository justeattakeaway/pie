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

export const ColorMode = (story: () => TemplateResult) => {
    const channel = addons.getChannel();

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

            channel.emit(UPDATE_GLOBALS, {
                globals: {
                    backgrounds: { value: BACKGROUND_VALUES[colorMode] },
                },
            });
        });
    }

    return story();
};
