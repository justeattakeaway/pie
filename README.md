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

- From the root run `yarn dev`

## Helpful Links

#### Yarn2

- https://next.yarnpkg.com/getting-started/install
- https://dev.to/arcanis/introducing-yarn-2-4eh1

#### Turborepo

- https://turborepo.org/docs
