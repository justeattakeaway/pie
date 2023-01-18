# pie site

## Helpful Links

## Conventions
- If you want to create some reusable/shared content, you can add it to a markdown file using the following naming format: `**.content.md`. Eleventy knows to ignore these file types during build, so they will not turn into their own pages. Because we use Nunjucks as our markdown rendering engine, we are able to use includes in our markdown files like so: `{% include 'some/path/to/reusable-stuff.content.md' %}`. This allows us to reuse copy if needed.


## Testing routes
We have route navigation tests thats ensure all existing pages can be correctly found. When you add new pages, these tests will fail as there's new unexpected pages (this is by design). In order to fix the tests, you will need to register the routes to your newly added pages by running: `test:generate-routes`. This will update a json file named `expected-routes.snapshot.json` with the urls to your new page.

### Running the route tests
Route tests are ran as part of `yarn test`.

### Testing navigation responses
Running `yarn test:system` will ensure that navigating to these pages returns the expect 200 response. In order to run this command you will need the site to be served to localhost by running `yarn dev` in another terminal.

## Known gotchas and quirks
- A quirk not exclusive to 11ty, but common to anything rendering markdown into HTML, is that sometimes the first line of text will not be correctly parsed. This can lead to the markdown being rendered as is rather than turning into HTML. For example, use of a `### Heading level 3` may render exactly as you see it there. This can be solved by (annoyingly) creating an empty new line at the top of the markdown file.

#### Eleventy

- https://www.11ty.dev/docs/getting-started/
- https://github.com/11ty/eleventy-plugin-vue
- https://www.netlify.com/blog/2020/09/18/eleventy-and-vue-a-match-made-to-power-netlify.com/
