---
eleventyNavigation:
    key: engineering-structure
    title: Structure
    parent: engineers-getting-started
    order: 2
---

## PIE Component Systems

Currently, JET has several officially supported component systems that implement PIE.

- [Fozzie](https://vue.pie.design/) – a set of **Vue components** created by the legacy Just Eat web team
- [Snacks](https://snacks.takeaway.com/) – a set of **React components** created by the legacy Takeaway design system team
- [Skip PIE Project](https://react.pie.design/) – a set of **React components** created by the Skip web team

We are also currently building the [PIE Web Component System](https://www.pie.design/storybook). The long-term aim will be to migrate JET teams over to this Web Component System, so we have **one single source of truth** for our global PIE components.

For more details on Fozzie, Snacks and Skip PIE, please check out the **documentation portals** linked above.

{% card {
  items: [
        {
          linkText: "Vue",
          href: "https://vue.pie.design/",
          src: "../../../assets/img/engineers/vue@2x.png",
          shouldOpenInNewTab: true
        },
        {
          linkText: "React for Takeaway.com",
          href: "https://snacks.takeaway.com/",
          src: "../../../assets/img/engineers/react@2x.png",
          shouldOpenInNewTab: true
        },
        {
          linkText: "React for SkipTheDishes",
          href: "https://react.pie.design/",
          src: "../../../assets/img/engineers/react@2x.png",
          shouldOpenInNewTab: true
        }
    ]
} %}

---

## PIE project structure

### The PIE Monorepo

As we look to consolidate our PIE components and tools, we wanted to ensure that all globally created components, tools and standards lived in a single place. That place is [the PIE Monorepo](https://github.com/justeattakeaway/pie).

{% notification {
type: "information",
message: "For a detailed description of monorepos and their pros and cons, check out [this useful explainer on Wikipedia](https://en.wikipedia.org/wiki/Monorepo)."
} %}

The PIE Monorepo is currently organised into two distinct sections; **apps and packages**.

#### The Apps folder

Projects that live in the `/apps` folder are self-contained web applications that can be published and hosted on a server.

For instance, the code for the `pie.design` documentation site lives inside the apps folder, as does the PIE Web Component Storybook.

#### The Packages folder

The `/packages` folder contains all the shareable packages that can be installed and used by engineers across JET (available via NPM).

This folder is currently split into two categories; **Components** and **Tools**.

The `/packages/components` directory is where our global PIE Web Component packages can be found, such as `pie-button`.

The `/packages/tools` directory contains helper packages that provide a specific piece of functionality used by components or more generally across the monorepo. Examples include the PIE icon packages – [pie-icons](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons), [pie-icons-vue](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons-vue) and [pie-icons-react](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons-react) – and extendable config for tools such as [Stylelint](https://github.com/justeattakeaway/pie/tree/main/packages/tools/stylelint-config-pie) and [ESlint](https://github.com/justeattakeaway/pie/tree/main/packages/tools/eslint-config-pie)
