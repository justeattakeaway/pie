<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/generator-pie-component">
    <img alt="Currently released NPM version" src="https://img.shields.io/npm/v/@justeattakeaway/generator-pie-component.svg">
  </a>
</p>

# generator-pie-component

`generator-pie-component` is a generator for Pie Web Components.

---

## Usage

1. [Installation](#installation)
2. [Generate the component](#generating-a-new-component)
3. [Add the component to storybook](#setting-up-storybook)
4. [Set up Percy visual regression testing](#setting-up-visual-regression-testing)
5. [Set up the project label for Github](#setting-up-the-project-label-for-github)

### Installation

Install `yeoman` globally:

```sh
$ npm install --global yo
```

Build the generator package locally (it is recommended you force the build)

```sh
$ yarn build --filter=generator-pie-component --force
```

### Generating a new component

To run the generator, use this command from the root directory within the monorepo:

```sh
$ yo @justeattakeaway/pie-component
```

An interactive prompt should now be displayed asking for a component name.

Once you have completed all the prompts, your scaffolded component will be generated 🎉

_Note: If this step fails, ensure you have installed the repository dependencies with `yarn`. Otherwise this (and any other commands) will fail. You will also need to list the component as a dependency in the storybook package.json._

### Setting up Storybook:

- Add the component to the storybook package.json dependencies using the `workspace` syntax:

```json
"@justeattakeaway/pie-{{COMPONENT_NAME}}": "workspace:*",

```

### Setting up Visual Regression Testing:

- Create a Percy project for the component on the Percy website.
- Update the test:visual command in package.json to the following:

```sh
"test:visual": "run -T cross-env-shell PERCY_TOKEN=${PERCY_TOKEN_COMPONENT_NAME} percy exec --allowed-hostname cloudfront.net -- npx playwright test -c ./playwright-lit-visual.config.ts",
```
- Add the token environment variable to `github/workflows/ci.yml` as follows:

```sh
  PERCY_TOKEN_COMPONENT_NAME: ${{ secrets.PERCY_TOKEN_COMPONENT_NAME }}
```

### Setting up the project label for Github:

- Create a label for the component in the GitHub UI
- Add the new label to `project-labeler.yml` under the `Component projects` section

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

Once you have done this, running `yo @justeattakeaway/generator-pie-component` will run your local copy of the generator (rather than the version installed globally via NPM/Yarn).
