function isLannisterSoldier(color, lion){
    if ((color === 'red' && lion === null) || lion === 'lion'){
        return true;
    } else {
        return false;
    };
};

console.log('Is it Lannister -->', isLannisterSoldier('red','lion'));

console.log('Is it Lannister -->', isLannisterSoldier('blue', null));
