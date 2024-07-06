let task = document.querySelector('.first');
// let importance = document.querySelector('.second');
let btn = document.querySelector('.submit');
let update = document.querySelector('.update');
let ul = document.querySelector('ul');
let error = document.querySelector('h2');

let all = [];

let updateIndex;

btn.addEventListener('click', function () {
  ul.innerHTML = '';
  if (task.value == '') {
    error.innerHTML = 'Please enter a task';
    error.style.color = 'red';
  } else {
    error.innerHTML = 'Data added successfully! :)';
    error.style.color = 'green';
    ul.innerHTML = '';
  }
  all.push({
    task: task.value,
    // importance: importance.value,
  });
  display();
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

        // all.splice(editindex, 1);
        // display();
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
