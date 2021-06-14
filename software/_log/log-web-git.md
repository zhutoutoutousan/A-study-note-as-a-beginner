
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

# 2021/6/11
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