import {newProject, editProject, newTask, editTask} from './DOMfunctions'

// Static event listeners 
function eventListeners() {
    
    //Event listener for submitting new project
    newProject.submitBtn.addEventListener('click', newProject.submit);

    // Event listeners for editing project name and description 
    editProject.editBtn.addEventListener('click', editProject.show);
    editProject.cancelBtn.addEventListener('click', editProject.hide);
    editProject.submitBtn.addEventListener('click', () => {
        editProject.submit();
        editProject.hide();
    })

    // Event listeners for adding new task or canceling adding new task 
    newTask.addBtn.addEventListener('click', newTask.show);
    newTask.cancelBtn.addEventListener('click', newTask.hide);
    newTask.submitBtn.addEventListener('click', newTask.submit);


}


// Create dynamic event listeners for editing or deleting a specific task
editTask.deleteBtn.addEventListener('click', editTask.deleteTask);
editTask.editBtn.addEventListener('click', editTask.show);
editTask.cancelBtn.addEventListener('click', editTask.hide);
//editTask.submitBtn.addEventListener('click', editTask.submit);

// Create dynamic event listeners for selecting (clicking) or deleting a specific project 
function createProjectBtnListeners(){
    let projectBtns = document.querySelectorAll('.projectexample');
    projectBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.className != 'exampletrash') {
                console.log("SUCCESS NATHAN!");
            }
        })
    })
}





export {eventListeners, createProjectBtnListeners};