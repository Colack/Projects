function say(input) {

    console.log(input);

}

function addThese(input1, input2) {

    return input1 + input2;

}

function minusThese(input1, input2) {

    return input1 - input2;

}

function timesThese(input1, input2) {

    return input1 * input2;

}

function divideThese(input1, input2) {

    return input1 / input2;

}

function randomNumber(from1, plus) {

    return Math.floor(Math.random() * (from1 - plus)) + plus;  

}

function randomNumberPlus(from1, from2, plus) {

    return Math.floor(Math.random() * (from2 - from1)) + from1 + plus;

}

function randomNumberMinus(from1, from2, minus) {

    return Math.floor(Math.random() * (from2 - from1)) + from1 - minus;

}

function randomNumberTimes(from1, from2, times) {

    return Math.floor(Math.random() * (from2 - from1)) + from1 * times;

}

function randomNumberDivide(from1, from2, divide) {

    return Math.floor(Math.random() * (from2 - from1)) + from1 / divide;

}

function powers(base, power) {

    return Math.pow(base, power);

}

function squareRoot(input) {

    return Math.sqrt(input);

}

function cubeRoot(input) {

    return Math.cbrt(input);

}

function square(input) {

    return input * input;

}

module.exports = { say, addThese, minusThese, timesThese, divideThese, randomNumber, randomNumberPlus, randomNumberMinus, randomNumberTimes, randomNumberDivide, powers, squareRoot, cubeRoot, square };
