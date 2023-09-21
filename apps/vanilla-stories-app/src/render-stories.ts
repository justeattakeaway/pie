import { render } from 'lit-html';

function renderStory (storyObj:any, container:HTMLDivElement) {
    render(storyObj.render(storyObj.args), container);
}

export function renderStories (stories:any, containerId = 'stories') {
    const filteredStories = Object.keys(stories)
      .reduce((acc, key) => {
          const storyObj = stories[key];
          const hasExpectedKeys = storyObj.args && storyObj.render;

          if (hasExpectedKeys) {
              acc[key] = storyObj;
          }

          return acc;
      }, {} as any);

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
              renderStory(storyObj, targetNode);
              acc.push(targetNode);
          } catch (err) {
              console.error(`Could not render story ${storyName}`, err);
              // TODO: Provide proper error handling strategy
          }

          return acc;
      }, [] as Array<HTMLDivElement>);

    container.append(...nodes);
}
