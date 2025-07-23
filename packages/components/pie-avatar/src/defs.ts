import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const tags = ['a', 'button', 'div'] as const;

export interface AvatarProps {
    label?: string;
    /**
     * Label for the username that will be turned into initials inside the avatar, if provided.
     */
    tag: typeof tags[number];
    /**
     * What variant avatar should be such as link, button or div.
     */

}

export type DefaultProps = ComponentDefaultProps<AvatarProps, keyof Omit<AvatarProps, 'label'>>;
export const defaultProps: DefaultProps = {
    tag: 'div',
};

