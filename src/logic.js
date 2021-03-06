import {allProjects} from './index'
import {storeProjects, createEditDiv, createAddTaskDiv} from './DOMload'
import { editProject } from './DOMfunctions';

const createProject = (name, description) => {
    clearActiveProjects();
    allProjects.push({
        name,
        description,
        toDoListItems: [],
        active: true,
    })

    createEditDiv();
    createAddTaskDiv();
    storeProjects();
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
    storeProjects();
}

function clearActiveProjects() {
    if (allProjects.length > 0) {
        allProjects.forEach((project) => {
            project.active = false;
        })
    }
    storeProjects();
}

function updateProject(name, description) {
    let activeProject = allProjects.filter(project => project.active === true);
    activeProject[0].name = name;
    activeProject[0].description = description;
    storeProjects();
}

function swapProject(index) {
    clearActiveProjects();
    let currentProject = allProjects[index];
    currentProject.active = true;
    storeProjects();
}

function deleteProject(index) {
    // Delete project from index specified.
    allProjects.splice(index, 1);
    // Select last project (if it exists) and make it active.
    if (allProjects.length >= 1) {
        allProjects[allProjects.length - 1].active = true;
    }
    storeProjects();
}

function deleteTask(index) {
    let activeProject = allProjects.filter(project => project.active === true);
    let activeTasks = activeProject[0].toDoListItems;
    activeTasks.splice(index, 1);
    storeProjects();
}

function updateTask(index, name, date) {
    let activeProject = allProjects.filter(project => project.active === true);
    let activeTasks = activeProject[0].toDoListItems;
    let activeTask = activeTasks[index];
    activeTask.name = name;
    activeTask.date = date;
    storeProjects();
}

function completeTask(index) {
    let activeProject = allProjects.filter(project => project.active === true);
    let activeTasks = activeProject[0].toDoListItems;
    let activeTask = activeTasks[index];
    if (activeTask.complete == false) {
        activeTask.complete = true;
    } else {
        activeTask.complete = false; 
    }
    storeProjects();
}

export {createProject, createTask, clearActiveProjects, updateProject, swapProject, deleteProject, deleteTask, updateTask, completeTask}