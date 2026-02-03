import { type TemplateResult } from 'lit';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { UPDATE_GLOBALS } from '@storybook/core-events';
import tokens from '@justeat/pie-design-tokens/dist/tokens.json';

export type ColorMode = 'light' | 'dark';

const { alias } = tokens.theme.jet.color;
const BACKGROUND_VALUES: Record<ColorMode, string> = {
    light: alias.default['container-default'],
    dark: alias.default['container-dark'],
};

let initialized = false;

export const ColorMode = (story: () => TemplateResult) => {
    const channel = addons.getChannel();

    if (!initialized) {
        initialized = true;

        channel.on(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
            const colorMode: ColorMode = isDark ? 'dark' : 'light';

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
