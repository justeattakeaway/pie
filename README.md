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
If you have a project-level command, such as `yarn lint:style` within the pie-microsite project, you will see that it has `run -T` in front of the `stylelint` command.

This is because `stylelint` is a root-level dependency (so it can be shared across monorepo projects). The problem is that if you cd into `/apps/pie-microsite` and run the command, you will get a `command not found` error because `stylelint` does not exist at the project level.

Using the `run -T` expression will tell yarn to look in the root of the repository for that dependency.

Example:

```
"lint:style": "run -T stylelint ./src/**/*.{css,scss}"
```

[Yarn docs reference for this](https://yarnpkg.com/getting-started/qa#how-to-share-scripts-between-workspaces)


### Versioning / Publishing Packages

If you are contributing a user-facing or noteworthy change to pie-monorepo that should be added to the changelog, you should include a changeset with your PR.

To add a changeset, run this script locally in the root of the project:

```bash
yarn changeset
```

Follow the prompts to select which package(s) are affected by your change, and whether the change is a major, minor or patch change. This will create a file in the `.changesets` directory of the repo. This change should be committed and included with your PR.

Considerations:

- You can use markdown in your changeset to include code examples, headings, and more. However, **please use plain text for the first line of your changeset**. The formatting of the GitHub release notes does not support headings as the first line of the changeset.
- When selecting packages for the changesets, only select packages which are published.


#### Stable Versions - 'latest' tag

If your change is intended to be released under the `latest` tag on npm, you must follow this workflow:

- Create a branch with your changes.
- When you create your PR, target the `main` branch.

Upon merging to `main`, the CHANGELOG.md, package.json version bump, and npm publish will execute automatically by GitHub Actions.


##### Beta Versions - 'beta' tag.

A Beta release is a release that contains experimental changes that're ready for early adoption by consumers, but may introduce bugs.

##### Feature versions - 'next' tag.

A Feature release is for larger changes that may require multiple PR's before a version is released. These changes are unstable, and are not intended to be used by consumers. Typically, these releases will be used for testing changes in consuming applications as an alternative to using something like `yalc`.


If your change is intended to be released under the `next` / `beta` tag on npm, you must follow this workflow:
- Create a new branch with the `feature-*` / `beta-*` prefix, and push this to the remote.
- Create another branch to implement your code changes. Ensure this **does not** use a prefix.
- When you create your PR, target the `feature-*` / `beta-*` branch. 
- GitHub actions will automatically create a new PR that includes the `package.json` version bump, as well as changelog entries.
- Once this generated PR gets merged, GitHub actions will publish your changes under the `next` / `beta` tag.

**Note:** Any new PR's that target the `feature-*` / `beta-*` branch will cause GitHub actions to include the changes as part of the release.

##### Promoting to stable

When you're happy your `next` / `beta` tagged package is ready to be promoted to a `latest` release, you must use the following workflow.

- Create a PR to merge the `feature-*` / `beta-*` into `main`.
- Upong merging, a new `latest` release will be available.
- Upon merging to `main`, the CHANGELOG.md, package.json version bump, npm publish will execute automatically.