
import { todolist,addTolist,removeFromList ,removeChecked} from "../data/todolist.js";


document.getElementById('show-todo-btn').addEventListener('click', () => {

  let todoList = document.getElementById('todo-list');
  
  // Clear the existing todo items
  todoList.innerHTML = '';
  
  todolist.forEach((element) => {
    
    const li = document.createElement('li');
    
    // Set innerHTML of the <li> element
    li.innerHTML = `<div class="text-container">
      <span class="checkmark"></span>
      <span class="task-text">${element.task}</span>
      <span class="due-date"> (Due: ${element.duedate})</span>
      </div>
      <button class="check-btn">Check</button>
      <button class="delete-btn">Delete</button>`;


      const checkBtn = li.querySelector('.check-btn');
      checkBtn.onclick = function() {// Toggle the state of the todo item
        // element.state = (element.state === 0) ? 1 : 0;
        
        // // Apply styles based on the state
        // if (element.state === 0) {
        //     li.style.textDecoration = 'line-through';
        // } else {
        //     li.style.textDecoration = 'none';
        // }
       
        

          li.classList.toggle('completed');
          
          checkBtn.classList.toggle('completed');
      };

      const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.onclick = function() {
        document.getElementById('todo-list').removeChild(li);
        removeFromList(element.task,element.duetime);
      };
    
    // Append the <li> element to an existing list element, assuming you have a ul element with id 'todo-list'
    document.getElementById('todo-list').appendChild(li);}
  );

  /*document.getElementById('todo-container').style.display = 'block';*/
});









document.getElementById('add-todo-btn').addEventListener('click', function() {
  const todoList = document.getElementById('todo-list');
  const todoInput = document.getElementById('todo-input');
  const dueDateInput = document.getElementById('todo-due-date');
  const newTodoText = todoInput.value.trim();
  const dueDate = dueDateInput.value;

  if (newTodoText !== '' && dueDate !== '') {
    let todoList = document.getElementById('todo-list');
  
  // Clear the existing todo items
  todoList.innerHTML = '';


      const newLi = document.createElement('li');
      newLi.innerHTML = `<div class="text-container">
          <span class="checkmark"></span>
          <span class="task-text">${newTodoText}</span>
          <span class="due-date"> (Due: ${dueDate})</span>
          </div>
          <button class="check-btn">Check</button>
          <button class="delete-btn">Delete</button>`;

      const checkBtn = newLi.querySelector('.check-btn');
      checkBtn.onclick = function() {
          newLi.classList.toggle('completed');
          checkBtn.classList.toggle('completed');
      };

      const deleteBtn = newLi.querySelector('.delete-btn');
      deleteBtn.onclick = function() {
          todoList.removeChild(newLi);
      };

      todoList.appendChild(newLi);
      todoInput.value = ''; // Clear input field after adding
      dueDateInput.value = ''; // Clear due date field after adding

      addTolist(newTodoText, dueDate);

      
  } else {
      alert('Please enter a task and select a due date.');
  }

  
});

document.getElementById('todo-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      document.getElementById('add-todo-btn').click();
  }
});

todolist.forEach(element => {
  console.log(element);
});


