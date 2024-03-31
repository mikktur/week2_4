// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const modal = document.createElement('div');
const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', e => showModal());
createModal();
document.querySelector('body').appendChild(modal);
for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  createTodo(todo);
}

function showModal() {
  modal.style.display = 'block';
  console.log('asdasd');
}

function createModal() {
  const addForm = document.createElement('form');
  const addInput = document.createElement('input');
  const button = document.createElement('button');
  addInput.placeholder = 'Name';
  button.type = 'submit';
  button.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'none';
    const id = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
    newTodo = {
      id: id,
      task: addInput.value,
      completed: false,
    };
    todoList.push(newTodo);
    console.log(todoList);
    createTodo(newTodo);
  });
  button.innerText = 'Save';
  addForm.append(addInput, button);
  modal.appendChild(addForm);
  addInput.type = 'text';
}

function createTodo(todo) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const delButton = document.createElement('button');

  modal.style.display = 'none';
  input.type = 'checkbox';
  input.id = `todo-${todo.id}`;
  input.checked = todo.completed;

  input.addEventListener('change', e => {
    if (e.currentTarget.checked) {
      todo.completed = true;
      console.log(todoList);
    } else {
      todo.completed = false;
      console.log(todoList);
    }
  });

  delButton.textContent = 'Del';
  delButton.addEventListener('click', e => {
    const index = todoList.findIndex(t => t.id === todo.id);
    todoList.splice(index, 1);
    ul.removeChild(li);

    console.log(todoList);
  });

  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  li.appendChild(delButton);
  li.appendChild(input);
  li.appendChild(label);
  ul.appendChild(li);
}
