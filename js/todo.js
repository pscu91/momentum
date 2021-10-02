const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const allDel = document.querySelector('#all-del');

const TODOS_KEY = 'todos';
const INPUT_PADDING_RIGHT = 'inputPaddingRight';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event) {
  event.preventDefault();
  const parentToDoLi = event.target.parentElement;
  parentToDoLi.remove();
  console.log(parentToDoLi.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(parentToDoLi.id));
  saveToDos();
  if (toDoList.childElementCount === 0) {
    toDoList.classList.add(HIDDEN_CLASSNAME);
  } else if (toDoList.childElementCount < 4) {
    allDel.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(INPUT_PADDING_RIGHT);
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
  if (toDoInput.value !== '') {
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
      text: newToDo,
      id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    if (toDoList.childElementCount > 3) {
      allDel.classList.remove(HIDDEN_CLASSNAME);
      toDoForm.classList.add(INPUT_PADDING_RIGHT);
    }
  } else {
    alert('내용을 적지 않으셨어요.');
  }
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} else {
  toDoList.classList.add(HIDDEN_CLASSNAME);
}

if (savedToDos === '[]') {
  toDoList.classList.add(HIDDEN_CLASSNAME);
}

function handleAllDelSubmit() {
  localStorage.removeItem(TODOS_KEY);
  toDoList.classList.add(HIDDEN_CLASSNAME);
  allDel.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(INPUT_PADDING_RIGHT);
  window.location.reload();
}

allDel.addEventListener('click', handleAllDelSubmit);

if (toDoList.childElementCount > 3) {
  allDel.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.add(INPUT_PADDING_RIGHT);
}
