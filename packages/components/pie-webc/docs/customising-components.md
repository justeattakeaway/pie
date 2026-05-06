# Customising components
Sometimes there is a need to customise a component's styling more than can be achieved with props or CSS variable overrides. Whilst these situations are uncommon, we recognise that components have to be flexible enough to allow people to do this.

> If a component provides CSS parts to override, you will find them in the component readme file or overview page in Storybook.

**Warning!** Customising components is not a recommended pattern. It should be used sparingly, and is always worth discussing with the Design System team first. When you customise the component styles, **you must take responsibility for ensuring future updates to the component do not regress your customised styles**.

## Table of Contents
- [CSS Parts](#css-parts)
- [Writing custom styles](#writing-custom-styles)
  - [Example of risky CSS](#example-of-risky-css)
  - [The problem](#the-problem)
  - [The solution: all: initial](#the-solution-all-initial)
- [Warning](#warning)

## CSS Parts
CSS Parts are a way to expose areas of a component's template for consumers to apply their own CSS to.

An example of this is our Tag component. As you can see, we can fully customise how the component looks by writing our own CSS to be used in the `::part(body)` and `::part(icon)`.

Not all components provide parts. If you feel your use-case requires them, please reach out to the team to discuss.

## Writing custom styles
One risk with writing your own styles is that, if you are not careful, you might write some CSS that the base component styles could override in future updates.

### Example of risky CSS
Let's imagine our component `<example-component>` has the following structure:

```html
<div class="c-exampleComponent">
  <span part="primary" class="c-exampleComponent__box c-exampleComponent__box--primary">
    <slot name="primary"></slot>
  </span>
  <span part="secondary" class="c-exampleComponent__box c-exampleComponent__box--secondary">
    <slot name="secondary"></slot>
  </span>
</div>
```

And this is our CSS:

```css
.c-exampleComponent {
  background-color: lightgreen;
  padding: 1.5rem;
  /* Other styles skipped */
}

.c-exampleComponent__box {
  padding: 1rem;
  border-radius: 4px;
  font-family: sans-serif;
  /* Other styles skipped */
}

.c-exampleComponent__box--primary {
  background-color: coral;
  /* Other styles skipped */
}

.c-exampleComponent__box--secondary {
  background-color: lightblue;
  /* Other styles skipped */
}
```

We are happy with the default padding around the primary box. It matches our design requirements. However, we need more padding on the secondary box. So we use the exposed CSS part to modify it:

```css
example-component::part(secondary) {
  padding: 2rem;
}
```

Now our secondary box has larger padding. Excellent!

### The problem
There is a risk with our strategy. Let's imagine that six months later, our team releases a new version of the component library. We've decided to add a border to all boxes.

The base CSS for `.c-exampleComponent__box` is now:

```css
.c-exampleComponent__box {
  padding: 1rem;
  border-radius: 4px;
  font-family: sans-serif;
  border: 3px solid rgba(0,0,0,0.5); /* <-- New style! */
}
```

Because our custom CSS for `::part(secondary)` only overrides the padding, it inherits the new border property from the base styles. This was not part of our original design and is an unintended regression.

### The solution: `all: initial`
To protect your custom styles from being affected by future changes to the component's base styles, you should take full control of the part's styling.

You can do this by using `all: initial` to reset all of the component's base styles on that part. This creates a clean slate, ensuring that only the CSS you explicitly define is applied.

Here is the safe way to write the custom styles for our secondary part:

```css
example-component::part(secondary) {
  /* 1. Reset all base styles from the component */
  all: initial;

  /* 2. Now, re-apply ALL styles needed for your design */
  background-color: lightblue;
  padding: 2rem;
  border-radius: 4px;
  font-family: sans-serif;
}
```

By doing this, you are no longer inheriting any styles from `.c-exampleComponent__box`. When the component library is updated with the new border, your custom-styled part will be completely unaffected, looking exactly as you designed it.

## Warning

Remember that when you use `all: initial`, you lose **all** base styles from the component. You are responsible for re-applying every style needed. This approach is safer for long-term maintenance but requires more upfront work.
