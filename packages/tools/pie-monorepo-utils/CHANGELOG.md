# @justeattakeaway/pie-monorepo-utils

## 0.9.7

### Patch Changes

- Updated dependencies [[`de189e0`](https://github.com/justeattakeaway/pie/commit/de189e0ced248b1eb275f42943c095ed1fdd8c8b)]:
  - @justeattakeaway/eslint-plugin-snacks-pie-migration@0.11.0

## 0.9.6

### Patch Changes

- Updated dependencies [[`031bb82`](https://github.com/justeattakeaway/pie/commit/031bb8292ad3dd813616c5eb17f2a14d1347d3b9)]:
  - @justeattakeaway/eslint-plugin-snacks-pie-migration@0.10.0

## 0.9.5

### Patch Changes

- Updated dependencies [[`5f7804f`](https://github.com/justeattakeaway/pie/commit/5f7804fc63373b6ad8d626fbc1ba1b8c1b2f368b)]:
  - @justeattakeaway/eslint-plugin-snacks-pie-migration@0.9.0

## 0.9.4

### Patch Changes

- Updated dependencies [[`ef9672c`](https://github.com/justeattakeaway/pie/commit/ef9672c608b4c519fa1ea68c54db9198fc277a4d)]:
  - @justeattakeaway/eslint-plugin-snacks-pie-migration@0.8.0

## 0.9.3

### Patch Changes

- [Updated] - Internal dependencies ([#2913](https://github.com/justeattakeaway/pie/pull/2913)) by [@siggerzz](https://github.com/siggerzz)

- [Fixed] - Updating internal scripts ([#2908](https://github.com/justeattakeaway/pie/pull/2908)) by [@siggerzz](https://github.com/siggerzz)

- [Changed] - Extend ticket prefix max length from 4 to 6 chars, so it allows longer prefixes such as WEBEX ([#2912](https://github.com/justeattakeaway/pie/pull/2912)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`de178ad`](https://github.com/justeattakeaway/pie/commit/de178ad7140252380280fd2c01ab2e16eb15175b), [`c68895c`](https://github.com/justeattakeaway/pie/commit/c68895c3e191be73aa54c81a31e4fa38f88c2ba1)]:
  - @justeattakeaway/eslint-plugin-snacks-pie-migration@0.7.2

## 0.9.2

### Patch Changes

- [Changed] - script invocation patterns, replacing npx with yarn ([#2891](https://github.com/justeattakeaway/pie/pull/2891)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.9.1

### Patch Changes

- Updated dependencies [[`0929ebb`](https://github.com/justeattakeaway/pie/commit/0929ebba0fc06cac1c2a21f65f1c6216172eaf7c)]:
  - @justeattakeaway/eslint-plugin-snacks-pie-migration@0.7.1

## 0.9.0

### Minor Changes

- [Changed] - split dangerjs into seperate files ([#2776](https://github.com/justeattakeaway/pie/pull/2776)) by [@siggerzz](https://github.com/siggerzz)

- [Added] - preserve-peer-dep-ranges which makes changeset preserve fuzzy peerDep ranges when upgrading ([#2766](https://github.com/justeattakeaway/pie/pull/2766)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - updated changeset utility script ([#2763](https://github.com/justeattakeaway/pie/pull/2763)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.8.0

### Minor Changes

- [Changed] - updating minor pkg deps ([#2754](https://github.com/justeattakeaway/pie/pull/2754)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.7.0

### Minor Changes

- [Added] - New `match-pie-commit-pattern` commitlint rule to provide better messaging for invalid commit messages ([#2513](https://github.com/justeattakeaway/pie/pull/2513)) by [@siggerzz](https://github.com/siggerzz)

## 0.6.0

### Minor Changes

- [Added] - CLI to detect breaking changes of `pie-webc` deps and prompt contributors to add a required changeset for `pie-webc` ([#2481](https://github.com/justeattakeaway/pie/pull/2481)) by [@siggerzz](https://github.com/siggerzz)

## 0.5.1

### Patch Changes

- [Fixed] - Security patch to add scope to pie-storybook pkg ([#2345](https://github.com/justeattakeaway/pie/pull/2345)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - Security patch to add scope to pie-docs ([#2342](https://github.com/justeattakeaway/pie/pull/2342)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.5.0

### Minor Changes

- [Changed] - Add a v property to all components using vite to bake the version number into the code ([#2301](https://github.com/justeattakeaway/pie/pull/2301)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.4.0

### Minor Changes

- [Updated] - cdn publishing functionality to handle multiple packages ([#2268](https://github.com/justeattakeaway/pie/pull/2268)) by [@siggerzz](https://github.com/siggerzz)

## 0.3.1

### Patch Changes

- [Added] - repository and homepage references to packages ([#2246](https://github.com/justeattakeaway/pie/pull/2246)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.3.0

### Minor Changes

- [Changed] - Reuse common logic for /test-aperture & /snapit commands ([#2198](https://github.com/justeattakeaway/pie/pull/2198)) by [@siggerzz](https://github.com/siggerzz)

## 0.2.0

### Minor Changes

- [Added] - GitHub Actions JS to pie-monorepo-utils package ([#2070](https://github.com/justeattakeaway/pie/pull/2070)) by [@siggerzz](https://github.com/siggerzz)

## 0.1.0

### Minor Changes

- [Added] - Renamed `pie-git-hooks-scripts` to `pie-monorepo-utils` ([#2034](https://github.com/justeattakeaway/pie/pull/2034)) by [@siggerzz](https://github.com/siggerzz)

  **Old Changelog entries from `pie-git-hooks-scripts`**

  [Changed] - Exported files for use in consuming repos ([#1206](https://github.com/justeattakeaway/pie/pull/1206)) by [@siggerzz](https://github.com/siggerzz)
  [Added] - scripts for verifying branch name and commit message format ([#625](https://github.com/justeattakeaway/pie/pull/625)) by [@fernandofranca](https://github.com/fernandofranca)
