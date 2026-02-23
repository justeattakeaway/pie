import type React from 'react';

// Omit event types to avoid conflicting with PieCheckboxGroup's type definition
export type ReactBaseType = Omit<React.FieldsetsHTMLAttributes<HTMLFieldSetElement>, 'onChange'>
