import {allProjects} from './index'

const createProject = (name, description) => {
    allProjects.push({
        name,
        description,
        toDoListItems: [],
        active: true,
    })
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

export {createProject, createTask}