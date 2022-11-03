# pie

## Required on your Machine:
1. `git-secrets`: Install following instructions [here](https://github.com/awslabs/git-secrets)
2. Yarn
3. NodeJS 16.x

## To Run

- From the root run `yarn dev --filter=YOUR_PROJECT_NAME` (otherwise it will try to run all projects in dev mode)

## Helpful Links

#### Yarn2

- https://next.yarnpkg.com/getting-started/install
- https://dev.to/arcanis/introducing-yarn-2-4eh1

#### Turborepo

- https://turborepo.org/docs

#### Running project-level commands that rely on root-level dependencies
If you have a project-level command, such as `yarn lint:style` within the pie-microsite project, you will see that it as `run -T` in front of the `stylelint` command.

This is because `stylelint` is a root-level dependency (so it can shared across monorepo projects). The problem is that if you cd into `/apps/pie-microsite` and run the command, you will get a `command not found` error because `stylelint` does not exist at the project level.

Using the `run -T` expression will tell yarn to look in the root of the repository for that dependency.

Example:

```
"lint:style": "run -T stylelint ./src/**/*.{css,scss}"
```

[Yarn docs reference for this](https://yarnpkg.com/getting-started/qa#how-to-share-scripts-between-workspaces)
