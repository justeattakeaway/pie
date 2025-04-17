import type React from 'react';

// Omitting the native input 'size' type to avoid conflicts with our custom 'size' prop.
export type ReactBaseType = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput' | 'size'>
