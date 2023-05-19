<p align="center">
  <img align="center" src="src/assets/img/social/landing_home.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://github.com/justeattakeaway/pie/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/justeattakeaway/pie">
  </a>
  <a href="https://github.com/justeattakeaway/pie/actions/workflows/build.yml?query=branch%3Amain">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/justeattakeaway/pie/build.yml">
  </a>
</p>

# PIE Docs

## Getting Started
- To run the project, start by running `yarn` from the root of the monorepo. Then whilst still at the root run:

  ```
  yarn dev --filter=pie-docs
  ```

## Technologies used
- The website is built with [Eleventy](https://www.11ty.dev/), which is a [Static Site Generator](https://jamstack.org/glossary/ssg/)
- Content is written in [Markdown](https://www.markdownguide.org/cheat-sheet/) and transformed into `HTML` during build
- We write templates using the [Nunjucks templating language](https://mozilla.github.io/nunjucks/)
- For component-like features, we use [shortcodes](https://www.11ty.dev/docs/shortcodes/) written in `Javascript`
- Styling is written using [Sass](https://sass-lang.com/) using `SCSS` syntax
- For additional page functionality, we use `Javascript` and load them into the page as [es modules](https://modern-web.dev/guides/going-buildless/es-modules/). There is no `Javascript` build step or bundling (however this could change in the future)
- Our system tests are written using [Playwright](https://playwright.dev/) and [Percy](https://percy.io/)
- Our unit tests are written using [Jest](https://jestjs.io/)
- Our accessibility tests are written using [Axe with Playwright](https://playwright.dev/docs/accessibility-testing)

## Drafts

When building a page that is not yet ready for production we can mark the page as a `draft` by adding `data: true` to the page front matter. This will allow 11ty to build the page during development mode but will exclude the page from builds during production.

```
---
title: Test Page
description: Test page
draft: true
---
```

## Testing
Our primary concerns are:
1. Ensuring we never lose any pages
2. Pages contain correct information and are presented correctly
3. Prevent easy to catch accessibility violations
4. Our shortcodes return the expected HTML

### Page testing
We have route navigation tests that ensure all existing pages can be correctly navigated to. When you add new pages, these tests will fail as there are new unexpected pages (this is by design).

In order to fix the tests, you will need to register the routes to your newly added pages by running: `yarn test:generate-routes`. This will update the JSON file named `expected-routes.snapshot.json` with the URLs to your new page.

From here, we run navigation, accessibility and visual tests against each route.

#### Running the route tests
Route tests are ran as part of `yarn test`.

#### Testing navigation responses
Running `yarn test:browsers` will ensure that navigating to the routes stored in `expected-routes.snapshot.json` result in Status Code `200` responses.

In order to run this command you will need the site to be served to localhost by running `yarn dev --filter=pie-docs` in another terminal.

### Unit testing
Our unit testing is quite light. We generally write unit tests for `Javascript` utilities and for `shortcodes`. With shortcodes, we often perform [snapshot tests](https://jestjs.io/docs/snapshot-testing) on the returned markup. Whilst visual tests will catch changes to how the markup looks, snapshot tests will catch any unwanted changes to things like `HTML` attributes.


## Conventions
- If you want to create some reusable/shared content, you can add it to a markdown file using the following naming format: `**.content.md`. Eleventy knows to ignore these file types during build, so they will not turn into their own pages. Because we use Nunjucks as our markdown rendering engine, we are able to use includes in our markdown files like so: `{% include 'some/path/to/reusable-stuff.content.md' %}`. This allows us to reuse copy if needed.

## Known gotchas and quirks
- A quirk not exclusive to 11ty, but common to anything rendering markdown into HTML, is that sometimes the first line of text will not be correctly parsed. This can lead to the markdown being rendered as is rather than turning into HTML. For example, use of a `### Heading level 3` may render exactly as you see it there. This can be solved by (annoyingly) creating an empty new line at the top of the markdown file.
