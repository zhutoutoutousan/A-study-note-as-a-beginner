# Table of Contents
- [Table of Contents](#table-of-contents)
- [Trivia?](#trivia)
- [Front-end](#front-end)
  - [UI/UX](#uiux)
    - [Tools and gadgets](#tools-and-gadgets)
  - [Business logic](#business-logic)
  - [DI/DX](#didx)
    - [Tools and gadgets](#tools-and-gadgets-1)
- [Front-end <--> back-End architecture](#front-end----back-end-architecture)
- [Back-end](#back-end)
- [Code reference](#code-reference)
  - [FxxkingSassLoaderConfig](#fxxkingsassloaderconfig)

# Trivia?
- Contents in quotes, you can just use `npm i -D? \[quotedName\]`

# Front-end
## UI/UX
### Tools and gadgets
- Framework
  - Bootstrap
    - UI gadget(html class --> css library)
  - ElementUI
  - Ant
- Animation
  - d3.js
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
  - Angular
- npm packages
# Front-end <--> back-End architecture
- API
  - Insomnia/Postman
# Back-end
- Node.js
  - "node-sass"
    - Issues
    - [Support for Node V12 - GitHub](https://github.com/sass/node-sass/issues/2632)
    - Maybe just try again after a while
- Mongodb
  - "mongodb-memory-server"
- DI/DX
  - express
  - nodemon
    - Refresh the page on file change&&save
    - Configure: nodemon.json



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