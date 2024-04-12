import type { Globals, Parameters, StoryContext } from '@storybook/types';

export interface StorybookContext extends StoryContext {
    component: string;

    globals: Globals & {
        writingDirection: 'ltr' | 'rtl' | 'auto';
    };

    parameters: Parameters & {
        componentStatusPosition: 'top' | 'bottom';
    }
}
