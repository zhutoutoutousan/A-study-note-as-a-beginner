# RTFM
- [express API](http://expressjs.com/en/api.html)
- [express tutorial](https://expressjs.com/en/starter/generator.html)
  - Process(Walkthrough)


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


# Methods