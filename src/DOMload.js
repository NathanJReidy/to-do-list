import {newProject, editProject, newTask, editTask} from './DOMfunctions'
import {allProjects} from './index'

function initialLoad() {
    editProject.hide();
    newTask.hide();
    editTask.hide();
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

        subDiv.appendChild(image);
        mainDiv.appendChild(subDiv);
        container.appendChild(mainDiv);

        console.log("funcion loadProjects runs! Should be added to DOM!");
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


function switchProjects() {
    // for each potential project added in left container, when clicked
    // it needs to change the project name, project description and to do
    // tasks in the right container to match it 
}

function updateProjectDetails() {
    // in right container, when edit button of project name/desc is clicked,
    // followed by the submit button, the project name and description in that 
    // container needs to be changed to include the updated details, AND
    // the left container project name needs to change to refelct the updated details
}



export {initialLoad, loadProjects, clearProjects, resfreshProjects, loadActiveProject};