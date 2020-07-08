import {newProject, editProject, newTask, editTask} from './DOMfunctions'

// Event listeners for editing project name and description 
editProject.editBtn.addEventListener('click', editProject.show);
editProject.cancelBtn.addEventListener('click', editProject.hide);
editProject.submitBtn.addEventListener('click', () => {
    editProject.submit();
    editProject.hide();
})

// Event listeners for adding new task  
newTask.addBtn.addEventListener('click', newTask.show);
newTask.cancelBtn.addEventListener('click', newTask.hide);
newTask.submitBtn.addEventListener('click', newTask.submit);

