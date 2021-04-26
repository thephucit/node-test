/*module.exports.function1 = function() {
    console.log('exports 1');
}

module.exports.function2 = function() {
    console.log('exports 2');
}*/

function function1() {
    console.log('exports 1');
}

function function2() {
    console.log('exports 2');
}



export {
    function1,
    function2
};

/*module.exports.hello = hello;
module.exports.PI = PI;*/