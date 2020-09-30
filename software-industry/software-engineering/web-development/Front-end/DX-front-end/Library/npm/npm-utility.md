# Table of Contents
- [Table of Contents](#table-of-contents)
- [Commands](#commands)
  - [npm install/npm i](#npm-installnpm-i)
    - [npm install --save](#npm-install---save)
    - [npm install -D/npm install --save-dev](#npm-install--dnpm-install---save-dev)
  - [npm init](#npm-init)
    - [npm init -y](#npm-init--y)
    - [npm i \[package\] --save-dev](#npm-i-package---save-dev)
    - [npm ci](#npm-ci)
    - [npm run \[scriptObjectChild\]](#npm-run-scriptobjectchild)
    - [npx](#npx)
- [package.json](#packagejson)
  - [script](#script)
  - [devDependency](#devdependency)
  - [dependency](#dependency)
- [package-lock.json](#package-lockjson)
- [Topics](#topics)
  - [The difference of `npm i -g`, npm i -D` and `npm i`](#the-difference-of-npm-i--g-npm-i--dandnpm-i)
  - [npm notice created a lockfile as package-lock.json. You should commit this file.](#npm-notice-created-a-lockfile-as-package-lockjson-you-should-commit-this-file)
- [Troubleshoot](#troubleshoot)
  - [npm ERR! 404 Not Found - GET https://registry.npmjs.org/es-abstract/-/es-abstract-1.14.0.tgz](#npm-err-404-not-found---get-httpsregistrynpmjsorges-abstract-es-abstract-1140tgz)
  - [npm WARN tar ENOENT: no such file or directory, open '\[path\]'](#npm-warn-tar-enoent-no-such-file-or-directory-open-path)
# Commands
## npm install/npm i
### npm install --save
- For production
### npm install -D/npm install --save-dev
- Install as dependency
## npm init
- When inputting ```npm init```, it asks you what the entry point is, what does that mean?
### npm init -y
- npm init -yes
### npm i \[package\] --save-dev
- Save to ```devDependencies```
### npm ci
### npm run \[scriptObjectChild\]
- Run the ```scriptObjectChild``` in the ```script``` object in package.json
### npx
- npx webpack: *npx webpack, which will take our script at src/index.js as the entry point, and will generate dist/main.js as the output. The npx command, which ships with Node 8.2/npm 5.2.0 or higher, runs the webpack binary (./node_modules/.bin/webpack) of the webpack package we installed in the beginning*
  - npx webpack --config webpack.config.js
# package.json
## script
## devDependency
## dependency
# package-lock.json

# Topics
## The difference of `npm i -g`, npm i -D` and `npm i`
- [npm 1.0: Global vs Local installation](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/)

## npm notice created a lockfile as package-lock.json. You should commit this file.

# Troubleshoot
## npm ERR! 404 Not Found - GET https://registry.npmjs.org/es-abstract/-/es-abstract-1.14.0.tgz
## npm WARN tar ENOENT: no such file or directory, open '\[path\]'