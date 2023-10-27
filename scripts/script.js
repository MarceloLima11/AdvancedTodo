const inputTaskElement = document.querySelector("#task");
const btnTaskElement = document.querySelector("#taskBtn");

const inputSearchElement = document.querySelector("#search");
const mainElement = document.querySelector("#main_container");
const btnSearch = document.querySelector("#searchBtn");

const searchTasks = () => {
    const tasks = document.querySelectorAll(".tasks");

    tasks.forEach((task) => {
        if (task.firstElementChild.textContent.includes(inputSearchElement.value)) {
            task.classList.remove("hidde")
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
    checkBtn.textContent = "✔️";
    checkBtn.addEventListener("click", checkTask);
    const editBtn = document.createElement("button");
    editBtn.textContent = "🖊️";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", removeTask)


    newDivTask.appendChild(checkBtn);
    newDivTask.appendChild(editBtn);
    newDivTask.appendChild(removeBtn);

    inputTaskElement.value = "";
}

btnTaskElement.addEventListener("click", addTask)
btnSearch.addEventListener("click", () => {
    inputSearchElement.value = "";
    searchTasks()
})
inputSearchElement.addEventListener("keyup", searchTasks);