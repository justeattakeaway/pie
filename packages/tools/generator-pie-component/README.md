<p align="center">
  <a href="https://github.com/justeattakeaway/pie/tree/main/packages/tools/generator-pie-component">
    <img alt="Source code" src="https://img.shields.io/badge/Source%20code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://www.npmjs.com/package/@justeattakeaway/generator-pie-component">
    <img alt="npm version" src="https://img.shields.io/npm/v/@justeattakeaway/generator-pie-component?style=for-the-badge&color=ff8000&logo=npm&logoColor=white&label=npm">
  </a>
  <a href="https://github.com/justeattakeaway/pie/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/@justeattakeaway/generator-pie-component?style=for-the-badge">
  </a>
</p>

# generator-pie-component

`generator-pie-component` is a generator for Pie Web Components.

---

## Usage

1. [Installation](#installation)
2. [Generate the component](#generating-a-new-component)
3. [Set up Percy visual regression testing](#setting-up-visual-regression-testing)
4. [Export sub components](#exporting-sub-components)

### Installation

Build the generator package locally (it is recommended you force the build)

```sh
$ yarn build --filter=generator-pie-component --force
```

### Generating a new component

To run the generator, use this command from the root directory within the monorepo:

```sh
$ npx yo @justeattakeaway/pie-component
```

An interactive prompt should now be displayed asking for a component name.

Once you have completed all the prompts, your scaffolded component will be generated! 🎉

### Setting up Visual Regression Testing:

- Create a Percy project for the component on the Percy website.
- From the "Project settings" page, copy the project token value.
- You need to add the new token value as a repository secret in GitHub. It must be named `PERCY_TOKEN_PIE_COMPONENT_NAME`. Visual tests will not work/run if this is not set up correctly.

### Exporting Sub-Components

The generator *does not* currently support automatic generation of sub-components. To add a sub-component, follow these steps:

- Create a folder inside the component's src directory with the sub-component’s name (e.g., pie-breadcrumb-item).
- Add the following files to the new folder:
  - [index.ts](https://gist.github.com/raoufswe/8ed0f8aa148755520729c1cf732f2d70#indexts) – contains the component logic.
  - [defs.ts](https://gist.github.com/raoufswe/8ed0f8aa148755520729c1cf732f2d70#defsts) – provides the component types.
  - [defs-react.ts](https://gist.github.com/raoufswe/8ed0f8aa148755520729c1cf732f2d70#defs-reactts) – provides the React wrapper type.
- Modify the component's `vite.config.ts` to match the following:

```
export default viteConfig({
    build: {
        lib: {
            entry: {
                'pie-sub-component/index': 'src/pie-sub-component/index.ts',
                'pie-sub-component/react': 'src/pie-sub-component/react.ts',
            },
        },
    },
    dtsConfig: {
        entryRoot: 'src',
        rollupTypes: false,
    },
});
```

- Run `npx add-components` from the monorepo root to update the `webc` package exports.

## Local development

Install the dependencies. Note that this, and the following commands below, should be run from the **root of the monorepo**:

```bash
yarn
```

To build the `generator-pie-component` package, run the following command:

```bash
yarn build --filter=generator-pie-component
```

You can also build the component in `watch` mode if desired with the following command:

```bash
yarn watch --filter=generator-pie-component
```

## Contributing

In order to contribute to the `generator-pie-component`, it's advised to link your local build of the generator to Yeoman.

To do this, run `yarn link` from the root of the `generator-pie-component` folder in the mono-repo.

Once you have done this, running `npx yo @justeattakeaway/pie-component` will run your local copy of the generator (rather than the version installed globally via NPM/Yarn).
