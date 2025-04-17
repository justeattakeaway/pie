import type React from 'react';

// Omit `size` and event types to avoid conflicting with PieTextInput's type definition
export type ReactBaseType = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput' | 'size'>
