import { render } from 'lit-html';
import '@justeattakeaway/pie-css';
import '@justeattakeaway/pie-button';
import * as Stories from 'pie-storybook/stories/pie-button.stories';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    <div id="stories"></div>
</div>
`;

function renderStory (storyObj, storyName, container) {
    render(storyObj.render(storyObj.args), container);
}

function renderStories (stories, containerId = 'stories') {
    const filteredStories = Object.keys(stories)
        .reduce((acc, key) => {
            const storyObj = Stories[key];
            const hasExpectedKeys = storyObj.args && storyObj.render;

            if (hasExpectedKeys) {
                acc[key] = storyObj;
            }

            return acc;
        }, {});

    const container = document.querySelector<HTMLDivElement>(`#${containerId}`);
    if (!container) {
        throw new Error(`Could not find container with id ${containerId}`);
    }

    const nodes:Array<HTMLDivElement> = Object.keys(filteredStories)
        .reduce((acc, storyName) => {
            const targetNode:HTMLDivElement = document.createElement('div');
            targetNode.setAttribute('class', `${storyName} story`);

            try {
                const storyObj = stories[storyName];
                renderStory(storyObj, storyName, targetNode);
                acc.push(targetNode);
            } catch (err) {
                console.error(`Could not render story ${storyName}`, err);
                // TODO: Provide proper error handling strategy
            }

            return acc;
        }, [] as Array<HTMLDivElement>);

    container.append(...nodes);
}

renderStories(Stories);
