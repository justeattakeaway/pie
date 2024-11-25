import { type Meta } from '@storybook/web-components';

export type ExtendedMeta<T> = Meta<T> & { showInTestingDeployment?: boolean };
