---
eleventyNavigation:
    key: engineering-structure
    title: Structure
    parent: engineers-getting-started
    order: 2
shouldShowContents: true
---

## PIE Component Systems

Currently, JET has several officially supported component systems that implement PIE.

- [PIE Web Components](https://webc.pie.design/) – Our flagship **web component library**, designed to work seamlessly with any tech stack.
- [Snacks](https://snacks.takeaway.com/) – a set of **React components** created by the legacy Takeaway design system team
- [Fozzie](https://vue.pie.design/) – a set of **Vue components** created by the legacy Just Eat web team
- [Skip PIE Project](https://react.pie.design/) – a set of **React components** created by the Skip web team

The long-term aim is to migrate JET teams over to this Web Component System, so we have **one single source of truth** for our global PIE components.

For more details on Fozzie, Snacks and Skip PIE, please check out the **documentation portals** linked above.

{% card {
  items: [
        {
          linkText: "Web Components",
          href: "https://webc.pie.design/",
          src: "../../../assets/img/engineers/webComponents.png",
          shouldOpenInNewTab: true
        },
        {
          linkText: "Vue",
          href: "https://vue.pie.design/",
          src: "../../../assets/img/engineers/vue.png",
          shouldOpenInNewTab: true
        },
        {
          linkText: "React for Takeaway.com",
          href: "https://snacks.takeaway.com/",
          src: "../../../assets/img/engineers/react.png",
          shouldOpenInNewTab: true
        },
        {
          linkText: "React for SkipTheDishes",
          href: "https://react.pie.design/",
          src: "../../../assets/img/engineers/react.png",
          shouldOpenInNewTab: true
        }
    ]
} %}

---

##  Which library should I use?

### Latest tech stack and Vanilla JS

{% contentLayout %}
    {% tag {
    label: "Next 14",
    variant: "blue"
    } %}
    {% tag {
    label: "React 18",
    variant: "blue"
    } %}
    {% tag {
    label: "Nuxt 3",
    variant: "blue"
    } %}
    {% tag {
    label: "Vue 3",
    variant: "blue"
    } %}
    {% tag {
    label: "Vanilla JS",
    variant: "blue"
    } %}
{% endcontentLayout %}

If you are working with latest stack both in React and Vue ecosystems, we recommend to go straight away with
[PIE Web Components](/engineers/web-components/).

### Next 13 and earlier versions

{% contentLayout %}
    {% tag {
    label: "Next 13",
    variant: "blue"
    } %}
    {% tag {
    label: "Next 10",
    variant: "blue"
    } %}
{% endcontentLayout %}

You can use [PIE Web Components](/engineers/web-components/) for Next 13 or earlier versions if you don't need SSR.
If you need to render components on the server (SSR), [Snacks](https://snacks.takeaway.com/portal/) is the best library for you.

We recommend updating to Next 14 if you would like to use SSR with our new Web Components.

### Vue and Nuxt 2

{% contentLayout %}
    {% tag {
    label: "Vue 2",
    variant: "blue"
    } %}
    {% tag {
    label: "Nuxt 2",
    variant: "blue"
    } %}
{% endcontentLayout %}

Our [Fozzie](https://vue.pie.design/) library currently supports older versions of Vue. We recommend updating to the latest Vue ecosystem if possible.

### What if I'm working on a greenfield project?

We recommend using [PIE Web Components](/engineers/web-components/) as much as you can, if your tech stack is supported. This helps us test our new components and avoids any need for a future migration.

### I can't find the web component I need

**I need it right away**

If you need the component right away, check our legacy libraries ([Snacks](https://snacks.takeaway.com/) and [Fozzie](https://vue.pie.design/)) in case a suitable component already exists.
We also recommend to check with our team if you can use another existing component for your solution instead.

If you can't wait and can't find the component in our libraries, please implement it yourself in your codebase.


**I can wait for the component to be implemented**

If you have some time before needing the component or are planning ahead, please reach out to us in **#help-designsystem** to check if we can include the component you need.

In our current process it takes us around a month and a half to two months to have a new component ready from design to implementation, so keep this in mind.

**I'd like to contribute to the component library**

If you are willing and able to contribute to the web component library, we can prioritise an ad-hoc design audit, and have the designs ready for contribution in 2-4 weeks. We have processes in place to support you during your time working in our codebase and would greatly appreciate your contribution.

___

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

This folder is currently split into two categories: **Components** and **Tools**.

The `/packages/components` directory is where our global PIE Web Component packages can be found, such as `pie-button`.

The `/packages/tools` directory contains helper packages that provide a specific piece of functionality used by components or more generally across the monorepo. Examples include the PIE icon packages – [pie-icons](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons) and [pie-icons-webc](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons-webc) – and extendable config for tools such as [Stylelint](https://github.com/justeattakeaway/pie/tree/main/packages/tools/stylelint-config-pie) and [ESlint](https://github.com/justeattakeaway/pie/tree/main/packages/tools/eslint-config-pie)
