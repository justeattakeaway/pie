# Creating docsite pages

## Website sections
To create a new navigation section, follow these steps:

1. **Create a Folder**: Make a folder with the name of the section you want. For example: `/src/food/`.

2. **Create a Root Level Markdown File**: Inside this folder, create a `.md` file with the same name as the folder. For example: `/src/food/food.md`. This file stores metadata used by Eleventy Navigation to add it to the navigation.

Example:

```md
---
eleventyNavigation:
    key: Food
    title: Food
    parent: Docs
    order: 4
title: Food
---
```

3. **Create a JSON File**: Also inside this folder, create a JSON file with the same name to house shared page data, such as an Open Graph (ogImage) preview image and title metadata prefix.

Example (`/src/food/food.json`):

```json
{
  "ogImage": "landing_food.png", // make sure this exists!
  "metaTitlePrefix": "Food — "
}
```

4. **Add a Page to the Section**: Create a `.md` file with the name of the page you want to create. For example: `/src/food/pizza.md`.

Example:

```md
---
eleventyNavigation:
    key: Pizza
    parent: Food
    order: 1
title: Pizza stuff
description: I love Pizza.
---
## Title
Yo
```

5. **Update Navigation Icons**: In `/src/_includes/nav.njk`, add the new section and its icon:

```njk
{# Each navigation item has a unique key that is mapped to an Icon name #}
{% set navigationIcons = {
    Accessibility: 'user-highlight',
    'All about PIE': 'pie',
    designers: 'bulb-lightning',
    Foundations: 'foundations',
    Components: 'components',
    Support: 'help-circle',
    engineers: 'engineers',
    Patterns: 'layers',
    Food: 'pizza' // The new section
} %}
```

## Tabbed pages

To create tabbed pages within a section, follow these steps:

1. **Create a Folder**: Make a folder with the name of the page you want inside the section. For example: `/src/foundations/foo/`.

2. **Create a Root Level Markdown File**: Inside this folder, create a `.md` file with the same name as the folder. For example: `/src/foundations/foo/foo.md`. This file stores metadata used by Eleventy Navigation to add it to the navigation.

Example:

```md
# /src/foundations/foo/foo.md
---
eleventyNavigation:
    key: Foo # The name of the page
    parent: Foundations # The parent section
    url: /src/foundations/foo/ # The URL for this page
    order: 3 # Position in the parent navigation section
permalink: false # This is a folder, so we don't want a permalink
---
```

3. **Create a JSON File**: Inside the same folder, create a JSON file with the same name to house shared page data such as a title, description, and a `navKey`.

Example:

```json
// /src/foundations/foo/foo.json
{
  "title": "Foo",
  "navKey": "Foo", // Enables tabbed pages
  "description": "Some description."
}
```

**The pages sharing the same `navKey` will be grouped together as tabs on a single page.**

4. **Create Tab Pages**: For each tab, create a `.md` file with the name of the tab. For example: `/src/foundations/foo/overview.md`.

If this tab should be the default content shown at `/src/foundations/foo`, give it a permalink.

Example:

```md
# /src/foundations/foo/overview.md

---
eleventyNavigation:
    key: Overview
    parent: Foo
    order: 1
permalink: foundations/foo/ # Default content for the page. No slash at the beginning.
---
## Some Title

Blah blah blah
```

5. **Create Additional Tabs**: For additional tabs, create more `.md` files. For example: `/src/foundations/foo/bar.md`.

Example:

```md
---
eleventyNavigation:
    key: Bar
    parent: Foo
    order: 2
---
## Some Other Title

Blah blah blah
```

Omit the `permalink` property if you want the default path that Eleventy generates, e.g., `/foundations/foo/bar/`.

## Adding Index pages
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
