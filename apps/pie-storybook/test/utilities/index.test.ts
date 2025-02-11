import { describe, it, expect } from 'vitest';
import { html, render, type TemplateResult } from 'lit';
import { createStory, createVariantStory } from '../../utilities/index';
import { type StoryOptions } from '../../types/StoryOptions';
import CUSTOM_BACKGROUNDS from '../../.storybook/backgrounds';
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

        const actualTemplateResult = result.render(defaultArgs);

        const expectedTemplateResult: Partial<TemplateResult> = {
            strings: Object.assign(['\n  <pie-component size=', ' variant=', '></pie-component>\n']),
            values: ['medium', 'primary'],
        };

        // Compare the key properties of the TemplateResult
        expect(actualTemplateResult.strings).toEqual(expectedTemplateResult.strings);
        expect(actualTemplateResult.values).toEqual(expectedTemplateResult.values);
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

        // Check if argTypes are applied
        expect(story.argTypes).toEqual(storyOpts.argTypes);
    });

    it('should apply custom background color from CUSTOM_BACKGROUNDS', () => {
        const propOptions = {
            size: ['small'],
            variant: ['primary']
        };

        const story = createVariantStory(template, propOptions, { bgColor: 'background-subtle' });
        const renderResult = story.render();

        const container = document.createElement('div');
        render(renderResult, container);

        const templateContainer = container.querySelector('.template-container');
        const computedStyle = window.getComputedStyle(templateContainer!);
        
        const backgroundColor = computedStyle.getPropertyValue('--background-color');
        expect(backgroundColor).toBeTruthy();
        expect(backgroundColor).not.toBe('#ffffff');
        
        const matchingBackground = CUSTOM_BACKGROUNDS.values.find(bg => bg.name === 'background-subtle');
        expect(backgroundColor).toBe(matchingBackground?.value);
    });

    it('should fallback to default white background when invalid bgColor is provided', () => {
        const propOptions = {
            size: ['small'],
            variant: ['primary']
        };

        // @ts-expect-error - Testing invalid background color
        const story = createVariantStory(template, propOptions, { bgColor: 'background-invalid' });
        const renderResult = story.render();

        const container = document.createElement('div');
        render(renderResult, container);

        const templateContainer = container.querySelector('.template-container');
        const computedStyle = window.getComputedStyle(templateContainer!);
        
        // Should fallback to default white background
        const backgroundColor = computedStyle.getPropertyValue('--background-color');
        expect(backgroundColor).toBe('#ffffff');
    });

    it('should use default white background when bgColor is undefined', () => {
        const propOptions = {
            size: ['small'],
            variant: ['primary']
        };

        const story = createVariantStory(template, propOptions);
        const renderResult = story.render();

        const container = document.createElement('div');
        render(renderResult, container);

        const templateContainer = container.querySelector('.template-container');
        const computedStyle = window.getComputedStyle(templateContainer!);
        
        const backgroundColor = computedStyle.getPropertyValue('--background-color');
        expect(backgroundColor).toBe('#ffffff');
    });
});
