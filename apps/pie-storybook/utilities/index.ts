import { TemplateResult } from 'lit';
import { StoryOptions } from '../types/StoryOptions';

export type TemplateFunction<T> = (props: T) => TemplateResult;

export const createStory = <T>(templateFunc: TemplateFunction<T>, defaultArgs: T) => (
    propOverrides?: Partial<T>,
    storyOpts?: StoryOptions,
) => ({
    render: (args: T) => templateFunc(args),
    args: {
        ...defaultArgs,
        ...propOverrides,
    },
    parameters: {
        backgrounds: {
            ...(storyOpts?.bgColor ? { default: storyOpts.bgColor } : {}),
        },
    },
});
