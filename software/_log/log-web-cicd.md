# Content of Shit
- [Content of Shit](#content-of-shit)
- [marzipano Circle CI setup error](#marzipano-circle-ci-setup-error)
  - [2021/3/21](#2021321)
  - [2021/3/23](#2021323)
  - [- https://stackoverflow.com/questions/8553957/how-to-release-localhost-from-error-listen-eaddrinuse](#--httpsstackoverflowcomquestions8553957how-to-release-localhost-from-error-listen-eaddrinuse)
- [testem](#testem)
# marzipano Circle CI setup error
## 2021/3/21
```
error computing cache key: template: cacheKey:1:30: executing "cacheKey" at <checksum "~/project/package-lock.json">: error calling checksum: open /home/circleci/project/package-lock.json: no such file or directory
```

--- 

## 2021/3/23
It seems like two sequences of errors, first error is this: 

```

> marzipano@0.10.2 test D:\GitHub\marzipano
> testem ci

not ok 1 testem - [undefined ms] - testem
    ---
        message: >
            Error: spawn browserify ENOENT
    ...
Unhandled rejection Error: spawn rm ENOENT
    at notFoundError (D:\GitHub\marzipano\node_modules\cross-spawn\lib\enoent.js:6:26)
    at verifyENOENT (D:\GitHub\marzipano\node_modules\cross-spawn\lib\enoent.js:40:16)
    at ChildProcess.cp.emit (D:\GitHub\marzipano\node_modules\cross-spawn\lib\enoent.js:27:25)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)

```

And then if I try to do it again, it would report `Error: listen EADDRINUSE`

---

News: 2021/3/23: 
I discovered that the directory `/scripts/*`, all the files in there were **linux code**, so it might not support windows development environment

I tried `kali linux` in WSL after failing in `w10` in the same environment, it reports the same `EADDRINUSE` error    


If I visit localhost:7357, it says `testem` uses this port to run tests

Now browsing through those shit
- https://github.com/testem/testem
- https://github.com/testem/testem/issues/199
- https://stackoverflow.com/questions/8553957/how-to-release-localhost-from-error-listen-eaddrinuse
---


# testem