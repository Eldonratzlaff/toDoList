import './style.css';

/*
 localStorage.setItem('tasks', JSON.stringify(tasks));
*/

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add an element
const addTask = document.getElementById('addItem');
addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    window.location.reload();
    const maxId = tasks.length;
    tasks.push({
      description: addTask.value,
      Completed: false,
      index: maxId,
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  }
});

const show = () => {
  const getList = document.getElementById('todo-list');
  for (let i = 0; i < tasks.length; i += 1) {
    const item = document.createElement('li');
    let chek = '';
    if (tasks[i].Completed === true) {
      chek = 'checked';
    }
    item.innerHTML = `<input  type="checkbox" ${chek} class="check" onchange=checkboxx(${i}) />  ${tasks[i].description}
    <button onclick=deletebtn(${tasks[i].index}) class="deletebtn">Delete</button>`;
    getList.appendChild(item);
  }
};

show();

// remove an element
window.deletebtn = (index) => {
  const result = tasks.filter((item) => item.index !== index);
  const newtasks = result;
  for (let i = 0; i < newtasks.length; i += 1) {
    newtasks[i].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(newtasks));
  window.location.reload();
};

// checket
window.checkboxx = (i) => {
  if (tasks[i].Completed === false) {
    tasks[i].Completed = true;
  } else { tasks[i].Completed = false; }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// reindex
const reIndex = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
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
