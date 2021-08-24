# Table of Contents
- [Table of Contents](#table-of-contents)
- [Buffer to static knowledge store](#buffer-to-static-knowledge-store)
- [2021/3/18](#2021318)
  - [`fatal: unable to access 'https://github.com/jquery/jquery/': OpenSSL SSL_connect: Connection was reset in connection to github.com:443`](#fatal-unable-to-access-httpsgithubcomjqueryjquery-openssl-ssl_connect-connection-was-reset-in-connection-to-githubcom443)
    - [First attempt](#first-attempt)
    - [Second attempt](#second-attempt)
- [2021/6/10](#2021610)
  - [Git reading materials bundle --- Read it when you have time to level up](#git-reading-materials-bundle-----read-it-when-you-have-time-to-level-up)
  - [After obtaining a bit more of experience, give a decision tree of operations and git implementation](#after-obtaining-a-bit-more-of-experience-give-a-decision-tree-of-operations-and-git-implementation)
- [2021/6/11 | 2021/8/16-](#2021611--2021816-)
  - [Explain key concepts about Git](#explain-key-concepts-about-git)
  - [List the difference among `git stage`, `git unstage`, `git stash`, `git add`, `git commit`, `git push`, `git pull`, `git reset`](#list-the-difference-among-git-stage-git-unstage-git-stash-git-add-git-commit-git-push-git-pull-git-reset)
  - [List the difference among `git checkout`, `git merge`, `git pull`, `git status`](#list-the-difference-among-git-checkout-git-merge-git-pull-git-status)
  - [List the difference among `git rebase`, `git reset`, `git log`, `git last`](#list-the-difference-among-git-rebase-git-reset-git-log-git-last)
  - [List all frequent operations of git during difference phase of development lifecycle](#list-all-frequent-operations-of-git-during-difference-phase-of-development-lifecycle)
- [2021/7/27](#2021727)
  - [Actions?](#actions)
  - [A few quick ways to get going](#a-few-quick-ways-to-get-going)
- [2021/8/9-](#202189-)
  - [Git branch management](#git-branch-management)
  - [Intense visualization effort of git workflow](#intense-visualization-effort-of-git-workflow)
  - [OMG, I accidentally discarded changes of tons of features](#omg-i-accidentally-discarded-changes-of-tons-of-features)
  - [A more concentrated reading](#a-more-concentrated-reading)
# Buffer to static knowledge store



# 2021/3/18
## `fatal: unable to access 'https://github.com/jquery/jquery/': OpenSSL SSL_connect: Connection was reset in connection to github.com:443`

### First attempt

- Why did that happen when everything worked fine before?
  - Could be something wrong with GitHub itself?

**Current solution**:
```
git config --global http.sslVerify false
```

Reference
- https://blog.csdn.net/ximaiyao1984/article/details/110822578

### Second attempt

More problems: 
```
fatal: unable to access 'https://github.com/golang/tools.git/': OpenSSL SSL_connect: Connection was reset in connection to github.com:443
```

even after disabling sslVerify

**Solution**: `git clone git@github.com:golang/tools.git` currently works fine

**Why**?

# 2021/6/10
## Git reading materials bundle --- Read it when you have time to level up
https://www.google.com/search?q=git+push+and+tags&oq=git+push+and+tags&aqs=chrome.0.0j0i22i30l8j69i64.2183j0j1&sourceid=chrome&ie=UTF-8
https://stackoverflow.com/questions/5308816/how-to-use-git-merge-squash
https://git-scm.com/docs/git-rebase
https://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git
https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase
https://aboullaite.me/deep-dive-into-git-git-refs/
https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard
https://www.freecodecamp.org/news/useful-tricks-you-might-not-know-about-git-stash-e8a9490f0a1a/
https://git-scm.com/docs/git-stash
https://www.atlassian.com/git/tutorials/cherry-pick
https://www.google.com/search?q=git+stash+branch&sxsrf=ALeKk03nClMPZX-Mm3yu5yRYnmO4WsWSZw%3A1623326466160&ei=Av_BYI6dCdH8wAP5kqCYDQ&oq=git+stash+branch&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEJECMgoIABCHAhCxAxAUMgoIABCHAhCxAxAUMgQIABBDMgUIABCxAzIFCAAQsQMyAggAMgIIADIFCAAQsQMyAggAOgcIABBHELADOgQIIxAnOgUIABCRAjoKCAAQsQMQgwEQQzoHCAAQsQMQQ1DJtgJYqM8CYNLQAmgCcAJ4AIABhAWIAfMlkgELMC4xLjQuMy4yLjOYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=gws-wiz&ved=0ahUKEwiOpvqqgo3xAhVRPnAKHXkJCNMQ4dUDCA4&uact=5
https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
https://www.google.com/search?q=git+remote+-v&oq=git+remote+-v&aqs=chrome..69i57l2j69i64j69i60l5.1879j0j1&sourceid=chrome&ie=UTF-8
https://stackoverflow.com/questions/9529078/how-do-i-use-git-reset-hard-head-to-revert-to-a-previous-commit
https://devconnected.com/how-to-git-reset-to-head/#:~:text=To%20hard%20reset%20files%20to,option%20and%20specify%20the%20HEAD.&text=The%20purpose%20of%20the%20%E2%80%9Cgit,before%20HEAD%20and%20so%20on).
https://www.google.com/search?q=git+reset+--hard+head~&oq=git+reset+--hard+head~&aqs=chrome..69i57j69i64.8079j0j1&sourceid=chrome&ie=UTF-8
https://nvie.com/posts/a-successful-git-branching-model/
https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
## After obtaining a bit more of experience, give a decision tree of operations and git implementation

# 2021/6/11 | 2021/8/16-
## Explain key concepts about Git
- Branch
- Head
- Gitflow
- Hook

## List the difference among `git stage`, `git unstage`, `git stash`, `git add`, `git commit`, `git push`, `git pull`, `git reset`
- There's no such command as `git stage`???
  - Use `git add` to stage files



## List the difference among `git checkout`, `git merge`, `git pull`, `git status`

## List the difference among `git rebase`, `git reset`, `git log`, `git last`

## List all frequent operations of git during difference phase of development lifecycle
- General
  - set command alias
    - `git config --global alias.co checkout`

# 2021/7/27
## Actions?
So you switched to (HEAD detached at origin/develop), in order to have a quick grasp of the project, what should you do?

## A few quick ways to get going
- [How do I check out a remote Git branch?](https://stackoverflow.com/questions/1783405/how-do-i-check-out-a-remote-git-branch)

# 2021/8/9-
## Git branch management
- Naming conventions
  - [Git Branching Naming Convention: Best Practices](https://codingsight.com/git-branching-naming-convention-best-practices/)
## Intense visualization effort of git workflow
- Context
  - Thanks to the *interpretation memory training effort*, now you have realized that you can retain your heightened mental state by specific set of actions mentioned in *@neural-level-adjustment*
  - Now it seems like you have increased demands of clear and agile visualization of git workflow and command, so let's put your **hightened mental state** to the test
- Context feedback(Come back and fill it later)
  - Which works
  - Which doesn't work
- Lack of feedback mechanism
  - That's a lot of info and sufficient change of information re-stimulation opportunities with good reasons, we can incorporate repetition mechanisms to mitigate the risk of burnout and pedantic rigidity
- Quick links
  - Search &READING& Pro Git
- Visualization elements
  - Anchors
    - pointer
    - snapshot
    - container
    - commit
    - Branch
    - repository
      - *blobs*
    - ?
      - root project tree
  - Status
    - Staged
    - Commited
  - Links
- Command-visualization connection
  - git add
- Functional routine pathway
-  Bullshitting doesn't count, you must write your own mental model in draw.io and send it to your partner

## OMG, I accidentally discarded changes of tons of features

## A more concentrated reading
https://www.ruanyifeng.com/blog/2012/07/git.html
https://sandofsky.com/workflow/git-workflow/
https://www.ruanyifeng.com/blog/2021/05/scaling-problem.html