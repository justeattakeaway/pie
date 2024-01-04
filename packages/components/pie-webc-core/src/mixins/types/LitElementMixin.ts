import { LitElement } from 'lit';
import type { GenericConstructor } from './GenericConstructor';

/**
 * A type representing a mixin that is compatible with classes that extend LitElement.
 */
export type LitElementMixin<T extends GenericConstructor<LitElement>> = (base: T) => T;
