# Content of shit
- [Content of shit](#content-of-shit)
- [2021/3/18](#2021318)
  - [`fatal: unable to access 'https://github.com/jquery/jquery/': OpenSSL SSL_connect: Connection was reset in connection to github.com:443`](#fatal-unable-to-access-httpsgithubcomjqueryjquery-openssl-ssl_connect-connection-was-reset-in-connection-to-githubcom443)
    - [First attempt](#first-attempt)
    - [Second attempt](#second-attempt)

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

