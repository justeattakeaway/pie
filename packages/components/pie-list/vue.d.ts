import type { DefineComponent } from 'vue';
import type { PieList, PieListItem } from './dist/index.js';

type PieListProps = {};

type PieListItemProps = {};

export type CustomElements = {
  /**
   *
   * ---
   *
   */
  'pie-list': DefineComponent<PieListProps>;

  /**
   *
   * ---
   *
   */
  'pie-list-item': DefineComponent<PieListItemProps>;
};

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalComponents extends CustomElements {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends CustomElements {}
  }
}
