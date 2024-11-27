import { describe, it, expect } from 'vitest';
import { html, render } from 'lit';
import { createStory, createVariantStory } from '../../utilities/index';
import { type StoryOptions } from '../../types/StoryOptions';

type ComponentProps = {
  size: string;
  variant: string;
};

const template: (props: ComponentProps) => ReturnType<typeof html> = ({ size, variant }) => html`
  <pie-component size=${size} variant=${variant}></pie-component>
`;

describe('createStory', () => {
    it('should create a story with default args', () => {
        const defaultArgs: ComponentProps = { size: 'medium', variant: 'primary' };
        const story = createStory(template, defaultArgs);

        const result = story();
        expect(result.args).toEqual(defaultArgs);
        expect(result.render(defaultArgs)).toHaveProperty('strings');
    });

    it('should override default args with prop overrides', () => {
        const defaultArgs: ComponentProps = { size: 'medium', variant: 'primary' };
        const story = createStory(template, defaultArgs);

        const propOverrides = { variant: 'secondary' };
        const result = story(propOverrides);
        expect(result.args).toEqual({ size: 'medium', variant: 'secondary' });
    });

    it('should apply story options correctly', () => {
        const defaultArgs: ComponentProps = { size: 'medium', variant: 'primary' };
        const storyOpts: StoryOptions = {
            bgColor: 'background-subtle',
        };
        const story = createStory(template, defaultArgs);

        const result = story({}, storyOpts);
        expect(result.parameters.backgrounds.default).toBe('background-subtle');
    });
});

describe('createVariantStory', () => {
    it('should generate all combinations of prop options', () => {
        const propOptions = {
            size: ['small', 'medium', 'large'],
            variant: ['primary', 'secondary'],
        };

        const story = createVariantStory(template, propOptions);
        const renderResult = story.render();

        // Render the template to a DOM element
        const container = document.createElement('div');
        render(renderResult, container);

        // Count the number of pie-component elements
        const renderedCombinations = container.querySelectorAll('pie-component');
        const expectedCombinationsCount = propOptions.size.length * propOptions.variant.length;
        expect(renderedCombinations.length).toBe(expectedCombinationsCount);
    });

    it('should apply story options correctly', () => {
        const propOptions = {
            size: ['small'],
            variant: ['primary'],
        };

        const storyOpts: StoryOptions = {
            bgColor: 'background-subtle',
            argTypes: { size: { control: 'text' } },
        };

        const story = createVariantStory(template, propOptions, storyOpts);

        // Check if the parameters include the background color
        expect(story.parameters.backgrounds.default).toBe('background-subtle');

        // Check if argTypes are applied
        expect(story.argTypes).toEqual(storyOpts.argTypes);
    });
});
