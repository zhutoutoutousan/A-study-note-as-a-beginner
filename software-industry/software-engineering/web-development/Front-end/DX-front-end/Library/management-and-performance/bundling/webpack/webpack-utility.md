# RTFM
- [Guides](https://webpack.js.org/guides/)
  - [ ] Initial Study
    - Progress:
    - [x] Concepts
      - [Webpack concept](https://webpack.js.org/concepts/)
    - [ ] Comparison
      -  [link](https://webpack.js.org/comparison/)
- Getting Started
  - [Link1](https://webpack.js.org/guides/getting-started/)
  - Progress: Getting Started - npm scripts
# webpack.config.js

# Concept
## Entry
- An **entry point** indicates which module webpack should use to begin building out its internal dependency graph. Wepack will figure out which other modules and libraries that entry point depends on.
- Default: ```./src/index.js```
- RTFM --> Concept
## Output
- The **output** property tells webpack where to emit the *bundles* it creates and how to name these files.
- Default: ```./dist/main.js``` for the main output file and to the ```./dist/``` folder for any other generated file.
- RTFM --> Concept
## Loaders
- **Loaders** allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
- Properties
  - ```test```: identifies which file or files should be transformed
  - ```use```: indicates which loader should be used to do the transforming
## Plugins
## Mode
## Browser Compatibility
# Comparison

# Dependency graph