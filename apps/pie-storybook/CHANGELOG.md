# Changelog

## 0.39.0

### Minor Changes

- [Added] - Form integration test to pie-button ([#877](https://github.com/justeattakeaway/pie/pull/877)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`c9131d14b`](https://github.com/justeattakeaway/pie/commit/c9131d14b1c82f2640ad3de62632af115ea1333c)]:
  - @justeattakeaway/pie-button@0.32.0

## 0.38.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- Updated dependencies [[`1b426e688`](https://github.com/justeattakeaway/pie/commit/1b426e6883b5baada6a29b12ee7e7e68cfe0de14), [`e50b0fe60`](https://github.com/justeattakeaway/pie/commit/e50b0fe60d1be37ac48923316bef8e5c181c7d9e), [`86af06ddf`](https://github.com/justeattakeaway/pie/commit/86af06ddf49f659bfefd7a8eb7ea4197eeaa84b5)]:
  - @justeattakeaway/pie-cookie-banner@0.6.0
  - @justeattakeaway/pie-css@0.6.0
  - @justeattakeaway/pie-card-container@0.9.0
  - @justeattakeaway/pie-toggle-switch@0.13.0
  - @justeattakeaway/pie-icon-button@0.17.0
  - @justeattakeaway/pie-form-label@0.4.0
  - @justeattakeaway/pie-divider@0.7.0
  - @justeattakeaway/pie-button@0.31.0
  - @justeattakeaway/pie-modal@0.26.0
  - @justeattakeaway/pie-icons-webc@0.10.0
  - @justeattakeaway/pie-link@0.8.0

## 0.37.2

### Patch Changes

- Updated dependencies [[`7ab2d912b`](https://github.com/justeattakeaway/pie/commit/7ab2d912b3e3c7f33ff4b5fcce73621beab3d56d), [`7ab2d912b`](https://github.com/justeattakeaway/pie/commit/7ab2d912b3e3c7f33ff4b5fcce73621beab3d56d)]:
  - @justeattakeaway/pie-icons-webc@0.9.0

## 0.37.1

### Patch Changes

- Updated dependencies [[`b86846d0a`](https://github.com/justeattakeaway/pie/commit/b86846d0a1c5f811dfd04a0b6158145b3e6be64e)]:
  - @justeattakeaway/pie-toggle-switch@0.12.0

## 0.37.0

### Minor Changes

- [Added] - Card container padding props ([#829](https://github.com/justeattakeaway/pie/pull/829)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

- Updated dependencies [[`01215cc48`](https://github.com/justeattakeaway/pie/commit/01215cc481c268c58cacb31ebebf0523d6143fc9), [`94ad25007`](https://github.com/justeattakeaway/pie/commit/94ad250076deb77061db9fbafe44539c5df17245), [`8c03d23f3`](https://github.com/justeattakeaway/pie/commit/8c03d23f3790744be56ed4a5b87da885108a26ab)]:
  - @justeattakeaway/pie-card-container@0.8.0
  - @justeattakeaway/pie-cookie-banner@0.5.0
  - @justeattakeaway/pie-toggle-switch@0.11.0
  - @justeattakeaway/pie-icon-button@0.16.0
  - @justeattakeaway/pie-form-label@0.3.0
  - @justeattakeaway/pie-divider@0.6.0
  - @justeattakeaway/pie-button@0.30.0
  - @justeattakeaway/pie-modal@0.25.0
  - @justeattakeaway/pie-link@0.7.0
  - @justeattakeaway/pie-css@0.5.1

## 0.36.1

### Patch Changes

- [Changed] - Align body-scroll-lock versions to meet peer requirements ([#841](https://github.com/justeattakeaway/pie/pull/841)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.36.0

### Minor Changes

- [Fixed] - The `reverse` value of the `underline` prop can only be used if `isStandalone` is set to `true` ([#834](https://github.com/justeattakeaway/pie/pull/834)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed] - When the `isStandalone` prop is `false`, icon's cannot be shown.

  [Fixed] - When the link is small, the icon doesn't seem to be vertically centered with the text.

  [Fixed] - The spacing between the text and icon should be fixed / hugging the length of the text.

  [Fixed] - focus styles for the link component

- [Changed] - `dependency` references in package.json to use version number instead of `workspace:*` syntax. This should fix resolution errors in repos that consume packages outside of the PIE monorepo ([#824](https://github.com/justeattakeaway/pie/pull/824)) by [@siggerzz](https://github.com/siggerzz)

### Patch Changes

- Updated dependencies [[`5ac954d18`](https://github.com/justeattakeaway/pie/commit/5ac954d1879c39db6f43e8ef558e69f2f6653e26), [`65bad481b`](https://github.com/justeattakeaway/pie/commit/65bad481ba1eaa73fbdf176a19a0b611ad63c96e), [`6fecdd7b9`](https://github.com/justeattakeaway/pie/commit/6fecdd7b9965a6f6e98c29b79a725d2ade7191dd), [`65bad481b`](https://github.com/justeattakeaway/pie/commit/65bad481ba1eaa73fbdf176a19a0b611ad63c96e)]:
  - @justeattakeaway/pie-link@0.6.0
  - @justeattakeaway/pie-css@0.5.0
  - @justeattakeaway/pie-card-container@0.7.0
  - @justeattakeaway/pie-form-label@0.2.0
  - @justeattakeaway/pie-divider@0.5.0
  - @justeattakeaway/pie-icon-button@0.15.0
  - @justeattakeaway/pie-button@0.29.0
  - @justeattakeaway/pie-modal@0.24.0

## 0.35.0

### Minor Changes

- [Added] - Allow HTML in slot on Storybook for modal and card ([#825](https://github.com/justeattakeaway/pie/pull/825)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - `DOMPurify` to ensure the passed content is sanitized

### Patch Changes

- Updated dependencies [[`4419750f1`](https://github.com/justeattakeaway/pie/commit/4419750f182f3dd6fb49c5e54532bec3a21d8126)]:
  - @justeattakeaway/pie-modal@0.23.0
  - @justeattakeaway/pie-cookie-banner@0.4.1

## 0.34.1

### Patch Changes

- Updated dependencies [[`d3976e861`](https://github.com/justeattakeaway/pie/commit/d3976e861547e22c66221798f355c42ed91145e6)]:
  - @justeattakeaway/pie-icons-webc@0.8.1
  - @justeattakeaway/pie-icon-button@0.14.1
  - @justeattakeaway/pie-modal@0.22.0
  - @justeattakeaway/pie-toggle-switch@0.10.0

## 0.34.0

### Minor Changes

- [Changed] - Deleted the dir props and i18nargtypes helper as `dir` is no longer a Lit component property. It is simply a regular HTML attribute ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Build the Pie Form Label web component ([#820](https://github.com/justeattakeaway/pie/pull/820)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e), [`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e), [`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e), [`9d689eb08`](https://github.com/justeattakeaway/pie/commit/9d689eb0818c4d686d93b5cdd9d708115a066c1e), [`2c5e79ee3`](https://github.com/justeattakeaway/pie/commit/2c5e79ee36c6c5f958d7c05d797a6528704fcecc)]:
  - @justeattakeaway/pie-modal@0.22.0
  - @justeattakeaway/pie-toggle-switch@0.10.0
  - @justeattakeaway/pie-icons-webc@0.8.0
  - @justeattakeaway/pie-form-label@0.1.0
  - @justeattakeaway/pie-link@0.5.0
  - @justeattakeaway/pie-cookie-banner@0.4.1
  - @justeattakeaway/pie-button@0.28.1
  - @justeattakeaway/pie-card-container@0.6.1
  - @justeattakeaway/pie-divider@0.4.1
  - @justeattakeaway/pie-icon-button@0.14.1

## 0.33.0

### Minor Changes

- [Added] - link state styles ([#812](https://github.com/justeattakeaway/pie/pull/812)) by [@raoufswe](https://github.com/raoufswe)

- [Added] aria labels to the pie link ([#813](https://github.com/justeattakeaway/pie/pull/813)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`33ea01276`](https://github.com/justeattakeaway/pie/commit/33ea012760e17d69918f5ae8f030ad4f6e000dbf), [`d84f1b8e3`](https://github.com/justeattakeaway/pie/commit/d84f1b8e31f24c2f4bc9a7bbe8acc736653b3084), [`b1f789a77`](https://github.com/justeattakeaway/pie/commit/b1f789a7778013463bcf711c832bd451d65adcab)]:
  - @justeattakeaway/pie-card-container@0.6.0
  - @justeattakeaway/pie-link@0.4.0
  - @justeattakeaway/pie-modal@0.21.0
  - @justeattakeaway/pie-cookie-banner@0.4.0

## 0.32.1

### Patch Changes

- Updated dependencies [[`bab76e5c5`](https://github.com/justeattakeaway/pie/commit/bab76e5c50b77dc16a343af0c2b46237d47c1677), [`bab76e5c5`](https://github.com/justeattakeaway/pie/commit/bab76e5c50b77dc16a343af0c2b46237d47c1677), [`fe53d7aa6`](https://github.com/justeattakeaway/pie/commit/fe53d7aa61e8e0489e1fa490cc1d182a0536df3d), [`3e5fd1b82`](https://github.com/justeattakeaway/pie/commit/3e5fd1b8220faa997589b7ce34f896b6199614c8)]:
  - @justeattakeaway/pie-icons-webc@0.7.0
  - @justeattakeaway/pie-toggle-switch@0.9.0
  - @justeattakeaway/pie-modal@0.20.0
  - @justeattakeaway/pie-css@0.4.0
  - @justeattakeaway/pie-card-container@0.5.0
  - @justeattakeaway/pie-icon-button@0.14.1
  - @justeattakeaway/pie-cookie-banner@0.4.0
  - @justeattakeaway/pie-button@0.28.1

## 0.32.0

### Minor Changes

- [Added] Button and Link behaviour to the card container ([#791](https://github.com/justeattakeaway/pie/pull/791)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`ba8e8fccc`](https://github.com/justeattakeaway/pie/commit/ba8e8fccc5ad4d5f943df753badccbc08559c25f), [`411abc41a`](https://github.com/justeattakeaway/pie/commit/411abc41a19135a80ea3d8f86614a74efa8a964f)]:
  - @justeattakeaway/pie-icons-webc@0.6.0
  - @justeattakeaway/pie-card-container@0.4.0
  - @justeattakeaway/pie-icon-button@0.14.1
  - @justeattakeaway/pie-modal@0.19.1
  - @justeattakeaway/pie-toggle-switch@0.8.0

## 0.31.2

### Patch Changes

- Updated dependencies [[`d5c93f9bb`](https://github.com/justeattakeaway/pie/commit/d5c93f9bb2d451ef555a804de10f225b0ff5f4a4)]:
  - @justeattakeaway/pie-cookie-banner@0.4.0

## 0.31.1

### Patch Changes

- Updated dependencies [[`6a026ab2f`](https://github.com/justeattakeaway/pie/commit/6a026ab2fd01cf21d70c95e7db6988ae3d341b78)]:
  - @justeattakeaway/pie-toggle-switch@0.8.0
  - @justeattakeaway/pie-cookie-banner@0.3.1

## 0.31.0

### Minor Changes

- [Added] - support outline, inverse and outline-inverse variants ([#789](https://github.com/justeattakeaway/pie/pull/789)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`3105e3d84`](https://github.com/justeattakeaway/pie/commit/3105e3d844e8bea90a59da73f16926d8ceb93963)]:
  - @justeattakeaway/pie-card-container@0.3.0

## 0.30.0

### Minor Changes

- [Changed] - Updated creation of stories to be more succinct ([#788](https://github.com/justeattakeaway/pie/pull/788)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

- Updated dependencies [[`1f48fa5fe`](https://github.com/justeattakeaway/pie/commit/1f48fa5fe2108ad244ca3399a4a406fc3dc77854), [`59e0c97d6`](https://github.com/justeattakeaway/pie/commit/59e0c97d63b61649794c6c86d9daf1241d249351)]:
  - @justeattakeaway/pie-card-container@0.2.1
  - @justeattakeaway/pie-cookie-banner@0.3.1
  - @justeattakeaway/pie-toggle-switch@0.7.0
  - @justeattakeaway/pie-icon-button@0.14.1
  - @justeattakeaway/pie-button@0.28.1
  - @justeattakeaway/pie-modal@0.19.1
  - @justeattakeaway/pie-icons-webc@0.5.1
  - @justeattakeaway/pie-css@0.3.1

## 0.29.0

### Minor Changes

- [Added] - Base markup, styles and interactive states for the card in it's Link implementation ([#780](https://github.com/justeattakeaway/pie/pull/780)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] add modal content and toggles ([#772](https://github.com/justeattakeaway/pie/pull/772)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - added some more custom bgs and device viewports ([#778](https://github.com/justeattakeaway/pie/pull/778)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- Updated dependencies [[`bac21db4a`](https://github.com/justeattakeaway/pie/commit/bac21db4a31581d24f5ad2e396f757f1424907f1), [`f49f9166f`](https://github.com/justeattakeaway/pie/commit/f49f9166f384570a0fde4acb29f09eae5b966d75), [`ac9213ef8`](https://github.com/justeattakeaway/pie/commit/ac9213ef88353ed377662131c924c5082b9e6740)]:
  - @justeattakeaway/pie-card-container@0.2.0
  - @justeattakeaway/pie-button@0.28.0
  - @justeattakeaway/pie-cookie-banner@0.3.0
  - @justeattakeaway/pie-toggle-switch@0.6.0
  - @justeattakeaway/pie-modal@0.19.0

## 0.28.0

### Minor Changes

- [Changed] - update storybook to v7.4.0 ([#779](https://github.com/justeattakeaway/pie/pull/779)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - missing peer dependencies

## 0.27.0

### Minor Changes

- [Changed] - allow one icon to be set ([#764](https://github.com/justeattakeaway/pie/pull/764)) by [@raoufswe](https://github.com/raoufswe)

  [Fixed] - icon should sit next to the text when isFullWidth is true

  [Fixed] - icon should not be visible when isLoading is true

- [Added] - pie-card-container stories ([#766](https://github.com/justeattakeaway/pie/pull/766)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`e3c9de2fd`](https://github.com/justeattakeaway/pie/commit/e3c9de2fd747d7c7e07209b0e9fc72ead9d896ef), [`d1dcef180`](https://github.com/justeattakeaway/pie/commit/d1dcef180429adaa9879483bd1c584534bef0134), [`2204e0a38`](https://github.com/justeattakeaway/pie/commit/2204e0a38b1117b52fda7a74dd0996660aaf0fd7), [`feb0c405b`](https://github.com/justeattakeaway/pie/commit/feb0c405ba078bc79312612d209971cefe2ae221), [`e3c9de2fd`](https://github.com/justeattakeaway/pie/commit/e3c9de2fd747d7c7e07209b0e9fc72ead9d896ef)]:
  - @justeattakeaway/pie-modal@0.19.0
  - @justeattakeaway/pie-button@0.27.0
  - @justeattakeaway/pie-cookie-banner@0.2.0
  - @justeattakeaway/pie-card-container@0.1.0
  - @justeattakeaway/pie-icons-webc@0.5.0

## 0.26.0

### Minor Changes

- [Added] - allow the link component to behave like a button ([#748](https://github.com/justeattakeaway/pie/pull/748)) by [@raoufswe](https://github.com/raoufswe)

  [Changed] - fixed visual tests for the link and divider components

- [Changed] - Update RTL mixin to infer dir by default and document ([#745](https://github.com/justeattakeaway/pie/pull/745)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - an icon slot to pie link ([#727](https://github.com/justeattakeaway/pie/pull/727)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - New pie-cookie-banner component (just generated files) ([#746](https://github.com/justeattakeaway/pie/pull/746)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - outline-inverse variant for pie-button ([#752](https://github.com/justeattakeaway/pie/pull/752)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`f0e3bd8db`](https://github.com/justeattakeaway/pie/commit/f0e3bd8dbea395564d62772559114cf4ce38cd25), [`edd20637c`](https://github.com/justeattakeaway/pie/commit/edd20637c92c770bc9163f61b69bafd40016df77), [`ebd324485`](https://github.com/justeattakeaway/pie/commit/ebd3244852a76339d49f50d413197dbc683aef83), [`edd20637c`](https://github.com/justeattakeaway/pie/commit/edd20637c92c770bc9163f61b69bafd40016df77), [`f35da5768`](https://github.com/justeattakeaway/pie/commit/f35da57685303ca7045884f30d4d48b2e28856b9), [`05b353466`](https://github.com/justeattakeaway/pie/commit/05b35346604b3a099e0c6952cc5feb26e572efbe), [`30398960d`](https://github.com/justeattakeaway/pie/commit/30398960d46d84d2d705729433fe9483a2638986), [`2f3f23d91`](https://github.com/justeattakeaway/pie/commit/2f3f23d91f38c44e7fab208da7899655eaa626d4), [`8ce8ed77c`](https://github.com/justeattakeaway/pie/commit/8ce8ed77c4bc8da260a8042c7c02a1b5b08152fc)]:
  - @justeattakeaway/pie-divider@0.4.0
  - @justeattakeaway/pie-link@0.3.0
  - @justeattakeaway/pie-cookie-banner@0.1.0
  - @justeattakeaway/pie-css@0.3.0
  - @justeattakeaway/pie-button@0.26.0
  - @justeattakeaway/pie-toggle-switch@0.5.0
  - @justeattakeaway/pie-icon-button@0.14.0
  - @justeattakeaway/pie-modal@0.18.0
  - @justeattakeaway/pie-icons-webc@0.5.0

## 0.25.1

### Patch Changes

- Updated dependencies [[`a1797baa6`](https://github.com/justeattakeaway/pie/commit/a1797baa65ee63b922421504381d0ad4005d9495)]:
  - @justeattakeaway/pie-toggle-switch@0.4.0
  - @justeattakeaway/pie-icon-button@0.14.0
  - @justeattakeaway/pie-divider@0.3.0
  - @justeattakeaway/pie-button@0.25.0
  - @justeattakeaway/pie-modal@0.18.0
  - @justeattakeaway/pie-link@0.2.0

## 0.25.0

### Minor Changes

- [Added] - Label Prop ([#719](https://github.com/justeattakeaway/pie/pull/719)) by [@raoufswe](https://github.com/raoufswe)

- [Added] pie divider component ([#704](https://github.com/justeattakeaway/pie/pull/704)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`536ee7b1e`](https://github.com/justeattakeaway/pie/commit/536ee7b1e1bc778573f57f502a6b0c9718a9944c), [`b8278b24d`](https://github.com/justeattakeaway/pie/commit/b8278b24ddc5de0004b3f850e62590c8a43229b7), [`55ac48b6d`](https://github.com/justeattakeaway/pie/commit/55ac48b6d36f1cb63a7ccadf4c2a0453a0183d9d), [`ec616007c`](https://github.com/justeattakeaway/pie/commit/ec616007cbb0f34ae8e1a9d91fa2622d1790451f), [`0712defc5`](https://github.com/justeattakeaway/pie/commit/0712defc5ecda8510d64883210d786eca527974d), [`55ac48b6d`](https://github.com/justeattakeaway/pie/commit/55ac48b6d36f1cb63a7ccadf4c2a0453a0183d9d), [`731adcc40`](https://github.com/justeattakeaway/pie/commit/731adcc40216e148d57bfb97e9a8226684509842)]:
  - @justeattakeaway/pie-icon-button@0.13.2
  - @justeattakeaway/pie-toggle-switch@0.3.0
  - @justeattakeaway/pie-divider@0.2.0
  - @justeattakeaway/pie-button@0.24.1
  - @justeattakeaway/pie-link@0.1.0
  - @justeattakeaway/pie-modal@0.17.0

## 0.24.0

### Minor Changes

- [Added] - RTL option to the pie web component generator ([#690](https://github.com/justeattakeaway/pie/pull/690)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - Create a skeleton divider web component using our component generator ([#693](https://github.com/justeattakeaway/pie/pull/693)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - pie-css added to storybook ([#684](https://github.com/justeattakeaway/pie/pull/684)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] - destructive and destructive-ghost button variants ([#686](https://github.com/justeattakeaway/pie/pull/686)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Fixed] - hover and active colours for ghost-inverse variant
  [Added] - mixin for reassigning button spinner HSL custom properties

- [Added] - init pie link ([#707](https://github.com/justeattakeaway/pie/pull/707)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`0ebe33ef7`](https://github.com/justeattakeaway/pie/commit/0ebe33ef74f1ccb77b2b45b5a46f1f90b9930ba7), [`5ff10d5b2`](https://github.com/justeattakeaway/pie/commit/5ff10d5b2b700d9719faac3f1e97667dc494937b), [`afc5a0f3d`](https://github.com/justeattakeaway/pie/commit/afc5a0f3d3daadfb8b44f3581c67005521d8fa6d), [`f4871ae0e`](https://github.com/justeattakeaway/pie/commit/f4871ae0e2791f389edb78691ddedd8fbde9892d), [`30b7d305d`](https://github.com/justeattakeaway/pie/commit/30b7d305dc9be47466e4a94056b86c3926efea4f), [`0111f226b`](https://github.com/justeattakeaway/pie/commit/0111f226bf5b18b78bf4dfa834d1ea66113b04c6), [`e6138261c`](https://github.com/justeattakeaway/pie/commit/e6138261ccf6c2acc06a743c2c04a7e6161b511f)]:
  - @justeattakeaway/pie-icon-button@0.13.1
  - @justeattakeaway/pie-button@0.24.0
  - @justeattakeaway/pie-toggle-switch@0.2.0
  - @justeattakeaway/pie-divider@0.1.0
  - @justeattakeaway/pie-modal@0.17.0
  - @justeattakeaway/pie-css@0.2.0

## 0.23.0

### Minor Changes

- [Added] - axe builder to be shared as a base instance across broswer accessibility tests ([#669](https://github.com/justeattakeaway/pie/pull/669)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - renamed the toggle switch story filename ([#669](https://github.com/justeattakeaway/pie/pull/669)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - testing starting templates for the generator-pie-component

### Patch Changes

- Updated dependencies [[`b56832c38`](https://github.com/justeattakeaway/pie/commit/b56832c3846c5588439d1a754abb78f58a282d67)]:
  - @justeattakeaway/pie-icon-button@0.13.0
  - @justeattakeaway/pie-button@0.23.0
  - @justeattakeaway/pie-modal@0.16.0

## 0.22.0

### Minor Changes

- [Added] - PIE Modal control descriptions for all component props ([#656](https://github.com/justeattakeaway/pie/pull/656)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - hasStackedActions to pie-modal action buttons ([#650](https://github.com/justeattakeaway/pie/pull/650)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - Prevent tree-shaking of components in storybook ([#667](https://github.com/justeattakeaway/pie/pull/667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Built webc icons from source control
  [Added] - Type declaration files for components
  [Added] - Types for pie-icons
  [Added] - TS version of pie-icons-configs/config.js (Will be used after DSW-1025)
  [Added] - Webc icon tests for width, height and base classes
  [Changed] - Update pie-icons-webc build to generate a slightly different template for regular and large icons (using different types, etc.)
  [Changed] - Update pie-icons-webc rollup config to remove commonjs build
  [Changed] - Use `just-kebab-case` and `just-pascal-case` instead of `kebab-case` and `pascal-case` to simplify usage (and they're more recently maintained)

### Patch Changes

- Updated dependencies [[`816e65c03`](https://github.com/justeattakeaway/pie/commit/816e65c03deb5d61935bc8b7003736e047f9c1f2), [`64d9f3fe8`](https://github.com/justeattakeaway/pie/commit/64d9f3fe89e766e74cf2c18ca565ac0b06700034), [`8eb679dd8`](https://github.com/justeattakeaway/pie/commit/8eb679dd8f129696648d073fed604303376c3a07), [`0cd6596f0`](https://github.com/justeattakeaway/pie/commit/0cd6596f03a841fd722e4f13a89ef32807444e3a)]:
  - @justeattakeaway/pie-modal@0.16.0
  - @justeattakeaway/pie-icon-button@0.12.0
  - @justeattakeaway/pie-button@0.22.0
  - @justeattakeaway/pie-icons-webc@0.5.0

## 0.21.0

### Minor Changes

- [Added] - Created package skeleton for pie-toggle-switch component ([#658](https://github.com/justeattakeaway/pie/pull/658)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - isFooterPinned property to modal which offers more scrolling options to consumers ([#648](https://github.com/justeattakeaway/pie/pull/648)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Modal aria labels to close, back and loading elements ([#652](https://github.com/justeattakeaway/pie/pull/652)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] SupportingAction prop to modal ([#643](https://github.com/justeattakeaway/pie/pull/643)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- Updated dependencies [[`b104b9217`](https://github.com/justeattakeaway/pie/commit/b104b92172b00adba5c5cc50c71ae9de66c7091a), [`7ccec308f`](https://github.com/justeattakeaway/pie/commit/7ccec308f515d99abeb79a495f2176992bf91be5), [`716af9b90`](https://github.com/justeattakeaway/pie/commit/716af9b90f9e6a0cdaca7ef75198403d2ac5bbd3), [`2e8797c5b`](https://github.com/justeattakeaway/pie/commit/2e8797c5b045d63247575800b9f87f005cfad30f)]:
  - @justeattakeaway/pie-modal@0.15.0
  - @justeattakeaway/pie-icon-button@0.11.0
  - @justeattakeaway/pie-button@0.21.0

## 0.20.0

### Minor Changes

- [Added] - `position` prop to modal ([#630](https://github.com/justeattakeaway/pie/pull/630)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - prop for `leadingAction` to pie-modal ([#632](https://github.com/justeattakeaway/pie/pull/632)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Changed] - Upgrade Storybook to 7.1.0 ([#644](https://github.com/justeattakeaway/pie/pull/644)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - expanded controls info and pie-button updated to include icon slots ([#634](https://github.com/justeattakeaway/pie/pull/634)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- Updated dependencies [[`e6a674b80`](https://github.com/justeattakeaway/pie/commit/e6a674b80955012d164625d132ab20f755a28b70), [`7d0562474`](https://github.com/justeattakeaway/pie/commit/7d05624744191a3066c0243308dd5fc09fc25f42), [`7d0562474`](https://github.com/justeattakeaway/pie/commit/7d05624744191a3066c0243308dd5fc09fc25f42), [`0fbbb882a`](https://github.com/justeattakeaway/pie/commit/0fbbb882a158a5d213b7246919a2b5238105c277), [`5ac23aa93`](https://github.com/justeattakeaway/pie/commit/5ac23aa931e3c9c00141ea50fba18d8445f3e105), [`d6d2529ad`](https://github.com/justeattakeaway/pie/commit/d6d2529ada69cce7eacc49d2411a5268cd403ecc)]:
  - @justeattakeaway/pie-modal@0.14.0
  - @justeattakeaway/pie-icon-button@0.10.0
  - @justeattakeaway/pie-button@0.20.0

## 0.19.0

### Minor Changes

- [Changed] - Use strict typings to ensure storybook build errors when component interfaces change ([#623](https://github.com/justeattakeaway/pie/pull/623)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - loading spinner to modal ([#628](https://github.com/justeattakeaway/pie/pull/628)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Typed stories ([#626](https://github.com/justeattakeaway/pie/pull/626)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - hasBackButton prop to modal ([#623](https://github.com/justeattakeaway/pie/pull/623)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`13341cea1`](https://github.com/justeattakeaway/pie/commit/13341cea18da02ee63ae43b36cd0a686b6d448e6), [`7ad36c8ca`](https://github.com/justeattakeaway/pie/commit/7ad36c8cac13b95c5c925c30c58eb2c644ec42e8), [`13341cea1`](https://github.com/justeattakeaway/pie/commit/13341cea18da02ee63ae43b36cd0a686b6d448e6), [`13341cea1`](https://github.com/justeattakeaway/pie/commit/13341cea18da02ee63ae43b36cd0a686b6d448e6), [`520d8cdce`](https://github.com/justeattakeaway/pie/commit/520d8cdceb80eac7339ed7d4871eabaa24862151)]:
  - @justeattakeaway/pie-modal@0.13.0
  - @justeattakeaway/pie-button@0.19.0
  - @justeattakeaway/pie-icon-button@0.9.0

## 0.18.1

### Patch Changes

- Updated dependencies [[`1d822d1a2`](https://github.com/justeattakeaway/pie/commit/1d822d1a227bcee23759780315ded301c357a21f)]:
  - @justeattakeaway/pie-modal@0.12.0

## 0.18.0

### Minor Changes

- [Added] - Slot added to pie-icon-button ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- Updated dependencies [[`03550a16e`](https://github.com/justeattakeaway/pie/commit/03550a16e2caf96c7b2f372b2a327db5245d1091), [`4b09d6f6f`](https://github.com/justeattakeaway/pie/commit/4b09d6f6fca81ff091b92c84fed2e2f219537524), [`f58ac61e3`](https://github.com/justeattakeaway/pie/commit/f58ac61e31d90c926d14d727b28ea6afc0614c07), [`4b09d6f6f`](https://github.com/justeattakeaway/pie/commit/4b09d6f6fca81ff091b92c84fed2e2f219537524), [`4b09d6f6f`](https://github.com/justeattakeaway/pie/commit/4b09d6f6fca81ff091b92c84fed2e2f219537524)]:
  - @justeattakeaway/pie-button@0.19.0
  - @justeattakeaway/pie-icon-button@0.9.0
  - @justeattakeaway/pie-modal@0.11.0

## 0.17.0

### Minor Changes

- [Added] - New `isFullWidthBelowMid` prop for pie-modal ([#600](https://github.com/justeattakeaway/pie/pull/600)) by [@LTurns](https://github.com/LTurns)

- [Changed] - Refactor modal story to reduce duplication ([#599](https://github.com/justeattakeaway/pie/pull/599)) by [@xander-marjoram](https://github.com/xander-marjoram)

### Patch Changes

- Updated dependencies [[`b6a5ee967`](https://github.com/justeattakeaway/pie/commit/b6a5ee9678ffaaca41e759d2b1b133bb3fac8703), [`b6a5ee967`](https://github.com/justeattakeaway/pie/commit/b6a5ee9678ffaaca41e759d2b1b133bb3fac8703), [`ecec72a75`](https://github.com/justeattakeaway/pie/commit/ecec72a75d25f938b8cb7d1156fc3e454a2cb94a), [`7418905dd`](https://github.com/justeattakeaway/pie/commit/7418905dd94e64b0878e9907f03a4c5db4beefce)]:
  - @justeattakeaway/pie-modal@0.10.0

## 0.16.0

### Minor Changes

- [Added] - inverse and ghost-inverse variants to pie-button ([#596](https://github.com/justeattakeaway/pie/pull/596)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`478bc993e`](https://github.com/justeattakeaway/pie/commit/478bc993ea46bb2894968352d1a6404b07b67de5), [`e80d4f39a`](https://github.com/justeattakeaway/pie/commit/e80d4f39ad466b4c247781e9cca699f557ffb27a), [`478bc993e`](https://github.com/justeattakeaway/pie/commit/478bc993ea46bb2894968352d1a6404b07b67de5)]:
  - @justeattakeaway/pie-modal@0.9.0
  - @justeattakeaway/pie-button@0.18.0
  - @justeattakeaway/pie-icon-button@0.8.0

## 0.15.0

### Minor Changes

- [Added] - New size prop for pie-modal ([#572](https://github.com/justeattakeaway/pie/pull/572)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Visual regression test for each size
  [Changed] - Modal story to include new size prop

### Patch Changes

- Updated dependencies [[`5f8586b81`](https://github.com/justeattakeaway/pie/commit/5f8586b818eb45ccf48508f01202786f6c47b35e), [`88c8aabd6`](https://github.com/justeattakeaway/pie/commit/88c8aabd6a59946fdea03f249bfe2dc0769e4b8b), [`3865b0026`](https://github.com/justeattakeaway/pie/commit/3865b0026261d4fe6db836f7dc57c85aa13e4c76)]:
  - @justeattakeaway/pie-button@0.17.0
  - @justeattakeaway/pie-icon-button@0.7.0
  - @justeattakeaway/pie-modal@0.8.0

## 0.14.0

### Minor Changes

- [Added] - pie-modal story for scroll-locking and toggle button to open/close modal in stories ([#564](https://github.com/justeattakeaway/pie/pull/564)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`b1215f22c`](https://github.com/justeattakeaway/pie/commit/b1215f22ce1da9e126187cb3cf862abbd6815a56), [`0a4a7133c`](https://github.com/justeattakeaway/pie/commit/0a4a7133c0e19c1b76989f3080be21ab860cc9d5)]:
  - @justeattakeaway/pie-modal@0.7.0
  - @justeattakeaway/pie-button@0.16.1
  - @justeattakeaway/pie-icon-button@0.6.1

## 0.13.1

### Patch Changes

- Updated dependencies [[`f109ca73f`](https://github.com/justeattakeaway/pie/commit/f109ca73f6101e4e591258e164b0f0e7a62580c7)]:
  - @justeattakeaway/pie-icon-button@0.6.1
  - @justeattakeaway/pie-button@0.16.1
  - @justeattakeaway/pie-modal@0.6.1

## 0.13.0

### Minor Changes

- [Added] - `size` prop added to pie-icon-button ([#557](https://github.com/justeattakeaway/pie/pull/557)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- Updated dependencies [[`36254afa5`](https://github.com/justeattakeaway/pie/commit/36254afa52585cdef99bd479c189e391cdd9619c), [`3a1a863a4`](https://github.com/justeattakeaway/pie/commit/3a1a863a4397e95899e49dd36cb021e00dd41524), [`c54a8e723`](https://github.com/justeattakeaway/pie/commit/c54a8e723ff6de45d2dda65e435d8af7587dabdf)]:
  - @justeattakeaway/pie-modal@0.6.0
  - @justeattakeaway/pie-icon-button@0.6.0

## 0.12.1

### Patch Changes

- Updated dependencies [[`16c8af6e6`](https://github.com/justeattakeaway/pie/commit/16c8af6e6c1d7206d27034b08da117532a161ac3)]:
  - @justeattakeaway/pie-button@0.16.0
  - @justeattakeaway/pie-icon-button@0.5.0
  - @justeattakeaway/pie-modal@0.5.0

## 0.12.0

### Minor Changes

- [Added] - `heading` **and** `headingLevel` story controls ([#530](https://github.com/justeattakeaway/pie/pull/530)) by [@raoufswe](https://github.com/raoufswe)

- [Changed] - Added modal component to storybook file ([#513](https://github.com/justeattakeaway/pie/pull/513)) by [@fernandofranca](https://github.com/fernandofranca)

### Patch Changes

- Updated dependencies [[`575f559e7`](https://github.com/justeattakeaway/pie/commit/575f559e775cddf2118539c295241bdd5c6d3452), [`1948c7605`](https://github.com/justeattakeaway/pie/commit/1948c7605073d98a39a8e9dc174eb39b2d11431c), [`3bd8b3bf5`](https://github.com/justeattakeaway/pie/commit/3bd8b3bf5cec095db19f7b5a4cbaa6c640737125), [`2019a959a`](https://github.com/justeattakeaway/pie/commit/2019a959a59c8dc8087a0971960bd6649fe4da93), [`3bd8b3bf5`](https://github.com/justeattakeaway/pie/commit/3bd8b3bf5cec095db19f7b5a4cbaa6c640737125), [`575f559e7`](https://github.com/justeattakeaway/pie/commit/575f559e775cddf2118539c295241bdd5c6d3452), [`15ff86928`](https://github.com/justeattakeaway/pie/commit/15ff86928a4a7271fa3c7ecbb0156267b3ee6990), [`15ff86928`](https://github.com/justeattakeaway/pie/commit/15ff86928a4a7271fa3c7ecbb0156267b3ee6990), [`575f559e7`](https://github.com/justeattakeaway/pie/commit/575f559e775cddf2118539c295241bdd5c6d3452), [`15ff86928`](https://github.com/justeattakeaway/pie/commit/15ff86928a4a7271fa3c7ecbb0156267b3ee6990), [`15ff86928`](https://github.com/justeattakeaway/pie/commit/15ff86928a4a7271fa3c7ecbb0156267b3ee6990), [`790b7600f`](https://github.com/justeattakeaway/pie/commit/790b7600f17f352386300de274d5235756cee8da), [`251400a4a`](https://github.com/justeattakeaway/pie/commit/251400a4a797ebb049a7ae392aeb76fa596907e4), [`429ce9b2a`](https://github.com/justeattakeaway/pie/commit/429ce9b2a4a74af971c4c81d0edbf3e127fcf959)]:
  - @justeattakeaway/pie-modal@0.4.0
  - @justeattakeaway/pie-button@0.15.0
  - @justeattakeaway/pie-icon-button@0.4.0

## 0.11.1

### Patch Changes

- Updated dependencies [[`09a7b4b56`](https://github.com/justeattakeaway/pie/commit/09a7b4b5684e54d9f12a9854a99493536f1004e2), [`09a7b4b56`](https://github.com/justeattakeaway/pie/commit/09a7b4b5684e54d9f12a9854a99493536f1004e2)]:
  - @justeattakeaway/pie-icon-button@0.3.0
  - @justeattakeaway/pie-button@0.14.0

## 0.11.0

### Minor Changes

- [Added] - Variant and disabled props to icon button stories ([#491](https://github.com/justeattakeaway/pie/pull/491)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`3a75f8ae7`](https://github.com/justeattakeaway/pie/commit/3a75f8ae72471b262c740814893ef5bb556d135d), [`090354733`](https://github.com/justeattakeaway/pie/commit/090354733f24f0aa52ce287db7f8d13648414150), [`cb6854511`](https://github.com/justeattakeaway/pie/commit/cb68545113e019d2a292d3f1ff2907a383b208fb), [`cb6854511`](https://github.com/justeattakeaway/pie/commit/cb68545113e019d2a292d3f1ff2907a383b208fb), [`0bb3e9a71`](https://github.com/justeattakeaway/pie/commit/0bb3e9a71403fa96cea4c97190f827434abdb13f), [`cb6854511`](https://github.com/justeattakeaway/pie/commit/cb68545113e019d2a292d3f1ff2907a383b208fb), [`f2e6a7a7e`](https://github.com/justeattakeaway/pie/commit/f2e6a7a7e474eef7f7e32f465bdd2c2a3f851ce3), [`090354733`](https://github.com/justeattakeaway/pie/commit/090354733f24f0aa52ce287db7f8d13648414150), [`0bb3e9a71`](https://github.com/justeattakeaway/pie/commit/0bb3e9a71403fa96cea4c97190f827434abdb13f)]:
  - @justeattakeaway/pie-icon-button@0.2.0
  - @justeattakeaway/pie-button@0.13.0
  - @justeattakeaway/pie-modal@0.3.0

## 0.10.0

### Minor Changes

- [Added] - basic pie-icon-button integration ([#486](https://github.com/justeattakeaway/pie/pull/486)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`8f57fc6a3`](https://github.com/justeattakeaway/pie/commit/8f57fc6a35d33a917d7590dcdb5d2a24653e1478)]:
  - @justeattakeaway/pie-icon-button@0.1.0

## 0.9.1

### Patch Changes

- Updated dependencies [[`1f79d9d1a`](https://github.com/justeattakeaway/pie/commit/1f79d9d1a6fe9160b244e82d956290136b87187b)]:
  - @justeattakeaway/pie-modal@0.2.0
  - @justeattakeaway/pie-button@0.12.2

## 0.9.0

### Minor Changes

- [Added] - Axe Add-on to Storybook ([#465](https://github.com/justeattakeaway/pie/pull/465)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

- [Added] Initial story for pie-modal component ([#461](https://github.com/justeattakeaway/pie/pull/461)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.8.1

### Patch Changes

- Updated dependencies [[`457d60446`](https://github.com/justeattakeaway/pie/commit/457d6044602de2027549e9db14510072a361ee46)]:
  - @justeattakeaway/pie-button@0.12.1

## 0.8.0

### Minor Changes

- [Added] - Figma integration into Storybook ([#427](https://github.com/justeattakeaway/pie/pull/427)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - isFullWidth prop to button ([#434](https://github.com/justeattakeaway/pie/pull/434)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`5a411d919`](https://github.com/justeattakeaway/pie/commit/5a411d9197aeda8c41a8ccb8eb7885491345998a), [`5a411d919`](https://github.com/justeattakeaway/pie/commit/5a411d9197aeda8c41a8ccb8eb7885491345998a), [`5a411d919`](https://github.com/justeattakeaway/pie/commit/5a411d9197aeda8c41a8ccb8eb7885491345998a), [`5a411d919`](https://github.com/justeattakeaway/pie/commit/5a411d9197aeda8c41a8ccb8eb7885491345998a)]:
  - @justeattakeaway/pie-button@0.12.0

## 0.7.0

### Minor Changes

- [Changed] - Use a decorator for toggling writing direction ([#428](https://github.com/justeattakeaway/pie/pull/428)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Upgrade to Storybook 7 and add a writing direction toolbar dropdown ([#424](https://github.com/justeattakeaway/pie/pull/424)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`2baba6fb5`](https://github.com/justeattakeaway/pie/commit/2baba6fb5a98ff9792027d67212c963aeefe1236), [`4b081762f`](https://github.com/justeattakeaway/pie/commit/4b081762fbf574235d862f9cd984e80738f99f2f), [`4b081762f`](https://github.com/justeattakeaway/pie/commit/4b081762fbf574235d862f9cd984e80738f99f2f), [`26f5b6b9e`](https://github.com/justeattakeaway/pie/commit/26f5b6b9ef9c257c961030c88f31e2ab2f416240), [`4b081762f`](https://github.com/justeattakeaway/pie/commit/4b081762fbf574235d862f9cd984e80738f99f2f)]:
  - @justeattakeaway/pie-button@0.11.0

## 0.6.3

### Patch Changes

- Updated dependencies [[`af29ccd79`](https://github.com/justeattakeaway/pie/commit/af29ccd79c77ee5fdd3cbb664bfb64ba908363c1)]:
  - @justeattakeaway/pie-button@0.10.2

## 0.6.2

### Patch Changes

- Updated dependencies [[`1080da484`](https://github.com/justeattakeaway/pie/commit/1080da4842d43206eab23f395c78f865df2ff9a7)]:
  - @justeattakeaway/pie-button@0.10.1

## 0.6.1

### Patch Changes

- Updated dependencies [[`b20f36074`](https://github.com/justeattakeaway/pie/commit/b20f36074e52554bdd447e834be0a7a35de94085)]:
  - @justeattakeaway/pie-button@0.10.0

## 0.6.0

### Minor Changes

- [Added] - Slot functionality to pie-button component and associated SB and example app integrations ([#364](https://github.com/justeattakeaway/pie/pull/364)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Added] - HTMLElementTagNameMap entry for pie-button element ([#364](https://github.com/justeattakeaway/pie/pull/364)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated dependencies [[`98ef0d837`](https://github.com/justeattakeaway/pie/commit/98ef0d837ec38636407908ed38518a8595d92efc), [`98ef0d837`](https://github.com/justeattakeaway/pie/commit/98ef0d837ec38636407908ed38518a8595d92efc)]:
  - @justeattakeaway/pie-button@0.9.0

## 0.5.3

### Patch Changes

- Updated dependencies [[`9f6cf07ae`](https://github.com/justeattakeaway/pie/commit/9f6cf07aee1b728c61bf87fce623151f3bb2644b)]:
  - @justeattakeaway/pie-button@0.8.0

## 0.5.2

### Patch Changes

- Add missing Volta settings to package.json ([#322](https://github.com/justeattakeaway/pie/pull/322)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`38734c2d3`](https://github.com/justeattakeaway/pie/commit/38734c2d3fb74f6b77d38b0d2eac95bb0d4dfdc1), [`92a47712e`](https://github.com/justeattakeaway/pie/commit/92a47712e90dfcd79e792420e291b7eed6896bf8)]:
  - @justeattakeaway/pie-button@0.7.0

## 0.5.1

### Patch Changes

- [Added] README content for `yarn watch` script ([#233](https://github.com/justeattakeaway/pie/pull/233)) by [@LTurns](https://github.com/LTurns)

- Updated dependencies [[`85a75085`](https://github.com/justeattakeaway/pie/commit/85a75085d1b0a30d962c89e91c23944d0e99b8b1)]:
  - @justeattakeaway/pie-button@0.6.1

## 0.5.0

### Minor Changes

- [Added] - state styling to button (focus/hover/active/disabled) ([#234](https://github.com/justeattakeaway/pie/pull/234)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`fab1233e`](https://github.com/justeattakeaway/pie/commit/fab1233efd061033a52db4fc43f1cdde4e37e06f)]:
  - @justeattakeaway/pie-button@0.6.0

## 0.4.2

### Patch Changes

- [Fixed] - minor typo in package.json ([#226](https://github.com/justeattakeaway/pie/pull/226)) by [@LTurns](https://github.com/LTurns)

- Updated dependencies [[`76797a73`](https://github.com/justeattakeaway/pie/commit/76797a735617c262ef50ad6f6a486f37c8b9dc2f)]:
  - @justeattakeaway/pie-button@0.5.1

## 0.4.1

### Patch Changes

- Downgrade storybook version to fix build error ([#193](https://github.com/justeattakeaway/pie/pull/193)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.4.0

### Minor Changes

- [Changed] - Bring button styles into the component ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - Update table in pie-button story and use latest storybook version ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - Size property to pie-button component ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

### Patch Changes

- Updated dependencies [[`2a1eaa35`](https://github.com/justeattakeaway/pie/commit/2a1eaa35c6d027d419c99c6cddba72eabab19689), [`2a1eaa35`](https://github.com/justeattakeaway/pie/commit/2a1eaa35c6d027d419c99c6cddba72eabab19689), [`2a1eaa35`](https://github.com/justeattakeaway/pie/commit/2a1eaa35c6d027d419c99c6cddba72eabab19689)]:
  - @justeattakeaway/pie-button@0.5.0

## 0.3.0

### Minor Changes

- [Changed] - Updated component interface for `pie-button` and use hard coded property values in select controls ([#171](https://github.com/justeattakeaway/pie/pull/171)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d)]:
  - @justeattakeaway/pie-button@0.4.0

## 0.2.0

### Minor Changes

- Set up gh-pages deployments and PR previews using github actions ([#167](https://github.com/justeattakeaway/pie/pull/167)) by [@siggerzz](https://github.com/siggerzz)

- Modified the following `package.json` scripts: ([#167](https://github.com/justeattakeaway/pie/pull/167)) by [@siggerzz](https://github.com/siggerzz)

  ```json
      "dev": "storybook dev -p 6006",
      "build": "storybook build --output-dir dist",
      "serve": "serve --no-request-logging dist"
  ```

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v0.1.0

_January 23, 2023_

### Added

- `pie-storybook` workspace
- Storybook with Web Components setup
- Sample `pie-button` story
