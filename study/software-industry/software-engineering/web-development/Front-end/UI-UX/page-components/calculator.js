(function() {
    "use strict";

    // Shortcut to get elements
    const getElementOrNodeList = (element) => element.charAt(0) === "#" ? document.querySelector(element) : document.querySelectorAll(element);

    // Variables
    let viewer = getElementOrNodeList("#viewer"),  // Calculator screen
        equals = getElementOrNodeList("#equals"); // Equal Button
        nums = getElementOrNodeList(".num"); // List of Numbers
        ops = getElementOrNodeList(".ops"); // List of Operators
        theNum = "", // Current Number
        oldNum = "", // First Number 
        resultNum,  // Result
        operator;   // ???

    // When a number is clicked. Get the current number selected
    // So I switched to the arrow function where it originally is the function expression, would it work? Give it a test
    const setNum = () => {
        
    }



})()