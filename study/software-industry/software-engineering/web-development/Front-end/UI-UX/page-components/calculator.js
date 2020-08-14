(function() {
    "use strict";

    // Shortcut to get elements
    const getElementOrNodeList = (element) => element.charAt(0) === "#" ? document.querySelector(element) : document.querySelectorAll(element);

    // Variables
    let viewer = getElementOrNodeList("#viewer"),  // Calculator screen
        equals = getElementOrNodeList("#equals"), // Equal Button
        nums = getElementOrNodeList(".num"), // List of Numbers
        ops = getElementOrNodeList(".ops"), // List of Operators
        currentNumber = "", // Current Number
        storedNumber = "", // First Number 
        resultNumber,  // Result
        operator;   // ???

    // When a number is clicked. Get the current number selected

    const setNum = function() {
        // If a result was displayed, reset number
        // Otherwise, add digit to previous number (A string)
        currentNumber = resultNumber ? this.getAttribute("data-num") : currentNumber + this.getAttribute("data-num");
        resultNumber = resultNumber ? "" : resultNumber;
        viewer.innerHTML = currentNumber;
    }

    /** 
     * When Operator is clicked, pass number to storedNumber and save operator
     * Invoked by:
     * 
     * */ 
    const moveNum = function() {
        [storedNumber, currentNumber] = [currentNumber, ""];
        operator = this.getAttribute("data-ops");
        // Reset result in attr
        equals.setAttribute("data-result", "");
    }
    
    /**
     * @description When: Equals is clicked. Calculate result
     */
    const displayNum = function(){

        // Convert string input to numbers
        storedNumber = parseFloat(storedNumber);
        currentNumber = parseFloat(currentNumber);

        // Perform operation
        switch(operator) {
            case "plus":
                resultNumber = storedNumber + currentNumber;
                break;
            case "minus":
                resultNumber = storedNumber - currentNumber;
                break;
            case "times":
                resultNumber = storedNumber * currentNumber;
                break;
            case "divided by":
                resultNumber = storedNumber / currentNumber;
                break;
            default:
                resultNumber = theNum;
        }

        // If NaN or Infinity returned
        if(!isFinite(resultNumber)) {
            if(isNaN(resultNumber)) {
                resultNumber = "Good job!";
            }
            else {
                resultNumber = "Congratulations, you've destroyed the world!"
                getElementOrNodeList("#calculator").classList.add("broken");
                getElementOrNodeList("#reset").classList.add("show");
            }
        }

        // Show the numbers!
        viewer.innerText = resultNumber;
        equals.setAttribute("data-result", resultNumber);

        // Set storedNumber and keep the result
        storedNumber = 0;
        currentNumber = resultNumber;
    }



    /**
     * 
     */
    const mountEvents = () => {
        for(const i in nums) {
            nums[i].onclick = setNum;
            console.log(i)
            console.log(nums[i])
        }
        for(const i in ops) {
            ops[i].onclick = moveNum;
            console.log(i)
        }
        equals.onclick = displayNum;
    }

    mountEvents();



})();