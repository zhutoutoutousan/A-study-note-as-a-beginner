# Reusing methods 
```javascript
class SomeClass {
    constructor() {
        this.foo = [];
        this.bar = [];
        // ...
    }

    foo() {
        this.bar();
    }
}

class SomeSubClass {
    constructor(x, y, z){
        super(x, y, z);
        // DO
    }

    bar() {
        // DO
    }
}

class SomeMoreSubClass {
    constructor(a, b, c){
        super(a, b, c);
        // DO
    }

    bar() {
        // DO
    }
}
```