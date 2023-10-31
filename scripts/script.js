const divAddElement = document.querySelector("#add");

const divEditElement = document.querySelector("#edit");
const taskEditInput = document.querySelector("#taskEdit");
const editConfirmBtn = document.querySelector("#editConfirmBtn");
const cancelEditBtn = document.querySelector("#cancelEditBtn");

const inputTaskElement = document.querySelector("#task");
const btnTaskElement = document.querySelector("#taskBtn");

const inputSearchElement = document.querySelector("#search");
const mainElement = document.querySelector("#main_container");
const btnSearch = document.querySelector("#searchBtn");

const selectElement = document.querySelector("#filter");

let changeP;

const searchTasks = () => {
    const divTasks = document.querySelectorAll(".tasks");

    divTasks.forEach((task) => {
        if (task.firstElementChild.textContent.toLowerCase().includes(inputSearchElement.value.toLowerCase())) {
            task.classList.remove("hidde")
            return
        }
        task.classList.add("hidde")
    })
}

const removeTask = (e) => {
    const parentNode = e.target.parentElement;
    parentNode.remove();
}

const checkTask = (e) => {
    const parentNode = e.target.parentElement;
    parentNode.classList.toggle("check_task");
}

const editTask = (e) => {
    const divTasks = document.querySelectorAll(".tasks");
    divAddElement.classList.toggle("hidde");
    divEditElement.classList.toggle("hidde");

    divTasks.forEach(divTask => {
        divTask.classList.add("hidde")
    })

    changeP = e.target.parentElement.firstChild;
    taskEditInput.value = changeP.textContent;
}

const cancelEdit = () => {
    const divTasks = document.querySelectorAll(".tasks");
    divAddElement.classList.toggle("hidde");
    divEditElement.classList.toggle("hidde");

    divTasks.forEach(divTask => {
        divTask.classList.remove("hidde")
    })
}

const confirmEdit = () => {
    changeP.textContent = taskEditInput.value;
    cancelEdit();
}

const filter = (e) => {
    const divTasks = document.querySelectorAll(".tasks");

    divTasks.forEach(task => {
        switch (e.target.value) {
            case "all": {
                task.classList.remove("hidde");
                break;
            }
            case "done": {
                if (task.classList.contains("check_task")) {
                    task.classList.remove("hidde");
                } else {
                    task.classList.add("hidde");
                }
                break;
            }
            case "todo": {
                if (!task.classList.contains("check_task")) {
                    task.classList.remove("hidde");
                } else {
                    task.classList.add("hidde");
                }
                break;
            }
        }
    });

}

const addTask = () => {
    if (inputTaskElement.value === "")
        return alert("the task cannot be empty")

    const newDivTask = document.createElement("div");
    const taskDescription = document.createElement("p");
    taskDescription.textContent = inputTaskElement.value;

    newDivTask.appendChild(taskDescription);
    newDivTask.classList.add("main_container_area")
    newDivTask.classList.add("tasks")
    mainElement.append(newDivTask);


    const checkBtn = document.createElement("button");
    checkBtn.textContent = "✔";
    checkBtn.addEventListener("click", checkTask);
    const editBtn = document.createElement("button");
    editBtn.textContent = "🖊️";
    editBtn.addEventListener("click", editTask);
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", removeTask)


    newDivTask.appendChild(checkBtn);
    newDivTask.appendChild(editBtn);
    newDivTask.appendChild(removeBtn);

    inputTaskElement.value = "";
}

btnTaskElement.addEventListener("click", addTask);
btnSearch.addEventListener("click", () => {
    inputSearchElement.value = "";
    searchTasks()
});
inputSearchElement.addEventListener("keyup", searchTasks);
cancelEditBtn.addEventListener("click", cancelEdit);
editConfirmBtn.addEventListener("click", confirmEdit);
selectElement.addEventListener("change", filter);