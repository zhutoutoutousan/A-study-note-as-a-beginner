# Table of Contents
- [Table of Contents](#table-of-contents)
- [Learning Path](#learning-path)
- [Reading](#reading)
- [2021/3/18](#2021318)
  - [Fxxking FQ blocking Golang Vscode download](#fxxking-fq-blocking-golang-vscode-download)
- [2021/3/26](#2021326)
  - [Entering Greek words in vim when using `golang`](#entering-greek-words-in-vim-when-using-golang)
  - [go: cannot find main module, but found .git config to create a module there, run: go mod](#go-cannot-find-main-module-but-found-git-config-to-create-a-module-there-run-go-mod)
- [2021/5/30](#2021530)
  - [Starting Swagger UI on CentOS built on top of `express`](#starting-swagger-ui-on-centos-built-on-top-of-express)
- [2021/10/6](#2021106)
  - [Points to consider](#points-to-consider)
- [2021/11/23-](#20211123-)
  - [Java Reboot](#java-reboot)
    - [Main](#main)
    - [Sub](#sub)
  - [Database Design](#database-design)
- [2021/12/6](#2021126)
  - [`Cannot invoke "javax.script.ScriptEngine.eval(String)" because "engine" is null`](#cannot-invoke-javaxscriptscriptengineevalstring-because-engine-is-null)
  - [`Cannot get Jedis connection; nested exception is redis.clients.jedis.exceptions.JedisConnectionException: Unexpected end of stream.`](#cannot-get-jedis-connection-nested-exception-is-redisclientsjedisexceptionsjedisconnectionexception-unexpected-end-of-stream)

# Learning Path
- Engineering
  - JVM
  - Multi-threading
  - MySQL
- Science Research
  - [Python API Development - Comprehensive Course for Beginners](https://www.youtube.com/watch?v=0sOvCWFmrtA)
- Startups
  - [How to build a startup](https://www.youtube.com/watch?v=0sOvCWFmrtA)
  - [Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI](https://www.youtube.com/watch?v=GDa8kZLNhJ4)
# Reading
- [deep-into-node](https://yjhjstz.gitbooks.io/deep-into-node/content/chapter1/chapter1-0.html)
  - Sitemark:  V8 concept

# 2021/3/18
## Fxxking FQ blocking Golang Vscode download
Solution: Enable `Golang language server` for Vscode

More problems:
```
 "stderr": "go get: module github.com/uudashr/gopkgs/v2/cmd/gopkgs: Get \"https://proxy.golang.org/github.com/uudashr/gopkgs/v2/cmd/gopkgs/@v/list\": dial tcp 172.217.160.113:443: connectex: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond
```

Blog says:
- https://github.com/ory/go-acc/issues/3
  - Something wrong with `go`, just try after a few hours :=）

Extended reading:
- https://medium.com/the-andela-way/gopls-language-server-setup-for-go-projects-3ee79dcac123

# 2021/3/26
## Entering Greek words in vim when using `golang`
Too much of a fxxking hassle, maybe when I reaaaally have the time
- http://www.alecjacobson.com/weblog/?p=443
- https://www.reddit.com/r/vim/comments/4cuodz/vim_tip_2_entering_greekmath_symbols_using_vim/

## go: cannot find main module, but found .git config to create a module there, run: go mod

# 2021/5/30
## Starting Swagger UI on CentOS built on top of `express`
- [entry](https://www.npmjs.com/package/swagger-ui-express)

- Problems
  - Requires nodejs >= 12.0.0

# 2021/10/6
## Points to consider
- 参数校验
- 硬删除/软删除

# 2021/11/23-
## Java Reboot
### Main
- Java
  - [How To Master Java - Java for Beginners Roadmap](https://www.youtube.com/watch?v=TE3LyYW-AHQ)
  - [Spring Boot Tutorial for Beginners (Java Framework)](https://www.youtube.com/watch?v=vtPkZShrvXQ)
    - Process 1
      - Style: Hands-on
      - Videomark: 18:45/1:49:28
    - Process 2
      - Style: Watch
      - 33:34/1:49:28
  - [Java Interview Questions and Answers | Java Tutorial | Java Online Training | Edureka](https://www.youtube.com/watch?v=oYXivKMSEqM)
  - [Advance Java Full Course | Learn Java In 5 Hours | Java Tutorial For Beginners | Simplilearn](https://www.youtube.com/watch?v=Ae-r8hsbPUo)
    - 0:05/4:13:03
### Sub
## Database Design
- [Database Design Course - Learn how to design and plan a database for beginners](https://www.youtube.com/watch?v=ztHopE5Wnpc&t=53s)

# 2021/12/6
## `Cannot invoke "javax.script.ScriptEngine.eval(String)" because "engine" is null`

## `Cannot get Jedis connection; nested exception is redis.clients.jedis.exceptions.JedisConnectionException: Unexpected end of stream.`