
// Это вариант с использованием массива
/* var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 1; i <= numbers.length; i++) {
    for (var j = 1; j < numbers.length; j++) {
        console.log (i + '*' + j + '=' + j);
    }
    console.log (i + '*' + j + '=' + j);
    console.log ('--/--/--/--/--/');
} */


// Это вариант без масива
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j < 10; j++) {
        console.log (i + '*' + j + '=' + j);
    };
    console.log (i + '*' + j + '=' + j);
    console.log ('--/--/--/--/--/');
};