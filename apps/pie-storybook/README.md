# @justeattakeaway/pie-storybook

Storybook setup for Web Components development

## Local development usage

Install dependencies at the monorepo root

```bash
yarn
```

`cd` into the monorepo root folder and start Storybook in development mode: `yarn dev --filter=@justeattakeaway/pie-storybook`

If you are working on a component, make sure storybook is running, open a new terminal and run `yarn watch` from the root. Any changes you make to a component should automatically compile to it's associated `dist` folder when saved and will appear in storybook.

Story files are stored at the `apps/pie-storybook/stories` folder and follow the naming convention described below:

`<component-name>.stories.ts`

To create a static build run `yarn build --filter=@justeattakeaway/pie-storybook`.

To build Storybook and open a local server for it run `yarn serve --filter=@justeattakeaway/pie-storybook`.

## Helpful links

- [How to write stories](https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction)

- [Story Args](https://storybook.js.org/docs/7.0/web-components/writing-stories/args)

- [Stories for multiple components](https://storybook.js.org/docs/7.0/web-components/writing-stories/stories-for-multiple-components)

- [TypeScript integration](https://storybook.js.org/docs/7.0/web-components/configure/typescript)
