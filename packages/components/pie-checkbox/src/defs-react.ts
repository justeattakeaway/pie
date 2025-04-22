import type React from 'react';

// Omit event types to avoid conflicting with PieCheckbox's type definition
export type ReactBaseType = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>
