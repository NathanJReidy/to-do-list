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