// START FUNCTION WITH "if else"
function words(number) {
    if (number === 1 || number === 21 || number === 31 || number === 41) {
        return number+' tovar';
    } else if (number === 2 || number === 3 || number === 4 || number === 22 || number === 32 || number === 42) {
        return number+' tovara';
    } else {
        return number+' tovarov';
    };
};

console.log("Result function with if else:");
console.log(words(0));
console.log(words(1));
console.log(words(2));
console.log(words(5));
// END FUNCTION WITH "if else"

// START FUNCTION WITH "switch"
function words(number) {
    switch(number) {
        case 1:
        case 21:
        case 31:
        case 41:
            return number+' tovar';
        case 2:
        case 3:
        case 4:
        case 22:
        case 32:
        case 42:
            return number+' tovara';
        default:
            return number+' tovarov';
    };
};

console.log("Result function with Switch:");
console.log(words(0));
console.log(words(1));
console.log(words(2));
console.log(words(5));
// END FUNCTION WITH "switch"
