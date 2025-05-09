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
  yarn dev --filter=@justeattakeaway/pie-docs
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

## Creating docsite pages

Please follow our [Wiki documentation](https://github.com/justeattakeaway/pie/wiki/Creating-docsite-pages) for reference on how to create new pages and set eleventyNavigation.

### Adding Index pages
An index page represents content for one of our main navigation items, for example: Foundations or Components.
When a main navigation item does not have an index page, it will navigate to the first page under it. When it has content, it will navigate to that content. In both cases the accordion will be opened, as well when clicking the right caret.

To set content for a main navigation item, in the item `.md` page, please add to the eleventyNavigation section at the top `hasIndexPage` like so:

```json
---
eleventyNavigation:
    ...
    hasIndexPage: true
---
```

Content needs to be added after this. If no content is added, it will navigate to a 404.

Index pages will have the same format, as such, we developed a mechanism to render link-card items for each navigation item under the Section.
The shortcode `indexPageDisplay` will automatically render each card and look for a matching image in `assets/img/index/<section-name>`. It can be configured like this:

```njk
{% indexPageDisplay {
collection: collections.all,
itemKey: "Components",
excludedElements: ['Component Status', 'Checkbox Group']
} %}
```

`collections.all` is an eleventy object that is used by the `eleventy-navigation`plugin to return a list of navigation items.
`itemKey` is the section name that the navigation plugin will search for.
`excludedElements` is a list of elements we would like to exclude from the list. Both for the key name and excluded items, names must follow the `key` attribute use in each page, including casing and white spaces when is 2 or more words.

When adding new index page content, just remember to add images in the right directory and exclude any items we don't wish to link in that page. Images for mobile will be automatically selected when available. For more information on how to name images and its directory, visit the jsdocs in the indexPageDisplay shortcode.

## Drafts

When building a page that is not yet ready for production we can mark the page as a `draft` by adding `draft: true` to the page front matter. This will allow 11ty to build the page during development mode but will exclude the page from builds during production.

```
---
title: Test Page
description: Test page
draft: true
---
```

To create a new section that will be in draft mode, you can add a new `<new_section_name>.json` file to your section's folder and set `draft: true`. This will apply the front matter to each page of the new section.

```
{
  "draft": true
}
```

## Testing
Our primary concerns are:
1. Ensuring we never lose any pages
2. Pages contain correct information and are presented correctly
3. Prevent easy to catch accessibility violations
4. Our shortcodes return the expected HTML

### Page testing

We have route navigation tests that ensure all existing pages can be correctly navigated to. When you add new pages, these tests will fail as there are new unexpected pages (this is by design).

Route tests need a production build so that they do not fail with `draft` page routes. For this, we recommend to:
1. Stop any local instance of the doc site
2. Delete your `dist` folder
3. Create a production build with `yarn build --filter=@justeattakeaway/pie-docs`

Once this is done, you can run the route tests with `yarn test --filter=@justeattakeaway/pie-docs`.
From here, we run navigation, accessibility and visual tests against each route.

#### Adding new routes

In order to fix the tests, you will need to register the routes to your newly added pages by running the following command from the root of the monorepo: `yarn test:generate-routes`. This will update the JSON file named `expected-routes.snapshot.json` with the paths to your new pages.

### Testing navigation responses

Running `yarn test:browsers` will ensure that navigating to the routes stored in `expected-routes.snapshot.json` result in Status Code `200` responses.

In order to run this command you will need the site to be served to localhost by running `yarn dev --filter=@justeattakeaway/pie-docs` in another terminal.

### Unit testing
Our unit testing is quite light. We generally write unit tests for `Javascript` utilities and for `shortcodes`. With shortcodes, we often perform [snapshot tests](https://jestjs.io/docs/snapshot-testing) on the returned markup. Whilst visual tests will catch changes to how the markup looks, snapshot tests will catch any unwanted changes to things like `HTML` attributes.

For testing snapshots you can run from the root of the monorepo `yarn test --filter=@justeattakeaway/pie-docs`

If you would like to update snapshots because the changes are expected, you can run from the root of the monorepo `yarn test --filter=@justeattakeaway/pie-docs -- -u`

## Conventions
- If you want to create some reusable/shared content, you can add it to a markdown file using the following naming format: `**.content.md`. Eleventy knows to ignore these file types during build, so they will not turn into their own pages. Because we use Nunjucks as our markdown rendering engine, we are able to use includes in our markdown files like so: `{% include 'some/path/to/reusable-stuff.content.md' %}`. This allows us to reuse copy if needed.

## Known gotchas and quirks
- A quirk not exclusive to 11ty, but common to anything rendering markdown into HTML, is that sometimes the first line of text will not be correctly parsed. This can lead to the markdown being rendered as is rather than turning into HTML. For example, use of a `### Heading level 3` may render exactly as you see it there. This can be solved by (annoyingly) creating an empty new line at the top of the markdown file.
