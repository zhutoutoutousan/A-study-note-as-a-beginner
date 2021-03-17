# 2021/3/18
## fatal: unable to access 'https://github.com/jquery/jquery/': OpenSSL SSL_connect: Connection was reset in connection to github.com:443
- Why did that happen when everything worked fine before?
  - Could be something wrong with GitHub itself?

Current solution:
```
git config --global http.sslVerify false
```

Reference
- https://blog.csdn.net/ximaiyao1984/article/details/110822578