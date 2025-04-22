import type React from 'react';

// Omit event types to avoid conflicting with PieRadio's type definition
export type ReactBaseType = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput'>;
