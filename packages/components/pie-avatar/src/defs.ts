import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const tags = ['a', 'button', 'div'] as const;

export interface AvatarProps {
    /**
     * Label for the username that will be turned into initials inside the avatar, if provided.
     */
    label?: string;
    /**
     * What HTML element the avatar should be such as button, a  or div.
     */
    tag: typeof tags[number];

}

export type DefaultProps = ComponentDefaultProps<AvatarProps, keyof Omit<AvatarProps, 'label'>>;
export const defaultProps: DefaultProps = {
    tag: 'div',
};

export type Initials = {
    visual: string,
    screenreader: string
}
