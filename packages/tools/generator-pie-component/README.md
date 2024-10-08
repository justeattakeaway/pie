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
5. [Set up the project label for GitHub](#setting-up-the-project-label-for-github)

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
- Update the component token environment variable in `github/workflows/ci.yml` as follows:

```sh
  PERCY_TOKEN_PIE_COMPONENT_NAME: ${{ secrets.PERCY_TOKEN_PIE_COMPONENT_NAME }}
```

- Now you need to add this token as a repository secret in GitHub. It must be named `PERCY_TOKEN_PIE_COMPONENT_NAME` and the value should be the Percy token for the component. Visual tests will not work/run if this is not set up correctly.

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
