# 目录
- [目录](#目录)
- [2021/3/17](#2021317)
  - [Element-ui中node-gyp安装出错](#element-ui中node-gyp安装出错)
    - [`node-gyp`是啥?](#node-gyp是啥)
    - [解决问题](#解决问题)
- [2021/6/11](#2021611)
  - [What does `npm audit fix` do under the hood?](#what-does-npm-audit-fix-do-under-the-hood)
  - [For `ant-design-pro` project, explain to me what are inside `package.json`](#for-ant-design-pro-project-explain-to-me-what-are-inside-packagejson)
- [2021/9/3](#202193)
  - [```RUNNING SCRIPT DISABLED```](#running-script-disabled)
# 2021/3/17

## Element-ui中node-gyp安装出错

```
gyp ERR! UNCAUGHT EXCEPTION
gyp ERR! stack Error: spawn C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\15.0\Bin\MSBuild.exe ENOENT
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:267:19)
gyp ERR! stack     at onErrorNT (internal/child_process.js:469:16)
gyp ERR! stack     at processTicksAndRejections (internal/process/task_queues.js:84:21)
gyp ERR! System Windows_NT 10.0.18363
gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "D:\\GitHub\\element\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
gyp ERR! cwd D:\GitHub\element\node_modules\node-sass
gyp ERR! node -v v12.19.0
gyp ERR! node-gyp -v v3.8.0
gyp ERR! This is a bug in `node-gyp`.
gyp ERR! Try to update node-gyp and file an Issue if it does not help:
gyp ERR!     <https://github.com/nodejs/node-gyp/issues>
Build failed with error code: 7
```

### `node-gyp`是啥?
- https://github.com/nodejs/node-gyp

### 解决问题
- https://github.com/nodejs/node-gyp/issues/2323
- https://github.com/nodejs/node-gyp/wiki/Updating-npm%27s-bundled-node-gyp
- It might be compatibility issues between `node-gyp`, `node-sass`, and `node`


# 2021/6/11
## What does `npm audit fix` do under the hood?
## For `ant-design-pro` project, explain to me what are inside `package.json`
- Basic package.json structure
  - name
  - version
  - private
    - ?
  - description
  - scripts
    - Basic local operations
    - Docker deploy commands
    - Developer styling rules implementation
    - Local deployment commands
    - Testing commands
    - Template engines and ueber languages
  - lint-staged
  - browserlist
  - dependencies
  - devDependencies
  - engines
    - Node version
  - checkFiles
    - ?
  - create-umi
  - ?

# 2021/9/3
## ```RUNNING SCRIPT DISABLED```
```
yarn : Die Datei "C:\Users\Administrator\AppData\Roaming\npm\yarn.ps1" kann nicht geladen werden, da die Ausführung
von Skripts auf diesem System deaktiviert ist. Weitere Informationen finden Sie unter "about_Execution_Policies"
(https:/go.microsoft.com/fwlink/?LinkID=135170).
In Zeile:1 Zeichen:1
+ yarn create umi
+ ~~~~
    + CategoryInfo          : Sicherheitsfehler: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

https://www.c-sharpcorner.com/article/how-to-fix-ps1-can-not-be-loaded-because-running-scripts-is-disabled-on-this-sys/