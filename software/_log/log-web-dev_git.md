# Content of shit
- [Content of shit](#content-of-shit)
- [Buffer to static knowledge store](#buffer-to-static-knowledge-store)
- [2021/3/18](#2021318)
  - [`fatal: unable to access 'https://github.com/jquery/jquery/': OpenSSL SSL_connect: Connection was reset in connection to github.com:443`](#fatal-unable-to-access-httpsgithubcomjqueryjquery-openssl-ssl_connect-connection-was-reset-in-connection-to-githubcom443)
    - [First attempt](#first-attempt)
    - [Second attempt](#second-attempt)
- [2021/5/4](#202154)


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

# 2021/5/4
搞点事情~ 既然你的德语已经有点ok了, 那就用德语总结一下目前你对git的理解吧!(英语和中文都太熟悉, 就木有什么快感, 不如撸管), 毕竟MM用得到 噢噢噢噢, 对了~ Ernstlich hatten Sie ein Aufgabe, die automatische Git Script zu schreiben, um schneller und sicherer deployment einzuschaffen. Geben Sie einigen Gedenken