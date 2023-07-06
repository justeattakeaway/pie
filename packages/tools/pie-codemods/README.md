# Demo

This branchs code is able to remove all console.logs from the codebase.
This is just a basic example.

# Global dependencies

For now, there are 2 global dependencies you need to install:

and

`npx @codeshift/cli init --package-name css-codemod --preset update-css-api`

# Commands

At this repos root

Native javascript:

`jscodeshift -t ./codemod/my-transform.js ./demoapp/src/index.js`

Vue files:

`jscodeshift -t ./codemod/my-transform.js ./demoapp/src/Demo.vue`

TS Files:

`jscodeshift -t ./codemod/index.js ./demoapp/src/buttonWebC/src/index.ts --extensions=ts --parser=ts`

CSS Files:

`npx @codeshift/cli -t ./codemod/css.js -e css ./demoapp/src/styles.css`