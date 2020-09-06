# Table of Contents
- [Table of Contents](#table-of-contents)
- [RegExp syntax](#regexp-syntax)
  - [Position](#position)
    - [```^``` - beginning](#---beginning)
    - [- Word boundries](#ulliword-boundriesliul)
  - [Occurence](#occurence)
    - [- quantifier](#ulliquantifierliul)
  - [Match](#match)
    - [Any](#any)
    - [Literal characters](#literal-characters)
  - [Special characters](#special-characters)
- [RegExp object](#regexp-object)
- [Methods](#methods)
    - [```RegExp.prototype.exec()```](#regexpprototypeexec)
    - [```RegExp.prototype.test()```](#regexpprototypetest)
- [Typical RegExp for a particular scenario](#typical-regexp-for-a-particular-scenario)
  - [E-mail](#e-mail)
  - [Password](#password)
- [Applications](#applications)
  - [Front-end](#front-end)
    - [Password Validation](#password-validation)
- [Resource](#resource)
- [Reference](#reference)


# RegExp syntax
- Get familiar with RegExp in real-life scenarios for some time then we can talk
## Position
### ```^``` - beginning
### - Word boundries
## Occurence
### - quantifier
## Match
### Any
- ```.``` Dot. Matches any character except line breaks.
### Literal characters
- duh
## Special characters
- Special characters are dissipated around the note for practical purposes
- If you want to match special characters literally, you need to use backslash
- Gallary of speical characters
  - ```\```
  - ```^```
  - ```$```
  - ```.```
  - ```|```
  - ```?```
  - ```*```
  - ```+```
  - ```(```
  - ```)```
  - ```[```
  - ```{```
# RegExp object
```javascript
let re = new RegExp(string,rules);
```

# Methods
### ```RegExp.prototype.exec()```
### ```RegExp.prototype.test()```

# Typical RegExp for a particular scenario
## E-mail
## Password


# Applications
## Front-end
### Password Validation
```javascript
/*
^ Beginning

*/
const passWordValidation = /^(?=.*\d)/

```

# Resource
- [RegEx101](https://regex101.com/)
  - A good source to learn the syntax
- [regexr](regexr.com)
- [regular-expression - tutorial](https://www.regular-expressions.info/tutorial.html)
  - Features
    - This site tutorial explains how a regular expression engine works on the inside
  - Progress
    - Navigation
      - There is some explanations of colored texts in the regular expression.
- Still need a site for **functionality** to **RegExp**

# Reference
[RegExp.prototype.exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)