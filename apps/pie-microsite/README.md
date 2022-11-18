# pie site

## Helpful Links

## Conventions
- If you want to create some reusable/shared content, you can add it to a markdown file using the following naming format: `**.content.md`. Eleventy knows to ignore these file types during build, so they will not turn into their own pages. Because we use Nunjucks as our markdown rendering engine, we are able to use includes in our markdown files like so: `{% include 'some/path/to/reusable-stuff.content.md' %}`. This allows us to reuse copy if needed.

## Known gotchas and quirks
- A quirk not exclusive to 11ty, but common to anything rendering markdown into HTML, is that sometimes the first line of text will not be correctly parsed. This can lead to the markdown being rendered as is rather than turning into HTML. For example, use of a `### Heading level 3` may render exactly as you see it there. This can be solved by (annoyingly) creating an empty new line at the top of the markdown file.

#### Eleventy

- https://www.11ty.dev/docs/getting-started/
- https://github.com/11ty/eleventy-plugin-vue
- https://www.netlify.com/blog/2020/09/18/eleventy-and-vue-a-match-made-to-power-netlify.com/
