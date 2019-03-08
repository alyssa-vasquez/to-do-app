function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('Li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    // newLI.innerHTML = '<span class ="checkbox"</span>';;

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    let deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    newLi.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
    if (checkbox.checked) {
    toDoList.removeChild(newLi);
  }

  });

  });
}

window.onload = function() {
      onReady();
 };
