let task = document.querySelector('.first');
let btn = document.querySelector('.submit');
let update = document.querySelector('.update');
let ul = document.querySelector('ul');
let error = document.querySelector('h2');

let all = [];
let updateIndex;

function isNumber(value) {
  return !isNaN(value) && value.trim() != '';
}

btn.addEventListener('click', function () {
  ul.innerHTML = '';
  let inputValue = task.value.trim();

  if (inputValue == '') {
    error.innerHTML = 'Please enter a number or task';
    error.style.color = 'red';
  } else if (isNumber(inputValue)) {
    let numberValue = parseFloat(inputValue);
    if (numberValue < 18) {
      error.innerHTML = '';
      error.innerHTML = 'Apni Vote Dity Parben Na';
      error.style.color = 'red';
      for (let i = 1; i <= 10; i++) {
        ul.innerHTML += `<li>${numberValue} x ${i} = ${numberValue * i}</li>`;
      }
    } else {
      error.innerHTML = 'Apni Vote Dity Parben';
      error.style.color = 'green';
    }
  } else {
    console.log('Added task:', inputValue);
    error.innerHTML = 'Data added successfully! :)';
    error.style.color = 'green';

    all.push({ task: inputValue });
    display();
  }

  task.value = '';
});

function display() {
  ul.innerHTML = '';
  all.map((item, index) => {
    ul.innerHTML += `<li>${item.task} <button class="edit">Edit</button> <button class="delete">Delete</button></li>`;

    let deleteBtn = document.querySelectorAll('.delete');
    let deleteBtnArr = Array.from(deleteBtn);

    let editBtn = document.querySelectorAll('.edit');
    let editBtnArr = Array.from(editBtn);

    deleteBtnArr.map((singleButton, dltindex) => {
      singleButton.addEventListener('click', function () {
        all.splice(dltindex, 1);
        display();
      });
    });

    editBtnArr.map((singleButton, editindex) => {
      singleButton.addEventListener('click', function () {
        updateIndex = editindex;
        task.value = all[editindex].task;
        update.style.display = 'inline-block';
        btn.style.display = 'none';
      });
    });
  });
}

update.addEventListener('click', function () {
  all[updateIndex] = {
    task: task.value,
  };
  display();
});
