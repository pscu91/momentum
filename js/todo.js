const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const HIDDEN_CLASSNAME = 'hidden';
const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event) {
  const parentToDoLi = event.target.parentElement;
  parentToDoLi.remove();
  console.log(parentToDoLi.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(parentToDoLi.id));
  saveToDos();
  if (savedToDos === null) {
    toDoList.classList.add(HIDDEN_CLASSNAME);
  }
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;

  const delButton = document.createElement('button');
  delButton.innerText = '삭제';
  delButton.addEventListener('click', delToDo);
  li.appendChild(span);
  li.appendChild(delButton);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
  toDoList.classList.remove('hidden');
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} else {
  toDoList.classList.add('hidden');
}
