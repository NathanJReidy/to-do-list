import {initialLoad, loadProjects} from './DOMload'
import {newProject, editProject, newTask, editTask} from './DOMfunctions'
import {eventListeners, createProjectBtnListeners} from './eventListeners'

let allProjects = []; 

initialLoad(); 
eventListeners();
createProjectBtnListeners();
//loadProjects();

export {allProjects};