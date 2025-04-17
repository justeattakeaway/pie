import type React from 'react';

// Omit event types from HTMLInputElement to avoid conflicting with PieSwitch's type definition
export type ReactBaseType = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>
