# Create a server
## Code
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello bitch!'))

app.listen(port, () => console.log(`The app listening at localhost:${port}`))
```
## Reference
[Duh](https://expressjs.com/en/starter/hello-world.html)

# Quickstart APP
Check [this](https://expressjs.com/en/starter/generator.html) out
## Reference
[Express application generator](https://expressjs.com/en/starter/generator.html)