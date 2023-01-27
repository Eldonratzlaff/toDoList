import _ from 'lodash';
import printMe from './print.js';
import './style.css';

console.log("gfdsfgsfd");



//import _ from 'lodash';
//import './style.css';
 
  const tasks = [
    {
      description: 'Take a Shower',
      completed: false,
      index: 1,
    },
    {
      description: 'Cook today',
      completed: false,
      index: 10,
    },
    {
      description: 'Buy groceries',
      completed: false,
      index: 3,
    },
    {
      description: ' Homework',
      completed: false,
      index: 8,
    },
    {
      description: ' List Project',
      completed: false,
      index: 4,
    },
  ];


const show = () => {
  const getList = document.getElementById('todo-list');
  for (let i=0; i<tasks.length;i++ ){
        const item= document.createElement('li');
        item.innerHTML = `<input type="checkbox" class="check" />  ${tasks[i].description}`;
        getList.appendChild(item);
  }
}
 

show();