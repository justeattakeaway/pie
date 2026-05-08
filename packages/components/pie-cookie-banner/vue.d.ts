import type { DefineComponent } from "vue";
import type { PieCookieBanner, CustomEvent } from "./dist/index.js";

type PieCookieBannerProps = {
  /**  */
  hasPrimaryActionsOnly?: PieCookieBanner["hasPrimaryActionsOnly"];
  /**  */
  defaultPreferences?: PieCookieBanner["defaultPreferences"];
  /**  */
  cookieStatementLink?: PieCookieBanner["cookieStatementLink"];
  /**  */
  cookieTechnologiesLink?: PieCookieBanner["cookieTechnologiesLink"];
  /**  */
  country?: PieCookieBanner["country"];
  /**  */
  language?: PieCookieBanner["language"];
  /**  */
  openLinksInSameTab?: PieCookieBanner["openLinksInSameTab"];
  /**  */
  _preferencesNodes?: PieCookieBanner["_preferencesNodes"];
  /** when all cookies are accepted. */
  "onpie-cookie-banner-accept-all"?: (e: CustomEvent<CustomEvent>) => void;
  /** when all only necessary cookies are accepted. */
  "onpie-cookie-banner-necessary-only"?: (e: CustomEvent<CustomEvent>) => void;
  /** when a user clicks manage preferences. */
  "onpie-cookie-banner-manage-prefs"?: (e: CustomEvent<CustomEvent>) => void;
  /** when a user clicks save preferences. */
  "onpie-cookie-banner-prefs-saved"?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   *
   * ---
   *
   *
   * ### **Events:**
   *  - **pie-cookie-banner-accept-all** - when all cookies are accepted.
   * - **pie-cookie-banner-necessary-only** - when all only necessary cookies are accepted.
   * - **pie-cookie-banner-manage-prefs** - when a user clicks manage preferences.
   * - **pie-cookie-banner-prefs-saved** - when a user clicks save preferences.
   */
  "pie-cookie-banner": DefineComponent<PieCookieBannerProps>;
};

declare module "vue" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalComponents extends CustomElements {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends CustomElements {}
  }
}
