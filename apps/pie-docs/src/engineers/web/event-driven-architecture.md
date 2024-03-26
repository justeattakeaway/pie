---
eleventyNavigation:
    key: engineers-web-event-driven-architecture
    title: Component Architecture
    parent: engineers-web
    order: 1
---

# Building Components in PIE: Event-Driven Architecture

This document explains our approach to creating components that are event-driven, flexible, and easily integrated into different development environments.

## Understanding Event-Driven Components

Event-driven components operate on a simple principle: they emit events in response to user actions or internal state changes, rather than directly invoking callback functions. This model offers several advantages:

- **Decoupling**: Components are not tightly coupled with specific actions or reactions, making them more modular and easier to reuse.

- **Native Web Behaviour**: This approach mirrors how the web inherently works, utilizing events to manage interactions and asynchronous activities, promoting better compatibility and performance.

- **Flexibility**: It provides developers with the freedom to decide how to handle these events, allowing for customized reactions that fit the needs of their application.

### Implementing Event-Driven Components

Here is a basic example of a Lit component that emits events. Whilst its a rather simple example, it shows how we respond to interactions with the component by emitting a custom event.

```js
import { defineCustomElement, dispatchCustomEvent } from '@justeattakeaway/pie-webc-core';
import { LitElement, html } from 'lit';

/**
 * @tagname pie-demo
 * @event {CustomEvent} pie-demo-click - when the button is clicked.
 */
export class PieDemo extends LitElement {
    private handleClick () {
        // This is a helper function you can import from @justeattakeaway/pie-webc-core
        dispatchCustomEvent(this, 'pie-demo-click');
    }

    render () {
        return html`
        <div>
            <p>Click the nice button to make things happen!</p>
            <pie-button @click="${this.handleClick}">Click Me</pie-button>
        </div>
    `;
    }
}

defineCustomElement('pie-demo', PieDemo);

declare global {
    interface HTMLElementTagNameMap {
        'pie-demo': PieDemo;
    }
}
```

## React Integration and Framework Compatibility
To ensure our components are accessible to developers working in React and other frameworks, we automatically generate a React wrapper for each component. Part of the purpose of the wrapper is to transform emitted events into React-friendly props:

- **Automatic Callbacks**: Each event emitted by a component is mapped to a prop in the React wrapper, allowing React developers to handle these events as if they were native React component callbacks.

- **Event Declaration via JSDoc comments**: By adding JSDoc comments to your component code, you declare the events it emits. This is crucial for the automatic generation of React wrappers. As shown in the Demo component:

```js
/**
 * @tagname pie-demo
 * @event {CustomEvent} pie-demo-click - when the button is clicked.
 */
```

Our Demo component would generate a React wrapper that looks like so:

```js
const PieDemoReact = createComponent({
    displayName: 'PieDemo',
    elementClass: PieDemoLit,
    react: React,
    tagName: 'pie-demo',
    events: {
        onPieDemoClick: 'pie-demo-click' as EventName<CustomEvent>, // when the button is clicked.
    },
});
```

## Using Event-Driven Components in Practice

### React
Using our Demo component, here's how you would handle the emitted event in a React application utilising the auto-generated callback hook that our wrapper provides:

```js
import { PieDemo } from "@justeattakeaway/pie-demo/dist/react"; // React-specific entry point

<PieDemo
    onPieDemoClick={() => performSomeUpdate()}>
</PieDemo>
```

### Vue
Inside of a Vue application, you can use our components by importing them and listening to the emitted events:

```js
import "@justeattakeaway/pie-demo";

<pie-demo @pie-demo-click="performSomeUpdate"></pie-demo>
```

### Vanilla JS
For vanilla JavaScript applications, you can also import the component and listen for the emitted event:

```js
<pie-demo></pie-demo>

<script>
    import "@justeattakeaway/pie-demo";

    const pieDemo = document.querySelector('pie-demo');
    pieDemo.addEventListener('pie-demo-click', () => performSomeUpdate());
</script>
```

## Summary
Our design philosophy ensures that components remain framework-agnostic, enhancing their compatibility and flexibility.
