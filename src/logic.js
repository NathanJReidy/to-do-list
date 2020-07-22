import {allProjects} from './index'

const createProject = (name, description) => {
    clearActiveProjects();
    allProjects.push({
        name,
        description,
        toDoListItems: [],
        active: true,
    })
    console.log("createProject ran successfully!")
    console.log(allProjects);
}

const createTask = (name, date) => {
    let activeProject = allProjects.filter(project => project.active === true);
    let toDoArray = activeProject[0].toDoListItems;
    toDoArray.push({
        name,
        date,
        active: false,
        complete: false,
    })
}

function clearActiveProjects() {
    if (allProjects.length > 0) {
        allProjects.forEach((project) => {
            project.active = false;
        })
    }
}

function updateProject(name, description) {
    let activeProject = allProjects.filter(project => project.active === true);
    activeProject[0].name = name;
    activeProject[0].description = description;
}

function swapProject(index) {
    clearActiveProjects();
    let currentProject = allProjects[index];
    currentProject.active = true;
}


export {createProject, createTask, clearActiveProjects, updateProject}