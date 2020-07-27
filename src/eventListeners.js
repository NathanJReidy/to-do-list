import {newProject, editProject, newTask, editTask} from './DOMfunctions'
import { refreshPage, refreshTaskList } from './DOMload';
import {swapProject, deleteProject, deleteTask, completeTask} from './logic';

// Static event listeners 
function eventListeners() {
    
    //Event listener for submitting new project
    newProject.submitBtn.addEventListener('click', () => {
        newProject.submit();
        newProject.hide();
    })

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

// Create dynamic event listeners for selecting (clicking) or deleting a specific project 
function createProjectBtnListeners(){
    let projectBtns = document.querySelectorAll('#exampleProject.projectexample');
    projectBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.className != 'exampletrash') {
                let datasetValue = e.target.dataset.value;
                swapProject(datasetValue);
                refreshPage();
            }
        })
    })

    let deleteProjectBtns = document.querySelectorAll('.exampletrash');
    deleteProjectBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let datasetValue = e.target.parentElement.firstElementChild.dataset.value;
            deleteProject(datasetValue);
            refreshPage();
        })
    })

}

function createTaskListeners() {
    let checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let datasetValue = e.target.parentNode.parentNode.dataset.value;
            completeTask(datasetValue);
            editTask.checkbox(btn);
        })
    })

    let deleteTaskBtns = document.querySelectorAll('#tasktrash.exampletrash');
    deleteTaskBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let datasetValue = e.target.parentNode.parentNode.dataset.value;
            deleteTask(datasetValue);
            refreshTaskList();
            
        })
    })

    let editTaskBtns = document.querySelectorAll('#editTask.editimg');
    editTaskBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let datasetValue = e.target.parentNode.parentNode.dataset.value;
            editTask.show(datasetValue);
            editTaskBtnListeners(datasetValue);

        })
    })
}

function editTaskBtnListeners(index) {
    let cancelBtns = document.querySelectorAll('.edittaskcancelbtn');
    cancelBtns[index].addEventListener('click', () => {
        editTask.hide(index);
        refreshTaskList();
    })

    let submitBtns = document.querySelectorAll('.edittasksubmitbtn');
    submitBtns[index].addEventListener('click', () => {
        editTask.submit(index);
        editTask.hide(index);
        refreshTaskList();
    })
}

export {eventListeners, createProjectBtnListeners, createTaskListeners, editTaskBtnListeners};