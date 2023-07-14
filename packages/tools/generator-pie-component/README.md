<div align="center">

# generator-pie-component

 `generator-pie-component` is a generator for Pie Web Components.

</div>

---
## Usage

### Installation

First, install `yeoman` globally if you haven't already done so:

```sh
$ npm install --global yo
```

And then install the component generator:

```sh
$ npm install --global @justeattakeaway/generator-pie-component
```

### Running the generator

To run the generator, use this command from any directory within the monorepo:

```sh
yo @justeattakeaway/pie-component
```

An interactive prompt should now be displayed asking for a Component name.

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

you can also build the component in `watch` mode if desired with the following command


```bash
yarn watch --filter=generator-pie-component
```

## Contributing

In order to contribute to the `generator-pie-component`, it's advised to link your local build of the generator to Yeoman.

To do this, run `yarn link` from the root of the `generator-pie-component` folder in the mono-repo.

Once you have done this, running `yo @justeattakeaway/generator-pie-component` will run your local copy of the generator (rather than the version installed globally via NPM).

