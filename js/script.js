'use strict';

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoCompleted = document.querySelector('.todo-completed');
const todoList = document.querySelector('.todo-list');
const todoRemove = document.querySelector('.todo-remove');
const todoButtonAdd = document.querySelector('.header-button');

let toDoData;
!localStorage.toDoData ? toDoData = [] : toDoData = JSON.parse(localStorage.getItem('toDoData'));

const updatelocal = function() {
    localStorage.setItem('toDoData', JSON.stringify(toDoData));
}

const render = function() {

    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
      
    toDoData.forEach(function (item, index) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
        <span class="text-todo">${item.text}
          <div class="todo-buttons">
                <button class="todo-remove"></button>
                <button class="todo-complete"></button>
            </div>
         </span>`; 
      
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
  
        li.querySelector('.todo-complete').addEventListener('click', function(){
            item.completed = !item.completed;
            render()       
            
        });
        li.querySelector('.todo-remove').addEventListener('click', function(){
            
            toDoData.splice(index, 1);
            render();              
        });

    });
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

  
      if (headerInput.value.length === 0) {
        return;
      }

    const newToDo = {
        text: headerInput.value,
        completed: false
    };

    toDoData.push(newToDo);
    updatelocal();
    headerInput.value = '';

    render();
});