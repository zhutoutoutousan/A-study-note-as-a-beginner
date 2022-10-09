# Buffer to permanent note
## Roadmap

# 2021/6/11
## Get a roadmap to learn partially systematically
- [Roadmap 2021 (2020-12-08)](https://webpack.js.org/blog/2020-12-08-roadmap-2021/)

# 2021/6/13
## Solve problems
- A problem happens in an edge case where modules from two entrypoints are merged into a single chunk and they reference a side-effect-free module which is not in the shared chunk since only one of the entrypoints uses exports from the side-effect-free module.

# 2021/7/9-
## Webpack source code reading
https://github.com/webpack/webpack

### /main/declarations/LoaderContext.d.ts
- Difference between `type` and `interface`
```typescript
// https://www.typescriptlang.org/docs/handbook/utility-types.html
type Schema = Parameters<typeof validate>[0];
```