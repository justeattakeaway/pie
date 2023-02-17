# pie

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

## Helpful Links

#### Yarn2

- https://next.yarnpkg.com/getting-started/install
- https://dev.to/arcanis/introducing-yarn-2-4eh1

#### Turborepo

- https://turborepo.org/docs

---

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
- Upon merging to `main`, a new PR titled **Version Packages** is automatically created. This PR includes the `CHANGELOG.md` and `package.json` version bump. Merging this PR will commit these changes to `main` and execute a publish to npm under the `latest` tag.


### Beta Versions - 'beta' tag

A Beta release is a release that contains experimental changes. These are ready for early adoption and testing by consumers but may introduce bugs (or be considered work-in-progress).

### Feature versions - 'next' tag

A Feature release is for larger changes that may require multiple PRs, across several packages, before it is released. These changes are unstable and are not intended to be used by consumers. Typically, these releases will be used for testing changes in consuming applications as an alternative to using something like `yalc`.


If your change is intended to be released under the `next` / `beta` tag on npm, you must follow this workflow:
- Create a new branch with the `feature-*` / `beta-*` prefix, and push this to the remote. E.g. `git push origin feature-myawesomework`.
- Create another branch, off this initial feature/beta branch, to implement your code changes. Ensure that this branch **does not** use a prefix.
- When you create your PR, target the `feature-*` / `beta-*` branch.
- Upon merging to your `feature-*` / `beta-*` branch, a new PR titled **Version Packages (beta)** / **Version Packages (next)** is automatically created. This PR includes the `CHANGELOG.md` and `package.json` version bump. Merging this PR will execute a publish to npm using the appropriate tag.

**Notes:** Any new PRs that target the `feature-*` / `beta-*` branch will cause GitHub actions to include the changes as part of that beta/feature release.
Any package that uses the `beta` / `next` tag **must** follow this workflow until it's ready to be promoted to the `latest` tag (see Stable Versions section). PRs that combine changes in `latest` and `beta` / `next` packages will result in the beta / next package being versioned incorrectly.

#### Promoting to stable

When you're happy your `next` / `beta` tagged package is ready to be promoted to a `latest` release, you must use the following workflow.

- Create a PR to merge the `feature-*` / `beta-*` into `main`.
- Upon merging to `main`, a new PR titled **Version Packages** is automatically created. This PR includes the `CHANGELOG.md` and `package.json` version bump. Merging this PR will commit this changes to `main` and execute a publish to npm.
