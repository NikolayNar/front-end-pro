alert('Hello! I can figure out which distance is greater. Are you ready?')

var numberKm = +prompt('Enter KILOMETRS');

if (numberKm === '' || null || undefined) {
    alert('Error!!! Incorrect enter!');
    alert('Lets try again. Refresh me after click "OK"');
} else {
    var numberFt = +prompt('Enter FEETS. Remember 1 feet = 0,305 meters');
    var numberFtToKm = numberFt * 0.305;
    alert('It will be '+numberFtToKm+' kilometrs');
}

if (numberKm < numberFtToKm){
    alert('This distance is bigger ==> ' + numberFtToKm + ' km' + ', this distance is smaller ==> ' + numberKm + ' km');
};

if (numberKm > numberFtToKm){
    alert('This distance is bigger ==> ' + numberKm + ' km' + ', this distance is smaller ==> ' + numberFtToKm + ' km'); 
}; 

if (numberKm === numberFtToKm){
    alert('Upss!!! The same distance!');
    alert('Lets try again. Refresh me after click "OK"');
};
