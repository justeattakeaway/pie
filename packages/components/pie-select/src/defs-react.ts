import type React from 'react';

// Omit event types to avoid conflicting with PieSelect's type definition
export type ReactBaseType = Omit<React.HTMLAttributes<HTMLSelectElement>, 'onChange'>
