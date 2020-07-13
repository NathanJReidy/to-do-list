import {initialLoad, loadProjects} from './DOMload'
import {newProject, editProject, newTask, editTask} from './DOMfunctions'
import {eventListeners} from './eventListeners'

let allProjects = []; 

initialLoad(); 
eventListeners();
//loadProjects();

export {allProjects};