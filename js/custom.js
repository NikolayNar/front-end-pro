const button = document.querySelector('button');
const input = document.getElementById('myInput');
const ul = document.createElement('ul');

document.body.append(ul);

button.addEventListener('click', () => {
    if (!input.value) {
        alert("You must write something!");
        return;
    }
    
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.append(li);
    input.value = "";
})