import { TemplateResult } from 'lit';
import { StorybookContext } from '../interfaces/storybook-context';

export const WritingDirection = (story: () => TemplateResult, storybookContext: StorybookContext) => {
    const { globals } = storybookContext;
    const writingDirection = ['ltr', 'rtl', 'auto'].includes(globals.writingDirection)
        ? globals.writingDirection
        : 'auto';

    document.documentElement.setAttribute('dir', writingDirection);

    return story();
};
