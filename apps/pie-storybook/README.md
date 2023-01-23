# pie-storybook

Storybook setup for Web Components development

## Local development usage

Install dependencies at the monorepo root

```bash
yarn
```

`cd` into Storybook folder and start it in development mode

```bash
cd apps/pie-storybook/
yarn dev
```

Story files are stored at the `apps/pie-storybook/stories` folder and follow the naming convention described below:

`<component-name>.stories.ts`

Create a static build, open a local server at `http://localhost:3000`

```bash
yarn build && yarn serve
```

## Helpful links

- [How to write stories](https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction)

- [Story Args](https://storybook.js.org/docs/7.0/web-components/writing-stories/args)

- [Stories for multiple components](https://storybook.js.org/docs/7.0/web-components/writing-stories/stories-for-multiple-components)

- [TypeScript integration](https://storybook.js.org/docs/7.0/web-components/configure/typescript)