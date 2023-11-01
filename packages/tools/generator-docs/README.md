# Example of Includes using MDX

### How to run
Run the following command, this will output an .md file named `GENERATED.md` that includes the `reusable-content.md` content

```bash
yarn run transform
```

### How it works

`MDX`is a library that allows using JSX withing md files. We may want to use this features. But one feature interesting to us is the posibility of importing other md files.

Unfortunatelly `MDX` by iself does not seem to support bundling into `md` files, but there is a small library `mdx-to-md` that enables that. And that is what this example uses.
