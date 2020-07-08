import {initialLoad} from './DOMload'

initialLoad(); 

import {newProject, editProject, newTask, editTask} from './DOMfunctions'

// Event listeners for editing project name and description 
editProject.editBtn.addEventListener('click', editProject.show);
editProject.cancelBtn.addEventListener('click', editProject.hide);
editProject.submitBtn.addEventListener('click', () => {
    editProject.submit();
    console.log("HELLO NATHAN!");
    editProject.hide();
})

// Event listeners for adding new task  
newTask.addBtn.addEventListener('click', newTask.show);
newTask.cancelBtn.addEventListener('click', newTask.hide);
//newTask.submitBtn.addEventListener('click', newTask.submit);

// Event listeners for editing or deleting a specific task
editTask.deleteBtn.addEventListener('click', editTask.deleteTask);
editTask.editBtn.addEventListener('click', editTask.show);
editTask.cancelBtn.addEventListener('click', editTask.hide);
//editTask.submitBtn.addEventListener('click', editTask.submit);

console.log("Event listener module!");
console.log("EVENT LISTENER 3!");