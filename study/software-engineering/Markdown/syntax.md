# Style
bold: double asteroids: **bold** double underscores: __bold__

italic: asteroid: *italic*  underscore: _italic_
link: [http://google.com]

# Header

# This is an \<h1> tag
## This is an \<h2> tag
###### This is an \<h6> tag

# Code blocks
## With symbol highlighting
```javascript
// with symbol highlighting
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

## Without symbol highlighting
    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }

# List

## Task List

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

~~I produce shit for fun~~

## Nested list
### Unordered list

* Item 1
* Item 2
* Item 3
    * Item 3a
    * Item 3b
    * Item 3c

### Ordered list

1. Step 1
2. Step 2
3. Step 3
    1. Step 3.1
    2. Step 3.2
    3. Step 3.3

### List in list

1. Step 1
2. Step 2
3. Step 3
    * Item 3a
    * Item 3b
    * Item 3c