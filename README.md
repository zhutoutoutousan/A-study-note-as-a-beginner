# Table of Contents
- [Table of Contents](#table-of-contents)
- [Project plan:](#project-plan)
- [Project setup](#project-setup)
  - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
  - [Compiles and minifies for production](#compiles-and-minifies-for-production)
  - [Lints and fixes files](#lints-and-fixes-files)
- [Usage](#usage)
- [TODO:](#todo)
  - [A crawler](#a-crawler)
    - [A node script markdown router](#a-node-script-markdown-router)
  - [A node automatic content generator](#a-node-automatic-content-generator)
  - [Front-end](#front-end)
  - [Deployment](#deployment)
  - [STUDY](#study)
  - [Customize configuration](#customize-configuration)

# Project plan:
- This is mostly a study note by reading books(pdf included), also some side projects.
- Trim down size
# Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run serve
```

## Compiles and minifies for production
```
npm run build
```

## Lints and fixes files
```
npm run lint
```

# Usage
Click [this](./study/router.md) to view the study note router.(Yet to finish)

- If you want to take a browse at the markdown notes, just include this project in your Visual Studio Code and explore the ```study``` folder.


# TODO:
## A crawler
Create a crawler that automatically gets information on studying in Germany/Other countries

REFERENCE:
[SaisTP5](https://github.com/BugAngel/SaisTP5)

[DAAD](https://www.daad.de/en/)

### A node script markdown router
Create a node script that automatically generate a routing markdown that shows the whole 

For more click [this](./util/README.md)

Router directory traverse reference:

[Stack Overflow: Get all directories within directory nodejs](https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs/24594123https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs/24594123)

[Stack Overflow: Loop through files in a folder Node.js](https://stackoverflow.com/questions/32511789/looping-through-files-in-a-folder-node-js)

## A node automatic content generator
Can you sort of make a node script that scans all of the markdown file to search for the sections(Just a few html divs with the id, transformed to kebab case, all uppercase letter turned to the lower one.), then just generate an **Overview** section at the start of the markdown file?

## Front-end
- Electron-vue front-end

## Deployment
- AWS EC

## STUDY
- Good good study, day day down!


## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
