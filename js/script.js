'use strict';

//todo-control
//todo-input
//todo-completed
//todo-list 

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoCompleted = document.querySelector('.todo-completed');
const todoList = document.querySelector('.todo-list');
const todoRemove = document.querySelector('.todo-remove');

const toDoData = [
 
]

const render = function() {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
    

    toDoData.forEach(function (item) {
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
        
        console.log(item)
        li.querySelector('.todo-complete').addEventListener('click', function(){
            item.completed = !item.completed;
            render()
            
            
        });
        li.querySelector('.todo-remove').addEventListener('click', function(){
            
            toDoData.splice(item, []);
            render();
            console.log(toDoData);
            
                       
        });
      

    });

    
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    const newToDo = {
        text: headerInput.value,
        completed: false
    };

    toDoData.push(newToDo);
    headerInput.value = '';

    render();
});