alert('Hello! Let`s get to know each other better. Are you ready?')

var numberAge = +prompt('How old are you?');

if (numberAge == '' || null || undefined) {
    alert('Error!!! It`s not an age!');
    alert('Lets try again. Refresh me after click "OK"');
} else {
    var smoke = confirm('Do you smoke? If "YES" click "OK", if "NO" - "CANCEL"');
};

console.log('Age --> ', numberAge);
console.log('Smoking --> ', smoke);


if (numberAge < 18 && smoke === false){
    alert('Great! You`re too young!');
} else if (numberAge < 18 && smoke === true){
    alert('Oh my God! I`ll told your mother!');
} else if (numberAge >= 18 && smoke === false){
    alert('Amazing! Keep it going!');
}else if (numberAge >= 18 && smoke === true){
    alert('Congrats! You`ll die so soon!');
} else{
    alert('Don`t try to cheat Me! I`m Skynet!');
}
