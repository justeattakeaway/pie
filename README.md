<p align="center">
  <img align="center" src="./readme_image.png" height="200" alt="">
</p>

<div align="center">
  <a href="https://github.com/justeattakeaway/pie/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/justeattakeaway/pie">
  </a>
  <a href="https://github.com/justeattakeaway/pie/actions/workflows/build.yml?query=branch%3Amain">
    <img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/justeattakeaway/pie/ci.yml">
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    <img alt="Apache 2.0. license" src="https://img.shields.io/badge/License-Apache_2.0-blue.svg">
  </a>
  <a href="https://renovatebot.com/">
    <img alt="Renovate status" src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg">
  </a>
  <img alt="Libraries.io dependency status for GitHub repo" src="https://img.shields.io/librariesio/github/justeattakeaway/pie">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/justeattakeaway/pie?style=social">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/justeattakeaway/pie?style=social">
</div>

# Table of Contents

1. [Introduction](#pie)
2. [Prerequisites](#required-on-your-machine)
3. [Installing Yarn](#installing-yarn--2)
4. [Running the Project](#to-run)
5. [Remote Caching in AWS S3](#remote-caching-in-aws-s3)
6. [Running project-level commands that rely on root-level dependencies](#running-project-level-commands-that-rely-on-root-level-dependencies)
7. [Versioning / Publishing Packages](#versioning--publishing-packages)
   - [Stable Versions - 'latest' tag](#stable-versions---latest-tag)
   - [Beta Versions - 'beta' tag](#beta-versions---beta-tag)
   - [Feature versions - 'next' tag](#feature-versions---next-tag)
   - [Promoting to stable](#promoting-to-stable)
8. [Example apps](#example-apps)
9. [Helpful Links](#helpful-links)
   - [Yarn2](#yarn2)
   - [Commitizen, Commitlint & Conventional Commits](#commitizen-commitlint--conventional-commits)
   - [Pull Request Title](#pull-request-title)
   - [Turborepo](#turborepo)


## Required on your Machine:
1. `git-secrets`: Install following instructions [here](https://github.com/awslabs/git-secrets)
2. Yarn 2+ (see below)
3. NodeJS 16.x

## Installing Yarn >= 2

- Open a terminal *OUTSIDE* of the project folder
- Make sure node >=16.10.0 (at time of test 16.51.1 was the latest and worked)
- Make sure yarn >=1.22 is installed
- run "corepack enable"
- run "yarn -v"
- It should >=1.22
###
- Open a terminal *INSIDE* of the project folder
- run "yarn set version stable"
- run "yarn -v"
- should be >= 2.0.0 (at time of test v3.2.1 was the ref. in this project)

## To Run

- From the root run `yarn dev --filter=YOUR_PROJECT_NAME` (otherwise it will try to run all projects in dev mode)

## Remote Caching in AWS S3
In order to speed up local development / CI workflows, we use Turborepo's remote caching functionality to publish build artifacts to AWS S3. This ensures that only modified packages have their build tasks executed.

In order to take advantage of this functionality, you must set the `TURBO_TOKEN` environment variable on your local machine. Please reach out to the design system team for the value of this token.

Once enabled you'll see 'Remote caching enabled' when executing a packages node task.

## Running project-level commands that rely on root-level dependencies
If you have a project-level command, such as `yarn lint:style` within the pie-docs project, you will see that it has `run -T` in front of the `stylelint` command.

This is because `stylelint` is a root-level dependency (so it can be shared across monorepo projects). The problem is that if you cd into `/apps/pie-docs` and run the command, you will get a `command not found` error because `stylelint` does not exist at the project level.

Using the `run -T` expression will tell yarn to look in the root of the repository for that dependency.

Example:

```
"lint:style": "run -T stylelint ./src/**/*.{css,scss}"
```

[Yarn docs reference for this](https://yarnpkg.com/getting-started/qa#how-to-share-scripts-between-workspaces)


## Versioning / Publishing Packages

If you are contributing a user-facing or noteworthy change to a pie-monorepo package that should be added to the changelog, you should include a changeset with your PR.

Changesets are only required for Major, Minor, and Patch changes that have an effect on consumers. Changes that don't affect consumers do not need to be versioned. Examples include linting, testing or CI updates.

To add a changeset, run this script locally in the root of the project:

```bash
yarn changeset
```

Follow the prompts to select which package(s) are affected by your change, and whether the change is a major, minor or patch change. This will create a file in the `.changesets` directory at the root of the monorepo. This change should be committed and included with your PR.

Considerations:

- When writing your Changesets message, be sure to prefix your message with one of the following: `[Added]`, `[Changed]`, `[Fixed]` or `[Removed]`.
- E.g. `[Added] - My new webpage.`
- You can use markdown in your changeset to include code examples, headings, and more. However, **please use plain text for the first line of your changeset**. The formatting of the GitHub release notes does not support headings as the first line of the changeset.
- When selecting packages for the changesets, only select packages which are intended to be published.


### Stable Versions - 'latest' tag

If your change is intended to be released under the `latest` tag on npm, you must follow this workflow:

- Create a branch with your changes. These changes should exclude any `package.json` or manual `CHANGELOG` updates – only include the `.changesets` changes added by Changesets.
- When you create your PR, target the `main` branch.
- Upon merging to `main`, a new PR titled **release: release Packages** is automatically created. This PR includes the `CHANGELOG.md` and `package.json` version bump. Merging this PR will commit these changes to `main` and execute a publish to npm under the `latest` tag.


### Beta Versions - 'beta' tag

A Beta release is a release that contains experimental changes. These are ready for early adoption and testing by consumers but may introduce bugs (or be considered work-in-progress).

If your change is intended to be released under the `beta` tag on npm, you must follow this workflow:
- Create a new branch with the `beta-*` prefix, and push this to the remote. E.g. `git push origin feature-myawesomework`.
- Create another branch, off this initial beta branch, to implement your code changes. Ensure that this branch **does not** use a prefix.
- When you create your PR, target the `beta-*` branch.
- Upon merging to your `beta-*` branch, a new PR titled **release: Release Packages (beta)** is automatically created. This PR includes the `CHANGELOG.md` and `package.json` version bump. Merging this PR will execute a publish to npm using the appropriate tag.


### Feature versions - 'next' tag

A Feature release is for larger changes that may require multiple PRs, across several packages, before it is released. These changes are unstable and are not intended to be used by consumers. Typically, these releases will be used for testing changes in consuming applications as an alternative to using something like `yalc`.

If your change is intended to be released under the `next` tag on npm, you must follow this workflow:

- Create a branch with your changes. These changes should exclude any `package.json` or manual `CHANGELOG` updates – only include the `.changesets` changes added by Changesets.
- When you create your PR, target the `staging` branch.
- Upon merging to `staging`, a new PR titled **release: Release Packages (next)** is automatically created. This PR includes the `CHANGELOG.md` and `package.json` version bump. Merging this PR will commit these changes to `staging` and execute a publish to npm under the `next` tag.


**Notes:** Any new PRs that target the `beta-*` / `staging` branch will cause GitHub actions to include the changes as part of that beta / next deployment.
Any package that uses the `beta` tag **must** follow this workflow until it's ready to be promoted to the `latest` tag (see Stable Versions section). PRs that combine changes in `latest` and `beta` / `next` packages will result in the beta / next package being versioned incorrectly.

#### Promoting to stable

When you're happy your `next` / `beta` tagged package is ready to be promoted to a `latest` release, you must use the following workflow.

- Create a PR to merge the `feature-*` / `beta-*` into `main`.
- Upon merging to `main`, a new PR titled **release: Release Packages** is automatically created. This PR includes the `CHANGELOG.md` and `package.json` version bump. Merging this PR will commit these changes to `main` and execute a publish to npm.

## Example apps

Whilst our monorepo supports multiple versions of node, there are specific example applications that are intended to be used with specific versions of node. For example our Nuxt 2 app should be used with Node 16.

This means if you ran the command `yarn build:examples` or `build:examples --filter=wc-nuxt2`, ensure you are using Node 16 or you'll see it fail.

To see our supported Node versions for each example application, please refer to the `engines` section of the example application you wish to build.

## Helpful Links

#### Yarn2

- https://next.yarnpkg.com/getting-started/install
- https://dev.to/arcanis/introducing-yarn-2-4eh1

#### Commitizen, Commitlint & Conventional Commits

- Commitizen - https://github.com/commitizen/cz-cli
- Commitlint - https://github.com/conventional-changelog/commitlint
- Conventional Commits - https://www.conventionalcommits.org/en/v1.0.0/

We use `commitizen` in combination with `commitlint` to ensure commit messages in the PIE monorepo conform with the Conventional Commits specification. Having a standardised format ensures commit messages are more descriptive, and provide context to contributors working in the codebase.

We recommend when commiting new changes to the codebase, you use `yarn cz` and **not** `git commit -m`.

The former will present commitizen's interactive prompt to ensure it conforms to our commitlint ruleset.

While you can still use `git commit -m`, it is up to you to manually ensure your commit message conforms with our commitlint ruleset.

### Pull Request Title
When creating a pull request, please ensure the title conforms to the conventional commit standard. For example, a `fix` to `pie-docs` should have a title such as:

`fix(pie-docs): fixed a bug with navigation`

#### Turborepo

- https://turborepo.org/docs

---

Turborepo is an intelligent build system optimized for JavaScript and TypeScript codebases. We use Turborepo to facilitate the execution of all our build scripts within the PIE monorepo.
