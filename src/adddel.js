// import tasks from './index';

// reindex

const reIndex = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// remove an element

window.deletebtn = (index) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const result = tasks.filter((item) => item.index !== index);
  const newtasks = result;
  for (let i = 0; i < newtasks.length; i += 1) {
    newtasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(newtasks));
  window.location.reload();
};

// checket
window.checkboxx = (i) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  if (tasks[i].Completed === false) {
    tasks[i].Completed = true;
  } else { tasks[i].Completed = false; }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default reIndex;