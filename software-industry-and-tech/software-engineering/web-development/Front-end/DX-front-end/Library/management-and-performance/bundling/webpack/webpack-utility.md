# RTFM and study track
- [Guides](https://webpack.js.org/guides/)
  - [x] Initial Study
    - Progress:
    - [x] Concepts
      - [Webpack concept](https://webpack.js.org/concepts/)
    - [x] Comparison
      -  [link](https://webpack.js.org/comparison/)
- [x] Getting Started
  - [Link1](https://webpack.js.org/guides/getting-started/)
  - Progress: Completed
- More official documents 
  - [x] Continue your developer journey further to unlock
  - [ ] Asset management
- Extensive topics
  - [Stack Overflow - Work with express and webpack](https://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express)
- Learn from demos
  - [Colt - webpack-demo-app](https://github.com/Colt/webpack-demo-app)
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