import {initialLoad, loadProjects, loadActiveToDos, loadActiveProject, refreshPage} from './DOMload'
import {newProject, editProject, newTask, editTask} from './DOMfunctions'
import {eventListeners, createProjectBtnListeners, createTaskListeners} from './eventListeners'

let allProjects = []; 

if (localStorage.length != 0) {
    allProjects = JSON.parse(window.localStorage.getItem('user'));
}


initialLoad(); 
eventListeners();
createProjectBtnListeners();
createTaskListeners();

loadProjects();
loadActiveProject();
loadActiveToDos();
refreshPage();


export {allProjects};
