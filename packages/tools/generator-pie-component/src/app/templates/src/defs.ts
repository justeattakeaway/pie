<% if (needsRTL) { %>import { RTLComponentProps } from '@justeattakeaway/pie-webc-core';<% } %>

// TODO - please remove the eslint disable comment below when you add props to this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface <%= componentName %>Props <% if (needsRTL) { %>extends RTLComponentProps<% } %> {}

