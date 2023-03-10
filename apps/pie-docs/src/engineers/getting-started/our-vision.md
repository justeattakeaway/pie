---
eleventyNavigation:
    key: engineers-our-vision
    title: Our vision
    parent: engineers-getting-started
    order: 3
---


## A brief history

PIE as a design language has existed for a number of years now.

At the start of 2022, the web platform team started an initiative to consolidate our existing component systems with the aim of providing a set of components, tools and guidelines that could be used globally across JET.

Before this, teams across JET had been working with design systems for some time, but at a more local level, taking the PIE design language and applying it to their own applications, with some teams maintaining their own component systems.

This issue was exacerbated by the merger that created JET back in April 2020, with our Just Eat and Takeaway.com Customer platforms each having their own component systems.  On the legacy Just Eat side, where Vue was the most popular framework, the [Fozzie Component System](https://github.com/justeattakeaway/fozzie-components) was widely used. On the Takeaway.com Customer Platform, React was being utilised with their own component system [Snacks](https://snacks.takeaway.com/). In addition, SkipTheDishes – JETs North American platform – also maintained their own [React component system](https://github.com/justeat/pie-project).

Many other web applications outside of these examples exist across JET, but hopefully this provides a snapshot of the duplication of effort that was – and still is – going on across JET front-end teams.

As a result of the initiative started in 2022, towards the end of 2022 JET combined the Just Eat and Takeaway.com design system teams to form what is now the PIE Design System team.

## Roadmap

As detailed in [our mission and principles](/all-about-pie/our-vision/), our aim is to create a single source of truth for using global PIE components across JET.

With that aim in mind, at the start of 2023 we started to build out a proof-of-concept (PoC) for a native Web Component implementation of our PIE component system. The aim of this PoC is to prove that using Web Components is a feasible technical solution that can sit on top of our Vue and React applications being built by teams across JET. For this PoC, we'll be using the [Lit Web Component library](https://lit.dev/).

During the first part of 2023, we'll be looking at laying the foundations of our web component library: choosing our technology stack, setting up our PIE mono-repo, and building our first component using Lit – the `pie-button` component.

We'll then move onto building more complicated components – potentially the `pie-modal` and `pie-formfield` components – while also working out how we can best roll out and integrate our components into the wide array of web applications being developed across JET.

We'll be sharing regular updates about our progress, but if you've got any questions, [please reach out to us](/support/contact-us/) and we'll be happy to share our progress and plans in more detail.
