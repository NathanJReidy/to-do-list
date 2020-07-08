const newProject = (() => {
    const name = document.querySelector('.pnamefield');
    const description = document.querySelector('.pdesfield');
    const submitBtn = document.querySelector('.submitbtnproject');
    const cancelBtn = document.querySelector('.cancelbtnproject');

    function submit() {
        createProject(name.value, description.value);
        // Need to create a createProject function that alters the project name and project description in right container.
    }

    return {
        name,
        description,
        submitBtn,
        cancelBtn,
    }

})();

const editProject = (() => {
    const editBtn = document.querySelector('.editdiv');
    const projectInfo = document.querySelector('#nameDescEdit.addblock');

    const editProjectForm = document.querySelector('#editProjectForm.addblock');
    const name = document.querySelector('.pnameform');
    const description = document.querySelector('.pdescform');
    const submitBtn = document.querySelector('.formsubmit');
    const cancelBtn = document.querySelector('.formcancel');

    function show() {
        projectInfo.style.display = 'none';
        editProjectForm.style.display = 'block';
    }

    function hide() {
        projectInfo.style.display = 'block';
        editProjectForm.style.display = 'none';
        console.log("editProject HIDE TEST");
    }

    function submit() {
        //updateProject(name.value, description.value);
        // Need to make a function that updates the project name and project description shown on the screen based on the inputted submitted values.
    }

    return {
        editBtn,
        submitBtn,
        cancelBtn,
        show,
        hide,
        submit,
    }
})();

const newTask = (() => {
    const addBtn = document.querySelector('#addTaskDiv.addblock');
    const form = document.querySelector('#addTaskFormDiv');
    const name = document.querySelector('.taskfield');
    const date = document.querySelector('.datefield');
    const submitBtn = document.querySelector('.submittaskbtn');
    const cancelBtn = document.querySelector('.canceltaskbtn');

    function show() {
        form.style.display = 'block';
        addBtn.style.display = 'none';
    }

    function hide() {
        form.style.display = 'none';
        addBtn.style.display = 'block';
        clear();       
    }

    function clear() {
        name.value = '';
        date.value = ''; 
    }

    function submit() {
        //createTask(name.value, date.value);
        // Create createTask function to append a new task name and task date div to the allListedTasks parent div
        clear();
        hide();
    
    }

    return {
        addBtn,
        submitBtn, 
        cancelBtn,
        show,
        hide,
        submit,
    }

})();

const editTask = (() => {

})();

export {newProject, editProject, newTask, editTask};