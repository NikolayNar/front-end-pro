alert('Let`s create your color');

var numberRedColor = +prompt('How much RED color?');
var numberGreenColor = +prompt('How much GREEN color?');
var numberBlueColor = +prompt('How much BLUE color?');

function rgb(red, green, blue){
    var color = red + ',' + green + ',' + blue;
    return color;
};

var result = rgb(numberRedColor, numberGreenColor, numberBlueColor);

console.log('rbg('+result+')');