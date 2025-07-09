import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const tags = ['a', 'button', 'div'] as const;

export interface AvatarProps {
    label?: string;
    tag: typeof tags[number];

}

export type DefaultProps = ComponentDefaultProps<AvatarProps, keyof Omit<AvatarProps, 'label'>>;
export const defaultProps: DefaultProps = {
    tag: 'div',
};

// TODO: add descriptions for properties
