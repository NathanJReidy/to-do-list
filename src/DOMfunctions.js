const newProject = (() => {
    const name = document.querySelector('.pnamefield');
    const description = document.querySelector('.pdesfield');
    const submitBtn = document.querySelector('.submitbtnproject');
    const cancelBtn = document.querySelector('.cancelbtnproject');

    function submit() {
        createProject(name.value, description.value);
        // Need to create a createProject function that alters the project name and project description in right container.
    }

})

const editProject = (() => {
    const editBtn = document.querySelector('.editdiv');
    const projectInfo = document.querySelector('#nameDescEdit');

    const editProjectForm = document.querySelector('#editProjectForm');
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
    }

    function submit() {
        updateProject(name.value, description.value);
        // Need to make a function that updates the project name and project description shown on the screen based on the inputted submitted values.
    }
})