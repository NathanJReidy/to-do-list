import {newProject, editProject, newTask, editTask} from './DOMfunctions'
import {allProjects} from './index'
import { createProjectBtnListeners, createTaskListeners } from './eventListeners';

function initialLoad() {
    editProject.hide();
    newTask.hide();
    //editTask.hide();
    editTask.disappear();
};

function loadProjects() {
    allProjects.forEach((project, index) => {
        // create divs to append to container div forEach project 
        // added in left container 
    //     <div class="projectlist">
    //     <div id="exampleProject" class="projectexample">
    //       <div class="exampletextblock">Project Moonshot</div><img src="images/trash-icon.png" height="" width="20" alt="" class="exampletrash"></div>
    //   </div>
        const container = document.querySelector('.projectlist');
       
        const mainDiv = document.createElement('div');
        mainDiv.id = "exampleProject";
        mainDiv.classList.add('projectexample');

        const subDiv = document.createElement('div');
        subDiv.classList.add('exampletextBlock');
        subDiv.textContent = project.name;
        subDiv.dataset.value = index;
        if (project.active === true) {
            subDiv.classList.add('active');
        }

        const image = document.createElement('img');
        image.src = 'images/trash-icon.png';
        image.width = '20';
        image.classList.add('exampletrash');

        mainDiv.appendChild(subDiv);
        mainDiv.appendChild(image);
        container.appendChild(mainDiv);

    })
}


function clearProjects() {
    const container = document.querySelector('.projectlist');
    container.innerHTML = ''; 
}

function resfreshProjects() {
    clearProjects();
    loadProjects();
    loadActiveProject();
    createProjectBtnListeners();
}

function refreshTaskList() {
    clearTasks();
    loadActiveToDos();
    createTaskListeners();
}

function refreshPage() {
    resfreshProjects();
    refreshTaskList();
}

function clearTasks() {
    const taskContainer = document.querySelector('#allTasks');
    taskContainer.innerHTML = '';
}

function loadTasks(task, index) {
    // Create UI for tasks that are shown
    const allTasksContainer = document.querySelector('#allTasks');

    const listedTasks = document.createElement('div');
    listedTasks.classList.add('alllistedtasks');
    listedTasks.dataset.value = index;
    listedTasks.id = "taskContainer";

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('leftdiv');
    
    const checkBox = document.createElement('div');
    checkBox.classList.add('checkbox');
    
    const taskText = document.createElement('div');
    taskText.classList.add('tasktext')
    taskText.textContent = task.name;

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('rightdiv');

    const rightRightDiv = document.createElement('div');
    rightRightDiv.classList.add('rightrightdiv');

    const dueDateText = document.createElement('div');
    dueDateText.classList.add('duedatetext');
    dueDateText.textContent = task.date; 

    const editIcon = document.createElement('img');
    editIcon.src = 'images/edit-icon.png';
    editIcon.width = '17';
    editIcon.classList.add('editimg');
    editIcon.id = 'editTask';

    const trashIcon = document.createElement('img');
    trashIcon.src = 'images/trash-icon.png';
    trashIcon.width = '20';
    trashIcon.classList.add('exampletrash');
    trashIcon.id = 'tasktrash';

    // Append created elements to DOM

    leftDiv.appendChild(checkBox);
    leftDiv.appendChild(taskText);


    rightRightDiv.appendChild(dueDateText);
    rightDiv.appendChild(rightRightDiv);
    rightDiv.appendChild(editIcon);
    rightDiv.appendChild(trashIcon);

    listedTasks.appendChild(leftDiv);
    listedTasks.appendChild(rightDiv);

    allTasksContainer.appendChild(listedTasks);

    // Create the edit tasks UI 
    //const allForms = document.querySelectorAll('#editAllTasks.addblock');
    //let allTasks = document.querySelectorAll('#allTasks.addblock');

    const editAllTasks = document.createElement('div');
    editAllTasks.classList.add('addblock');
    editAllTasks.style.display = 'none';
    editAllTasks.id = "editAllTasks";
    editAllTasks.dataset.value = index;

    const editAllListedTasks = document.createElement('div');
    editAllListedTasks.classList.add('alllistedtasks');
    editAllListedTasks.id = "editAllListedTasks";

    const divBlock11 = document.createElement('div');
    divBlock11.classList.add('div-block-11');

    const editalltasksagain = document.createElement('div');
    editalltasksagain.classList.add('editalltasks');

    const editTasksForm = document.createElement('div');
    editTasksForm.classList.add('edittasksform');
    editTasksForm.classList.add('w-form');

    const form = document.createElement('form');
    form.classList.add('edittasksdivform');
    form.id = 'email-form-2';

    const inputName = document.createElement('input');
    inputName.classList.add('edittaskname');
    inputName.classList.add('w-input');
    inputName.id = 'field-3';
    inputName.setAttribute("type", "text");
    inputName.value = task.name;

    const inputDate = document.createElement('input');
    inputDate.classList.add('edittaskdate');
    inputDate.classList.add('w-input');
    inputDate.id = 'field-4';
    inputDate.setAttribute("type", "text")
    inputDate.value = task.date;

    const submitBtn = document.createElement('input');
    submitBtn.classList.add('edittasksubmitbtn');
    submitBtn.classList.add('w-button');
    submitBtn.setAttribute("type", "submit");
    submitBtn.value = "Submit";

    const cancelBtn = document.createElement('div');
    cancelBtn.classList.add('edittaskcancelbtn');
    cancelBtn.textContent = "Cancel";

    // Append everything:
    form.appendChild(inputName);
    form.appendChild(inputDate);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    editTasksForm.appendChild(form);
    editalltasksagain.appendChild(editTasksForm);
    divBlock11.appendChild(editalltasksagain);
    editAllListedTasks.appendChild(divBlock11);
    editAllTasks.appendChild(editAllListedTasks);

    allTasksContainer.appendChild(editAllTasks);
    //listedTasks.append(editAllTasks);
    //allTasksContainer.appendChild(listedTasks);

}



function loadActiveToDos() {
    allProjects.forEach((project) => {
        project.toDoListItems.forEach((task, index) => {
            if (project.active === true){
                loadTasks(task, index);
            }
        })
    })
}




function loadActiveProject() {
    let activeProject = allProjects.filter((project) => project.active === true);
    let activeProjectName = activeProject[0].name;
    let activeProjectDescription = activeProject[0].description;

    const projectNameDisplayed = document.querySelector('.projectname');
    const projectDescriptionDisplayed = document.querySelector('.projectdescription');
    const projectNameInput = document.querySelector('.pnameform');
    const projectDescriptionInput = document.querySelector('.pdescform');

    projectNameDisplayed.textContent = activeProjectName;
    projectDescriptionDisplayed.textContent = activeProjectDescription;
    projectNameInput.value = activeProjectName;
    projectDescriptionInput.value = activeProjectDescription;

}


export {initialLoad, loadProjects, clearProjects, resfreshProjects, loadActiveProject, refreshTaskList, clearTasks, loadTasks, loadActiveToDos, refreshPage};