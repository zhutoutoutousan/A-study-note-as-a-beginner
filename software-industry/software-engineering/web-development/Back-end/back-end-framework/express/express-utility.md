# RTFM
- [express API](http://expressjs.com/en/api.html)
- [express tutorial](https://expressjs.com/en/starter/generator.html)
  - Process(Walkthrough)

# Tutorials progress track
- [Building a Production Ready Node.js JSON API](https://thinkster.io/tutorials/node-json-api)

# File structure
- RTFM

# Operations
## Networking
### Create a server
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello bitch!'))

app.listen(port, () => console.log(`The app listening at localhost:${port}`))
```

## Views
### Render Ejs
- File structure+ ```./views/index.ejs/```
  - Not ```view```
```javascript
// server.js
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(5000)
```

## Routes
# Methods
## ```express()```
### use
### set
### get
#### route
#### res & req

### listen


# Project management
- [Local file management](https://stackoverflow.com/questions/29357305/nodejs-express-include-local-js-file)
- [Bulletproof node.js project architecture](https://softwareontheroad.com/ideal-nodejs-project-structure/)
# Troubleshoot
## Error: listen EADDRINUSE: address already in use :::5000