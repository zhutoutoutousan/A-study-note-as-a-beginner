(function() {
    "use strict";

    // Shortcut to get elements
    const getElementOrNodeList = (element) => element.charAt(0) === "#" ? document.querySelector(element) : document.querySelectorAll(element);

    // Variables
    let viewer = getElementOrNodeList("#viewer"),  // Calculator screen
        equals = getElementOrNodeList("#equals"), // Equal Button
        nums = getElementOrNodeList(".num"), // List of Numbers
        ops = getElementOrNodeList(".ops"), // List of Operators
        theNum = "", // Current Number
        oldNum = "", // First Number 
        resultNum,  // Result
        operator;   // ???

    // When a number is clicked. Get the current number selected

    const setNum = function() {
        // If a result was displayed, reset number
        // Otherwise, add digit to previous number (A string)
        theNum = resultNum ? this.getAttribute("data-num") : theNum + this.getAttribute("data-num");
        resultNum = resultNum ? "" : resultNum;
        viewer.innerHTML = theNum;
    }

    // When Operator is clicked, pass number to oldNum and save operator
    const moveNum = function() {
        oldNum, theNum = theNum, "";
        
    }
    







})();