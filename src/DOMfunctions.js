import {createProject, createTask, addLatestProject, updateProject, updateTask} from './logic';
import {resfreshProjects, refreshTaskList, clearTasks, loadActiveToDos, refreshPage} from './DOMload';

const newProject = (() => {
    const name = document.querySelector('.pnamefield');
    const description = document.querySelector('.pdesfield');
    const submitBtn = document.querySelector("#email-form-4 > div > input");
    const cancelBtn = document.querySelector('.cancelbtnproject');
    
    function submit() {
        createProject(name.value, description.value);
        resfreshProjects();
        refreshPage();
        // Need to create a createProject function that alters the project name and project description in right container.
    }

    function hide() {
        let newProjectForm = document.querySelector('.modalwrap');
        newProjectForm.style.display = 'none';
        console.log("newProject.hide() runs!");
    }

    return {
        name,
        description,
        submitBtn,
        cancelBtn,
        submit,
        hide,
    }

})();

const editProject = (() => {
    const editBtn = document.querySelector('.editdiv');
    const projectInfo = document.querySelector('#nameDescEdit.addblock');

    const editProjectForm = document.querySelector('#editProjectForm.addblock');
    const name = document.querySelector('.pnameform');
    const description = document.querySelector('.pdescform');
    const submitBtn = document.querySelector('.formsubmit');
    const cancelBtn = document.querySelector('.formcancel');
    let editDiv = document.querySelector('#nameDescEdit > div.editdiv');

    function show() {
        projectInfo.style.display = 'none';
        editProjectForm.style.display = 'block';
    }

    function hide() {
        projectInfo.style.display = 'block';
        editProjectForm.style.display = 'none';
    }

    function submit() {
        updateProject(name.value, description.value);
        resfreshProjects();
        // Need to make a function that updates the project name and project description shown on the screen based on the inputted submitted values.
    }

    // function disappear() {
    //     // This removes the option to Edit project (for the initial page load)
    //     editDiv.style.display = 'none';
    // }

    // function reappear() {
    //     // This makes the Edit project option appear again
    //     editDiv.style.display = 'flex';
    // }

    return {
        editBtn,
        submitBtn,
        cancelBtn,
        show,
        hide,
        submit,
        // disappear,
        // reappear,
    }
})();

const newTask = (() => {
    const addBtn = document.querySelector('#addTaskDiv.addblock');
    const form = document.querySelector('#addTaskFormDiv');
    const name = document.querySelector('.taskfield');
    const date = document.querySelector('.datefield');
    const submitBtn = document.querySelector("#email-form > div.submittaskdiv > a");
    const cancelBtn = document.querySelector('.canceltaskbtn');

    function show() {
        form.style.display = 'block';
        addBtn.style.display = 'none';
    }

    function hide() {
        form.style.display = 'none';
        addBtn.style.display = 'block';
        clear();       
    }

    function clear() {
        name.value = '';
        date.value = ''; 
    }

    function submit() {
        console.log("NEWTASK.SUBMIT RUNS!");
        createTask(name.value, date.value);
        refreshTaskList();

        clear();
        hide();
    
    }

    // function disappear() {
    //     // Makes functionality of adding new task disappear for the initial page load.
    //     addBtn.style.display = 'none';
    // }

    // function reappear() {
    //     addBtn.style.display = 'block';
    // }

    return {
        addBtn,
        submitBtn, 
        cancelBtn,
        show,
        hide,
        submit,
        clear,
        // disappear,
        // reappear,
    }

})();

const editTask = (() => {
    const editBtn = document.querySelector("#allTasks > div > div.rightdiv > img.editimg");
    const deleteBtn = document.querySelector("#allTasks > div > div.rightdiv > img.exampletrash");
    const editInfo = document.querySelector('#editAllTasks.addblock');
    const task = document.querySelector('#allTasks.addblock');
    const cancelBtn = document.querySelector('.edittaskcancelbtn');
    const submitBtn = document.querySelector('.edittasksubmitbtn');


    function show(index) {
        let allForms = document.querySelectorAll('#editAllTasks.addblock');
        let allTasks = document.querySelectorAll('#taskContainer.alllistedtasks');

        let selectedTask = allTasks[index];
        selectedTask.style.display = 'none';
        let selectedForm = allForms[index];
        selectedForm.style.display = 'block';
    }

    function hide(index) {
        let allForms = document.querySelectorAll('#editAllTasks.addblock');
        let allTasks = document.querySelectorAll('#taskContainer.alllistedtasks');

        allTasks[index].style.display = 'flex';
        allForms[index].style.display = 'none';

        console.log("editTask.hide runs");
    }

    function disappear() {
        task.style.display = 'block';
        editInfo.style.display = 'none';
    }

    function deleteTask() {
        task.style.display = 'none';
    }

    function submit(index) {
        let inputName = document.querySelectorAll('.edittaskname');
        let inputDate = document.querySelectorAll('.edittaskdate');
        let name = inputName[index].value;
        let date = inputDate[index].value;

        updateTask(index, name, date);
    }

    function checkbox(btn) {
        btn.classList.toggle('complete'); 
    }

    return {
        editBtn,
        deleteBtn,
        cancelBtn,
        submitBtn,
        show,
        hide,
        disappear,
        deleteTask,
        submit,
        checkbox,
    }

})();


export {newProject, editProject, newTask, editTask};