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

Note; this project should never create a node_module folder and you should never run any npm commands only yarn, i.e. yarn add (-P, -D), yarn remove, yarn dlx, yarn cache clean, etc..

## To Run

- todo

## Helpful Links

https://www.11ty.dev/docs/getting-started/
