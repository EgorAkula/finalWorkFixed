const list = document.querySelector('#list');
const myButton = document.querySelector('#myButton');

const expenses = document.querySelector("#expenses");

const nameInput = document.querySelector('#nameInput');
const nameInput2 = document.querySelector('#nameInput2');
const nameInput3 = document.querySelector('#nameInput3');
const table = document.querySelector('#table');
let sum = 0;

myButton.addEventListener('click', addTask);

myButton.addEventListener('keyup', (event)=> {
    if(event.key === 'enter') {
        addTask();
        addPrice();
    }
})

function addTask() {
    if(nameInput.value != '', nameInput2.value != '', nameInput3.value != '') {

        const modal = document.querySelector('#modal');
        const delBtnModal = document.querySelector('#del');
        const cancel = document.querySelector('#cancel');
        
        const newExpens = document.createElement('tr');


        newExpens.classList.add('expens');
        newExpens.innerHTML = `<td>${nameInput.value}</td> <td>${nameInput2.value}</td> <td>${nameInput3.value}</td> <button>DEl</button>`;
        tbody.append(newExpens);
        sum+= +nameInput2.value;
        console.log(sum);        

        const deleteButton = newExpens.querySelector('button');
        // deleteButton.textContent = 'Удалить'    


        // list.appendChild(newItem);
        // newItem.appendChild(deleteButton);

        deleteButton.addEventListener('click', (event)=> {
            modal.style.display = 'block';

            function removeTask() {
                tbody   .removeChild(newExpens);
                modal.style.display = 'none';
            }
            delBtnModal.addEventListener('click', removeTask);

            cancel.addEventListener('click', ()=> {
                modal.style.display = 'none';
                delBtnModal.removeEventListener('click', removeTask);
            })
        })

        nameInput.value = '';
        nameInput2.value = '';
        nameInput3.value = '';
    } else {
        alert('Заполните все поля!');
    }
}   

