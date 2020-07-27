import {initialLoad, loadProjects} from './DOMload'
import {newProject, editProject, newTask, editTask} from './DOMfunctions'
import {eventListeners, createProjectBtnListeners, createTaskListeners} from './eventListeners'

let allProjects = []; 

initialLoad(); 
eventListeners();
createProjectBtnListeners();
createTaskListeners();

console.log(window.localStorage);
console.log(`Window local storage is ${window.localStorage}`);

export {allProjects};
