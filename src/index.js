import './style.css';
import reIndex from './adddel.js';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const addTask = document.getElementById('addItem');
addTask.addEventListener('keypress', (e) => {
  const addlist = () => {
    if (e.key === 'Enter') {
      e.preventDefault();
      window.location.reload();
      const maxId = tasks.length + 1;
      tasks.push({
        description: addTask.value,
        Completed: false,
        index: maxId,
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      window.location.reload();
    }
  };
  addlist();
});

const show = () => {
  const getList = document.getElementById('todo-list');
  for (let i = 0; i < tasks.length; i += 1) {
    const item = document.createElement('li');
    let chek = '';
    if (tasks[i].Completed === true) {
      chek = 'checked';
    }
    item.innerHTML = `<input  type="checkbox" ${chek} class="check" onchange=checkboxx(${i}) /> <div contenteditable="true" > ${tasks[i].description}</div>
    <button onclick=deletebtn(${tasks[i].index}) class="deletebtn">Delete</button>`;
    getList.appendChild(item);
  }
};
show();

// remove cheked

const removeTask = document.getElementById('clear-button');
removeTask.addEventListener('click', () => {
  let tasksLength = tasks.length;
  for (let i = 0; tasksLength > i; i += 1) {
    if (tasks[i].Completed === true) {
      tasks.splice(i, 1);
      const resultcheck = tasks;
      const newtaskscheck = resultcheck;
      localStorage.setItem('tasks', JSON.stringify(newtaskscheck));
      i -= 1;
      tasksLength -= 1;
    }
  } window.location.reload();
  reIndex();
});

module.exports=addlist;