import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const listTypes = ['list', 'interactive'] as const;

export type ListType = typeof listTypes[number];

export interface ListProps {
    /**
     * The type of the list.
     * `list` for a standard list, `interactive` for a list with interactive items.
     *
     * @default "list"
     */
    type?: ListType;
}

export type DefaultProps = ComponentDefaultProps<ListProps, 'type'>;

export const defaultProps: DefaultProps = {
    type: 'list',
};
