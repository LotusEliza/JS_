
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

// // console.log(counter(['shaun', 'crystal', 'ryu']));

// module.exports = counter;

//************ #7 - Module Patterns

var adder = function(a,b){
    return `the sum of a 2 numbers is ${a+b}`;
};

var pi = 3.14; 

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};