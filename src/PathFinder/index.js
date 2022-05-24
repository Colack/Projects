/*
    Code By Jack
*/

function onLoad() {
    pathFinder.execute();
}

function createPath(input) {
    if (input.match(/[a-z]/i)) {
    } else {
        console.log("Invalid input");
        return;
    }
    for (var i = 0; i < input.length; i++) {
        var letter = input.charAt(i);
        letter = letterCheck(letter);
        var letterNum = parseInt(letter);
    }
    return letterNum;
}

function readPath(input) {
    if (isNaN(input)) {
        console.log("Invalid input");
        return;
    }
    if (input < 1 || input > 26) {
        console.log("Invalid input");
        return;
    }
    for (var i = 0; i < input.length; i++) {
        var letter = input.charAt(i);
        letter = numberCheck(letter);
        var letterNum = parseInt(letter);
    }
    return letterNum;
}

function letterCheck(input) {
    if (input == "a") {
        input == "1";
    } else if (input == "b") {
        input == "2";
    } else if (input == "c") {
        input == "3";
    } else if (input == "d") {
        input == "4";
    } else if (input == "e") {
        input == "5";
    } else if (input == "f") {
        input == "6";
    } else if (input == "g") {
        input == "7";
    } else if (input == "h") {
        input == "8";
    } else if (input == "i") {
        input == "9";
    } else if (input == "j") {
        input == "10";
    } else if (input == "k") {
        input == "11";
    } else if (input == "l") {
        input == "12";
    } else if (input == "m") {
        input == "13";
    } else if (input == "n") {
        input == "14";
    } else if (input == "o") {
        input == "15";
    } else if (input == "p") {
        input == "16";
    } else if (input == "q") {
        input == "17";
    } else if (input == "r") {
        input == "18";
    } else if (input == "s") {
        input == "19";
    } else if (input == "t") {
        input == "20";
    } else if (input == "u") {
        input == "21";
    } else if (input == "v") {
        input == "22";
    } else if (input == "w") {
        input == "23";
    } else if (input == "x") {
        input == "24";
    } else if (input == "y") {
        input == "25";
    } else if (input == "z") {
        input == "26";
    }
    return input;
};

function numberCheck(input) {
    if (input == "1") {
        input == "a";
    } else if (input == "2") {
        input == "b";
    } else if (input == "3") {
        input == "c";
    } else if (input == "4") {
        input == "d";
    } else if (input == "5") {
        input == "e";
    } else if (input == "6") {
        input == "f";
    } else if (input == "7") {
        input == "g";
    } else if (input == "8") {
        input == "h";
    } else if (input == "9") {
        input == "i";
    } else if (input == "10") {
        input == "j";
    } else if (input == "11") {
        input == "k";
    } else if (input == "12") {
        input == "l";
    } else if (input == "13") {
        input == "m";
    } else if (input == "14") {
        input == "n";
    } else if (input == "15") {
        input == "o";
    } else if (input == "16") {
        input == "p";
    } else if (input == "17") {
        input == "q";
    } else if (input == "18") {
        input == "r";
    } else if (input == "19") {
        input == "s";
    } else if (input == "20") {
        input == "t";
    } else if (input == "21") {
        input == "u";
    } else if (input == "22") {
        input == "v";
    } else if (input == "23") {
        input == "w";
    } else if (input == "24") {
        input == "x";
    } else if (input == "25") {
        input == "y";
    } else if (input == "26") {
        input == "z";
    }
    return input;
}

onLoad();
