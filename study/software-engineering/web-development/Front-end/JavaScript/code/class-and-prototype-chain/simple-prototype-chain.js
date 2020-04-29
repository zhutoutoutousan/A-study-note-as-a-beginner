// https://medium.com/@grittly/javascripts-prototypal-inheritance-illustrated-part-ii-classes-and-the-prototype-chain-af055d4d0386
// The first layer of prototype chain search scope

var rick_c137 = {
    formHypothesis: function(){
        return true;
    }
}

console.log(rick_c137.formHypothesis());

//-----------------------------------------------------

// The second layer of prototype chain search scope
var Scientist = {
    formHypothesis: function(){
        return true;
    }
}

// Define Scientist class and hide formHypothesis method here
function Rick(){
    // No problem
    Scientist.call(this);
}
// No problem still
Rick.prototype = Object.create(Scientist.prototype);  

// Create an instance of Rick
var rick_c139 = new Rick();

// The object created looks like this:
// { [[Prototype]]: Scientist.prototype }

console.log(rick_c139.formHypothesis());



//-----------------------------------------------------