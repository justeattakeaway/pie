import type React from 'react';

// Omit `size` and event types from HTMLInputElement to avoid conflicting with PieInput's type definition
export type ReactBaseType = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput' | 'size'>
