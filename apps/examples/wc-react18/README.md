### Testing Web Components in React 18

When adding a web component with a custom event we will need to wrap the component in [@lit-labs/react package](https://lit.dev/docs/frameworks/react/).

This can be done by using Lit-labs `createComponent` function.

```
import React, { useState } from 'react';
import { createComponent } from '@lit-labs/react';

---

const Button = createComponent({
    tagName: 'pie-button',
    elementClass: PieButton,
    react: React,
    events: { onCustomEvent: 'CustomEvent' },
});

function App () {
    ---
    const onCustomEvent = () => console.log('onCustomEvent was triggered');

    return (
        <>
            ---

            <Button
                onCustomEvent={onCustomEvent}
            />
        </>
    );
}

```

[More information here](https://www.youtube.com/watch?v=x9yUwiNtzBs)
