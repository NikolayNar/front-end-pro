// №1
var arr1 = ['a', 'b', 'c'];
arr1.push(1, 2, 3);
console.log('arr1 -->', arr1);

// №2
var arr2 = [1, 2, 3];
arr2.reverse();
console.log('arr2 -->', arr2);

// №3
var arr3 = [1, 2, 3];
arr3.unshift(4, 5, 6);
console.log('arr3 -->', arr3);

// №4
var arr4 = [1, 2, 3, 4, 5];
var newArr4 = arr4.slice(0, 3)
console.log('arr4 -->', newArr4);

// №5
var arr5 = ['js', 'css', 'jq'];
console.log('arr5 -->', arr5[0]);
// если прям вывести на экран, то:
alert(arr5[0]);
// ну или:
document.write(arr5[0]);

// №6 я к сожалению не нашел как из 'a' и 'b' в масивах сделать ключи для обЪекта. Можешь написать как надо было сделать.
var fromPairs = (array) => {
    var array = new Object();
    var array = {
        a: data[0][1],
        b: data[1][1]
    }
    return array;
}

const data = [['a', 1], ['b', 2]];

console.log(fromPairs(data));

// №6_1 Но зато я нашел метод Object.fromEntries(), которые собственно это и делает, но не нашел его действие под капотом.
var fromPairs = (array) => {
    array = Object.fromEntries(datta);
    return array;
}

const datta = [['a', 1], ['b', 2]];

console.log(fromPairs(datta))