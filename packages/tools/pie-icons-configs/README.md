# pie-icons-configs

This package provides shared configurations and utility functions used to be the single source of truth for the icon packages' behavior (`pie-icons-react` and `pie-icons-vue`).

It helps to determine which classes are assigned to different component sizes and ensure consistent sizing according to the pre-determined shared rules.

`pie-icons-configs` is an internal package, therefore it's not intended for end-consumer usage.

## Usage

Install the package:

`yarn add --dev @justeattakeaway/pie-icons-configs`

Import the desired config or function from the common config file:

`import { sizeToClassMap } from '@justeattakeaway/pie-icons-configs'`

If you are using a framework, use the dedicated export for it, described below.

### React

`import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react'`

### Vue

`import { updateContextData } from '@justeattakeaway/pie-icons-configs/configs-vue'`


## API Reference

Check the JSDocs attached to each of the utility functions if you want to know more about them.

## Testing

The tests were added to ensure the utility functions behavior consistency.

You can run the tests with `yarn test`.


## Contributing

Before starting please read our [contributing guide](https://vue.pie.design/?path=/story/documentation-getting-started-contributing--page)
