# pie

This site needs node 16.10 or above (built using 16.15.1), yarn 2 or above (built using 3.2.1)

## Yarn >= 2

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

## Notes
- This project should never create a `node_module` folder and you should never run any `npm` commands only `yarn`, i.e. `yarn add` (-P, -D), `yarn remove`, `yarn dlx`, `yarn cache clean`, etc..
- If you do run npm my mistake then you need to delete the `node_module` folder that it will create.
- As this whole project is setup to use [**Turborepo**](https://turborepo.org/docs) then try and run all 'yarn' commands from the root rather than at the individual project level.

## To Run

- From the root run `yarn dev`

## Helpful Links

https://www.11ty.dev/docs/getting-started/
