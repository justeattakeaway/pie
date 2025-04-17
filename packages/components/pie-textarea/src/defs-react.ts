import type React from 'react';

// Omit event types from HTMLInputElement to avoid conflicting with PieTextarea's type definition
export type ReactBaseType = Omit<React.HTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onInput'>
