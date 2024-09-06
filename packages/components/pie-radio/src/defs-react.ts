import React from 'react';
/**
 * TODO: Verify if ReactBaseType can be set as a more specific React interface
 * Use the React IntrinsicElements interface to find how to map standard HTML elements to existing React Interfaces
 * Example: an HTML button maps to `React.ButtonHTMLAttributes<HTMLButtonElement>`
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0bb210867d16170c4a08d9ce5d132817651a0f80/types/react/index.d.ts#L2829
 */
export type ReactBaseType = React.HTMLAttributes<HTMLElement>
