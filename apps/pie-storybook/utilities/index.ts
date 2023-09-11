import { TemplateFunction, StoryOptions } from '../types/StoryOptions';

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
