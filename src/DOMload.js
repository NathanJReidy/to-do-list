import {newProject, editProject, newTask, editTask} from './DOMfunctions'

function initialLoad() {
    editProject.hide();
    newTask.hide();
    //editTask.hide();
};

console.log("DOM LOAD!");
export {initialLoad};