# Content of Shit
- [Content of Shit](#content-of-shit)
- [marzipano Circle CI setup error](#marzipano-circle-ci-setup-error)
  - [2021/3/21](#2021321)
  - [2021/3/23](#2021323)
  - [- https://stackoverflow.com/questions/8553957/how-to-release-localhost-from-error-listen-eaddrinuse](#--httpsstackoverflowcomquestions8553957how-to-release-localhost-from-error-listen-eaddrinuse)
- [2021/11/30-](#20211130-)
  - [Gitlab & Github Learning](#gitlab--github-learning)
- [2021/12/1](#2021121)
  - [SSH error: `debug1: read_passphrase: can't open /dev/tty: No such file or directory`](#ssh-error-debug1-read_passphrase-cant-open-devtty-no-such-file-or-directory)


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

# 2021/11/30-
## Gitlab & Github Learning
- Side track for consulting
  - GitLab Technical Certifications
    - [link](https://about.gitlab.com/handbook/customer-success/professional-services-engineering/gitlab-technical-certifications/)
- GitLab Learn
  - [link](https://about.gitlab.com/learn/)
  - STATE: Only triggered by your current project need


# 2021/12/1
## SSH error: `debug1: read_passphrase: can't open /dev/tty: No such file or directory`
- [RTFM](https://docs.gitlab.com/ee/ssh/)
- Attempt
  - `ssh-agent`
    - unable to start ssh-agent service, error :1058

# I am lazy, so I want to connect to my laptop using ssh :) It's sort of cool anyway~！

1. Connection refused...
   - Pinging the local address shows `timeout  `
   - I did some browsing, it seems like my goal is to connect my PC to a wirelessly-connected laptop under the same router
   - Maybe it is due to the router wireless isolation, so it should be...
   - Yep, easy-peasy, the password didn't even change for SDN
   - Got a lot to see there
     - What is `LOID`?
       - [damn RED](https://www.reddit.com/r/techsupport/comments/el61wq/what_is_loid_configuration_in_routers/)
     - What is `PON`?
       - [Manual](https://en.wikipedia.org/wiki/Passive_optical_network)
   - Those SDN interface currently couldn't tell me shit about unlocking the wireless isolation...Umm, maybe try doing some research about its manufacturer `fiberhome`? Get to know a bit more about how router works? Or it is not even the problem with the isolation, just my another instance of ignorance?
   - Here's some information I dug up
     - [Can I use a wired and wireless device on the same network?](https://pc.net/helpcenter/answers/wired_and_wireless_network)