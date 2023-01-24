---
eleventyNavigation:
    key: Updates & maintenance
    parent: Design Tokens
    order: 2
---

## Introduction

Currently the process of creating, maintaining and updating Design Tokens isn’t automated. This means that a workflow is needed in order to use and implement token updates correctly.

Our current workflow consists of the following steps:

1. PIE designers update design tokens in Figma.
2. Updates are published in our Bi-weekly Component + Token roundup.
3. DSW web team logs these changes in our design system’s Changelog.
4. DSW web team updates the design tokens values in JSON.
5. DSW web team communicates this to Android UI, Just UI iOS & Fozzie (VUE).
6. Engineering teams update their libraries with the new JSON.
7. Engineering teams release the libraries with the new JSON.
8. Engineering teams integrate the new versions of the libraries with products.
9. Updates are shipped in the release cycle.

---

## The role of PIE designers

These are the responsibilities of the PIE design team when updating design tokens:

### Update the Design Tokens in Figma 

PIE designers are in charge of maintaining, updating and creating design tokens. These updates are implemented into the design ecosystem by updating the Foundations libraries in Figma.

These updates should be carried out using branches to track changes and revert the process when/if necessary. If you’re not familiar with working with branches, please ask a member of the PIE team for guidance.

{% contentPageImage {
src:"../../../../../assets/img/foundations/design-tokens/updates-and-maintenance/figma-file.svg",
mobileSrc: "../../../../../assets/img/foundations/design-tokens/updates-and-maintenance/figma-file_narrow.svg",
width: "663px",
alt: "Screenshot of the cover page in our PIE 2.0 Foundations – Light Figma file.",
caption: "Screenshot of the cover page in our PIE 2.0 Foundations – Light Figma file."
} %}

### Communicate updates to designers and developers

Updates carried out by PIE designers are communicated through the [Bi-weekly Component & Token Roundup](https://docs.google.com/document/d/10-_Ev2GsV18ACKHYWc49qgU-LYRYToAKrlfbHKA9cOM/edit?usp=sharing){target="_blank"} document. The file is structured in bi-weekly releases, which show what has changed within the system and includes a description for additional context.

{% contentPageImage {
src:"../../../../../assets/img/foundations/design-tokens/updates-and-maintenance/component-token-roundup.svg",
mobileSrc: "../../../../../assets/img/foundations/design-tokens/updates-and-maintenance/component-token-roundup_narrow.svg",
width: "696px",
alt: "Screenshot of our Bi-weekly Component & Token Roundup document.",
caption: "Screenshot of our Bi-weekly Component & Token Roundup document."
} %}

---

## The role of the DSW web team

These are the responsibilities of the DSW web team when updating design tokens:

### Compile updates using the Design System Changelog

The DSW team’s responsibility is to compile all changes communicated through the Bi-weekly Component + Token Update and include them in our PIE Design Changelog.

The Changelog, [which is hosted in Github](https://github.com/justeattakeaway/pie/wiki/PIE-Design-Changelog), should be the source of truth for all updates with

{% notification {
type: "information",
message: "If you need any help working with or understanding the Changelog, please get in touch with us using the <b>#help-designsystem</b> channel in Slack."
} %}

{% contentPageImage {
src:"../../../../../assets/img/foundations/design-tokens/updates-and-maintenance/changelog.svg",
mobileSrc: "../../../../../assets/img/foundations/design-tokens/updates-and-maintenance/changelog_narrow.svg",
width: "589px",
alt: "Screenshot of the PIE Design Changelog",
caption: "Screenshot of the PIE Design Changelog"
} %}


### Update JSON files

The DSW team will also update the design token JSON files so that any updates are reflected in the [design token repo](https://github.com/justeat/pie-design-tokens).

To do this, the JSONC [(found here)](https://github.com/justeat/pie-design-tokens/blob/master/pie-design-tokens.jsonc) is updated to reflect the new token changes and a pull request (PR) is then made, so that other engineers working with PIE team can check over these changes.

Once the PR has two approvals, it is merged into the main branch and a new version of the pie-design-tokens package is released on NPM.There is also a clean (without comments) version of JSON published to unpkg. This is the source of tokens for the iOS and Android teams.

{% contentPageImage {
src:"../../../../../assets/img/foundations/design-tokens/updates-and-maintenance/jsonc.svg",
mobileSrc: "../../../../../assets/img/foundations/design-tokens/updates-and-maintenance/jsonc_narrow.svg",
width: "687px",
alt: "Screenshot of the pie-design-tokens.jsonc file in our Just Eat Takeaway  Github environment.",
caption: "Screenshot of the pie-design-tokens.jsonc file in our Just Eat Takeaway Github environment."
} %}

### Communicate the token updates and release to engineering teams

After the design token package has been released, this needs to be communicated so our Engineering teams can continue with the process.

The relevant engineering teams who need to be informed about the updates are Android UI, Just UI iOS and Web Design Systems teams (Vue & React).

This is done by posting a message about the new release in **#team-design-system** and **#guild-designsystem**.

---

## The role of engineering teams

These are the responsibilities of the various engineering teams when updating design tokens:

### Update libraries with the new JSON

Now that a new package has been released, engineering teams will be able to update their local version of the pie-design-tokens package to the latest version.
This is done via NPM, by running `npm update @justeat/pie-design-tokens`.

### Release libraries with the new JSON

This part of the process is different depending on the platform (and application), so the below is likely to be slightly simplified:

#### For web

The tokens are pulled into our various web component libraries via Sass (SCSS), such as fozzie (Vue) and Snacks (React - L-TKWY). So once the design token package has been released, these libraries are updated to use this new package, so that web applications using these can then update and consume the design tokens via the library update.


#### For iOS

The tokens are pulled in via JSON, compiled into Swift and released as part of our JustUI iOS app framework.

#### For Android

The tokens are pulled in via the clean JSON on unpkg CDN, compiled into XML and also generating Kotlin code (XML for the Android View UI framework, Kotlin for the Android Compose UI framework) and released as part of our Android UI app framework.

### Integrate and Ship the new versions of the libraries with products

This part of the process is also different depending on the platform (and application), so the below is likely to be slightly simplified:

#### For web

Once a new version of Fozzie or Snacks is released, applications that consume these libraries will then need to update to use this new version. Once they do this, the Sass that is used in these libraries will get compiled into application CSS and released as part of these various web applications. How these web applications are released can vary from application to application – for more information, speak to the relevant application team (or ask for more details in **#help-designsystem-engineering**.

#### For iOS

Once a new version of the JSON has been published and the iOS Core team is notified, a JIRA will be raised to update the JustUI library to use the latest PIE version. This ticket will result in a PR being merged into a version of the app and that version will be released in the next release cycle.

#### For Android

Once a new version of the JSON has been published the Android core team is notified. JIRA tickets will be created to update the android PIE libraries to the latest version of the design tokens. As part of this process the Android engineers will generate new XML and Kotlin assets. 

These assets will then be copied into the Android UI repository via a PR. Once the PR is approved and merged new versions of the pie-view and pie compose libraries will be published. 

Android applications that required the new tokens will then have their versions of the pie libs updated via another PR. Once this PR is merged the next released version of the application will contain the design token updates.