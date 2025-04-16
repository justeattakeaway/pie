import type React from 'react';

export type ReactBaseType = Omit<React.HTMLAttributes<HTMLSelectElement>, 'onChange'>
