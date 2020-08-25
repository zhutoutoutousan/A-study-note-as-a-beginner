# RTFM resource
- [Jest getting started](https://jestjs.io/docs/en/getting-started.html)

# Walkthrough
## Installation
- RTFM
## Write test file
```[originalName].js```
```javascript
const greatFunctions = {
    function_1 : (in1, in2) => 'fuck',
    function_2 : (in3, in4) => 'shit',
    function_3 : (shitIn, shitOut) => 'damn'
}

module.exports = greatFunctions;
```
```[originalName].test.js```
```javascript
const greatFunctions = require('./[originalName].js');

test('If fail, output message like this', () => {
    expect(greatFunctions.function_1).toBe('fuck');
})
```

## Test
```
npm test
```


# Troubleshoot
## echo "Error: no test specified" && exit 1
```
echo "Error: no test specified" && exit 1
"Error: no test specified"
```

S: Add the following section to your ```package.json```
```
{
    "scripts" : {
        "test": "jest"
    }
}
```