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

### Installation

Install `yeoman` globally:

```sh
$ npm install --global yo
```

Build the generator package locally
```sh
$ yarn build --filter=generator-pie-component
```

### Running the generator

To run the generator, use this command from the root directory within the monorepo:

```sh
$ yo @justeattakeaway/pie-component
```

An interactive prompt should now be displayed asking for a component name.

Once you have completed all the prompts, your scaffolded component will be generated 🎉

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
