# Keyboard shortcut
Press ```ctrl+C```, this is not a programmatical exiting way.

# ```process.exit()```
```javascript
process.exit(0)   // 0 means success

// Or you can set this code and the program will gracefully exit when all the processing is done.
process.exitCode = 1;

```
When Node.js runs this line, the process is immediately forced to terminate.

This means that any callback that's pending, any network request still being sent, any filesystem access, or processes writing to ```stdout``` or ```stderr``` -all is going to be ungracefully terminated right away.

See more on [Node.js API](https://nodejs.org/api/process.html#process_exit_codes)

# ```SIGTERM```

# Reference
[Node.js tutorial](https://nodejs.dev/how-to-exit-from-a-nodejs-program)
