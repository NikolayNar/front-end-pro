const button = document.querySelector('button');
const fName = document.getElementById('inputFName');
const lName = document.getElementById('inputLName');
const pNumber = document.getElementById('inputPNumber');

const table = document.createElement('table');

document.body.firstElementChild.after(table);

button.addEventListener('click', () => {
    if (!fName.value || !fName.value.match(/^[A-Za-z]+$/)) {
        alert("Enter your First Name, please!");
        return;
    } else if (!lName.value || !lName.value.match(/^[A-Za-z]+$/)) {
        alert("Enter your Last Name, please!");
        return;
    } else if (!pNumber.value || isNaN(pNumber.value) || pNumber.value.length < 12 || pNumber.value.length > 12) {
        alert("Enter your Phone Number, please!");
        return;
    }

    let tr = document.createElement('tr');
    let td = document.createElement('td');

    table.append(tr);
    td.innerText = fName.value;
    tr.append(td);
    fName.value = "";

    let td2 = document.createElement('td');
    td2.innerText = lName.value;
    tr.append(td2);
    lName.value = "";

    let td3 = document.createElement('td');
    td3.innerText = pNumber.value;
    tr.append(td3);
    pNumber.value = "";

    let td4 = document.createElement('td');
    let buttonDel = document.createElement('button');
    td4 = buttonDel;
    td4.classList.toggle('buttonDel');
    buttonDel.innerHTML = 'Delete';
    tr.append(td4);

    buttonDel.addEventListener ('click', () => {
        let el = tr;
        el.remove();
    })
})
