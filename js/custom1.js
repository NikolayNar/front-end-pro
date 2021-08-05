alert('Hello! I can figure out which number is bigger. Are you ready?')

var numberFirst = +prompt('Enter first number');

if (numberFirst === '' || null || undefined) {
    alert('Error!!! Incorrect enter!');
    alert('Lets try again. Refresh me after click "OK"');
} else {
    var numberSecond = +prompt('Enter second number');
};

if (numberFirst < numberSecond){
    alert('This number is bigger ==> ' + numberSecond + ', this number is smaller ==> ' + numberFirst);
};

if (numberFirst > numberSecond){
    alert('This number is bigger ==> ' + numberFirst + ', this number is smaller ==> ' + numberSecond); 
}; 

if (numberFirst === numberSecond){
    alert('Error!!! This is the same numbers!');
    alert('Lets try again. Refresh me after click "OK"');
};

console.log('numberFirst = ', numberFirst);
console.log('numberFirst = ', numberSecond);
