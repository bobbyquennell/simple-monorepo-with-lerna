# simple-monorepo-with-lerna
a simple monorepo using lerna 

## bootstrap the monorepo:
 run below cmd in root folder to install root level dependencies
 and all dependencies in the `packages/*` level
 ```bash
 > npm run setup
 ```
## compile the monorepo
 run below cmd in root folder to build all packages
 ```bash
 > lerna run compile
 ```
## general usage
- run `lerna bootstrap` to bootstrap dependencies
refer: https://betterstack.dev/blog/lerna-typescript-monorepo/#heading-bootstrap-dependencies
- run `lerna run compile` to compile TypeScript for all packages
- use `lerna run <cmd>` to execute the script "`<cmd>`" inside each package's package.json

use `lerna add` to install libraries into all packages
 - example: `lerna add lint-staged packages/* --dev`
