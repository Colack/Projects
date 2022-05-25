function say(input) {

    console.log(input);

}

function addThese(input1, input2) {

    console.log(input1 + input2);

}

function minusThese(input1, input2) {

    console.log(input1 - input2);

}

function timesThese(input1, input2) {

    console.log(input1 * input2);

}

function divideThese(input1, input2) {

    console.log(input1 / input2);

}

function randomNumber(from1) {

    console.log(Math.floor(Math.random() * from1));    

}

module.exports = { say, addThese, minusThese, timesThese, divideThese, randomNumber };
