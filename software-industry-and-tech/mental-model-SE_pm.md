# Table of Contents
- [Table of Contents](#table-of-contents)
- [Agile development](#agile-development)
- [Boilerplates](#boilerplates)
  - [Architecture](#architecture)
  - [Instance](#instance)
- [General](#general)
- [Front-end](#front-end)
  - [Client-side networking](#client-side-networking)
  - [Client-side storage](#client-side-storage)
  - [UI/UX](#uiux)
    - [Tools and gadgets](#tools-and-gadgets)
  - [Business logic](#business-logic)
  - [DI/DX](#didx)
    - [Tools and gadgets](#tools-and-gadgets-1)
- [Front-end <--> back-End architecture](#front-end----back-end-architecture)
- [Back-end](#back-end)
- [Deprecation](#deprecation)
- [Code reference](#code-reference)
  - [FxxkingSassLoaderConfig](#fxxkingsassloaderconfig)


# Agile development
- CMS

# Boilerplates
## Architecture
## Instance


# General
- File manipulation
  - "glob"
    - Match files using the patterns the shell uses, like stars and stuff.
    - [RTFM](https://github.com/isaacs/node-glob)
    - [File Globbing In Linux](https://www.youtube.com/watch?v=hQyXuuBbCOo)
    - Source code study progress track
      - Why study
      - [RTFM](https://github.com/isaacs/node-glob)
  - "blob"
# Front-end
## Client-side networking
- Web API: The WebSockets
  - The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.
## Client-side storage
- web API: Web storage
  - Session storage
  - Local Storage
- Web API: IndexDB API
- Browser Cookie
## UI/UX
### Tools and gadgets
- Framework
  - Bootstrap
    - UI gadget(html class --> css library)
  - ElementUI
  - Ant
- Animation
  - d3.js
  - three.js
- npm packages
  - UI gadgets
    - fontawesome
      - "@fortawesome/fontawesome-svg-core"
      - "@fortawesome/free-brands-svg-icons"
      - "@fortawesome/free-regular-svg-icons"
      - "@fortawesome/free-solid-svg-icons"
      - "@fortawesome/vue-fontawesome"
## Business logic
- JavaScript
- TypeScript
## DI/DX
### Tools and gadgets
- Project management
  - Formatting
    - Eslint
      - "babel-eslint"
      - "eslint"
        - Issues
          - Parse errors in imported module
      - "eslint-plugin-vue"
  - Bundling
    - Webpack
      - "sass-loader"
      - "style-resources-loader"
        - Issues
          - TypeError: Cannot read property 'style-resources-loader' of undefined
            - When working with vue-cli
            - [vue-cli4项目引入sass的坑 Cannot read property ‘style-resources-loader‘ of undefined](https://blog.csdn.net/daxianghaoshuai/article/details/108375862)
              - [Code](#fxxkingsassloaderconfig)
    - "parcel"
      - Less configuration, easier to use
      - Automatically install dependecies when serving on save
      - [Using Parcel In A Vue.js App](https://scotch.io/tutorials/using-parcel-in-a-vuejs-app)
      - "parcel-bundler"
        - Issues
          - Cannot read property 'type' of undefined - Bundler.js
            - [Cannot read property 'type' of undefined - github](https://github.com/parcel-bundler/parcel/issues/2749)
            - Seems to be the problem with the vscode
- UI-DX
  - Template engine
    - CSS
      - Sass
        - "sass-loader"
      - Less
    - HTML
      - jade
      - pub
- Framework(DI+DX)
  - Vue
    - "@vue/cli-plugin-babel"
    - "@vue/cli-plugin-eslint"
    - "@vue/cli-service"
    - "vue-cli-plugin-style-resources-loader"
    - "vue-template-compiler"
  - React
    - Build tools
      - "Next"
      - [The React Framework for Production](https://nextjs.org/)
  - Angular
- Cross environment support
  - "cross-env"
# Front-end <--> back-End architecture
- Web worker
  - [What's the difference between self and window?](https://stackoverflow.com/questions/3638887/whats-the-difference-between-self-and-window#:~:text=In%20short%2C%20both%20window%20and,object%20of%20client%2Dside%20javascript.&text=self%20is%20a%20read%2Donly,favor%20of%2C%20the%20window%20directly.)
- API
  - Insomnia/Postman
- Testing
  - [jsonplaceholder](https://jsonplaceholder.typicode.com/)
    - Free to use fake Online REST API for testing and prototyping
# Back-end
- Node.js
  - Project architecture
    - [bulletproof-nodejs](https://github.com/santiq/bulletproof-nodejs)
  - Resource handler
    - "node-sass"
      - Issues
      - [Support for Node V12 - GitHub](https://github.com/sass/node-sass/issues/2632)
      - Maybe just try again after a while
  - Networking
    - "body-parser"
      - [RTFM](https://github.com/expressjs/body-parser)
      - [Node.js - Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
      - Study more on HTTP, browser architecture to unlock furthur study
- Mongodb
  - "mongodb-memory-server"
- DI/DX
  - express
  - nodemon
    - Refresh the page on file change&&save
    - Configure: nodemon.json

# Deprecation
- [Google: Deprecations](https://cloud.google.com/appengine/docs/deprecations)
- [Waybackmachine](http://web.archive.org/)
  - Access deprecated website

# Code reference
## FxxkingSassLoaderConfig
```javascript 
// https://cli.vuejs.org/config/#global-cli-config
// vue.config.js
const path = require('path')
module.exports={
    css: {
        requireModuleExtension: true,
        sourceMap: true,
        loaderOptions: {
          scss: {
            additionalData(content, loaderContext) {
              const { resourcePath, rootContext } = loaderContext;
              const relativePath = path.relative(rootContext, resourcePath);
              if (
                relativePath.replace(/\\/g, "/") !== "src/styles/index.scss"
              ) {
                return '@import "~@/styles/index.scss";' + content;
              }
              return content;
            },
          },
        },
      },
}
```