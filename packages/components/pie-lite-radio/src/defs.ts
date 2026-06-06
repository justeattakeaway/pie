import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const statusTypes = ['default', 'error'] as const;

export interface LiteRadioProps {
    isError: boolean;
}

export type DefaultProps = ComponentDefaultProps<LiteRadioProps>;

export const defaultProps: DefaultProps = {
    isError: false,
};
