# Table of Contents
# Vanilla JavaScript
## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="TianShao">
    <link rel="stylesheet" href="./accordion.css">
    <title>Accordians</title>
</head>
<body>
    <div class="container">
        <h1>Accordians</h1>
        <button class="accordian">Accordion #1</button>
        <div class="accordian-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis harum vitae corporis doloremque sed similique, laborum eius enim sit rerum a voluptate nemo porro in voluptates quis. Repellendus, accusantium.</p>
        </div>

        <button class="accordian">Accordion #2</button>
        <div class="accordian-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis harum vitae corporis doloremque sed similique, laborum eius enim sit rerum a voluptate nemo porro in voluptates quis. Repellendus, accusantium.</p>
        </div>

        <button class="accordian">Accordion #3</button>
        <div class="accordian-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis harum vitae corporis doloremque sed similique, laborum eius enim sit rerum a voluptate nemo porro in voluptates quis. Repellendus, accusantium.
            </p>
            <h3>Lorem ipsum dolor</h3>
            <ul>
                <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum ipsa earum perspiciatis. Tenetur eos delectus qui ex corrupti cum quasi quam placeat quas aliquid, repudiandae saepe? Reiciendis, fugiat labore.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum ipsa earum perspiciatis. Tenetur eos delectus qui ex corrupti cum quasi quam placeat quas aliquid, repudiandae saepe? Reiciendis, fugiat labore.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum ipsa earum perspiciatis. Tenetur eos delectus qui ex corrupti cum quasi quam placeat quas aliquid, repudiandae saepe? Reiciendis, fugiat labore.
                </li>    
            </ul>
        </div>
    </div>
    <script src="accordion.js"></script>
    <script src="https://kit.fontawesome.com/b784dd004a.js" crossorigin="anonymous"></script>
</body>

</html>
```
## CSS
```css
.container {
    width: 80%;
    max-width: 600px;
    margin: 50px auto;
}

button.accordian {
    width: 100%;
    background-color: whitesmoke;
    border: none;
    outline: none;
    text-align: left;
    padding: 15px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.2s linear;
}

button.accordian::after {
    content: '\f107';
    font-family: "fontawesome";
    font-size: 14px;
    float: right;
}

button.accordian:hover, button.accordian.is-open {
     background-color: #ddc;
}

button.accordian.is-open::after {
    content: "\f106";
}

.accordian-content {
    padding: 0 20px;
    border-left: 1px solid whitesmoke;
    border-right: 1px solid whitesmoke; 
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
}


```
## JavaScript
```javascript
const accordians = document.querySelectorAll(".accordian");

for (let i = 0; i < accordians.length; i++) {
    accordians[i].onclick = function () {
        this.classList.toggle('is-open');
        let content = this.nextElementSibling;
        // content.style.maxHeight = !content.style.maxHeight;
        if (content.style.maxHeight) {
            // accordian is open, need to close it.
            content.style.maxHeight = null;
        }
        else {
            // accordian is closed
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}
```
## Todo
- Find out if there is more to do with accordian

## Resource
# Vue
## vue-router
## Vuex
## element-ui
# React


# Resource
- [Build an Accordion Menu - No Frameworks or Dependencies](https://www.youtube.com/watch?v=VTdSW57--yM) -- ok
    - [Animating with CSS Transitions - Using transitions in action](https://www.youtube.com/watch?v=YYlFFMc0RAg)
    - [Advanced CSS Selectors](https://www.youtube.com/watch?v=Bcr70LIJcOk)
    - [CSS em and rem explained](https://www.youtube.com/watch?v=_-aDOAMmDHI)