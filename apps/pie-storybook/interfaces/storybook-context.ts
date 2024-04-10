import type { Parameters, StoryContext } from '@storybook/types';

export interface StorybookContext extends StoryContext {
    globals: {
        writingDirection: 'ltr' | 'rtl' | 'auto';
    };
    component: string;
    parameters: Parameters & {
        componentStatusPosition: 'top' | 'bottom';
    }
}
