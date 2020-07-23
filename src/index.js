import {initialLoad, loadProjects} from './DOMload'
import {newProject, editProject, newTask, editTask} from './DOMfunctions'
import {eventListeners, createProjectBtnListeners, createTaskListeners} from './eventListeners'

let allProjects = []; 

initialLoad(); 
eventListeners();
createProjectBtnListeners();
createTaskListeners();
//loadProjects();

export {allProjects};