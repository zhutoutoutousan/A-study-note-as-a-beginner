# 2021/9/3
## Boilerplate found - Miragejs
- [vedovelli/miragejs-starter-kit](https://github.com/vedovelli/miragejs-starter-kit)

!Degit has problems again for vedovelli/miragejs-starter-kit miragejs

```
could not find commit hash for HEAD
```

- https://github.com/sveltejs/template/issues/68
  - Install Git CLI

- https://github.com/Rich-Harris/degit/issues/37
  - Replace with `gittar`

- 2021/9/6
  - I did some research about `degit`, it seems like that it's a tool for only cloning the last commit information of a repository, so that `.git` folder size will be reduced.
  - A lot of its contents are based on linux system commands and bash, so it has limited support for `windows system`
  - ALTERNATIVE: Use git clone shallow copy
    - https://stackoverflow.com/questions/1209999/using-git-to-get-just-the-latest-revision

# 2021/9/22
## If a react project already has a bunch of API calls set up without enough miragejs configuration, and if you import `createServer`, it will simply overwrite the current API calls