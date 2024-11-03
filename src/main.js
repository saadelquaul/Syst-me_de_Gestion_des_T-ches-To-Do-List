
const addTaskButton = document.querySelector(".addTask");
const addTaskInfo = document.querySelector(".addTaskInfo");
const toDoSection = document.querySelector(".toDo");
const inProgressSection = document.querySelector(".inProgress");
const doneSection = document.querySelector(".done");
const toDoButton = document.querySelector(".toDoBtn");
const inProgressButton = document.querySelector(".inPBtn");
const doneButton = document.querySelector(".doneBtn");
const cancelButton = document.querySelector(".cancel");
const background = document.querySelector(".backg");
const addButton = document.querySelector(".add");
const allTasksButton = document.querySelector(".tasksBtn");

let toDoTasksNumber=0;
let inProgressTasksNumber=0;
let doneTasksNumber=0;

addTaskButton.addEventListener("click", () => {
    addTaskInfo.classList.remove("hidden");
    background.classList.add("blur");
    addTaskButton.classList.add("hidden");
    toDoSection.classList.add("hidden");
    inProgressSection.classList.add("hidden");
    doneSection.classList.add("hidden");
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTaskInfo.classList.add("hidden");
    background.classList.remove("blur");
    addTaskButton.classList.remove("hidden");
});

addTaskInfo.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = addTaskInfo.title.value;
    const description = addTaskInfo.description.value;
    const status = addTaskInfo.status.value;
    const deadline = addTaskInfo["dead-line"].value;
    const priority = addTaskInfo.Priority.value;
    addTaskButton.classList.remove("hidden");
    

    const task = document.createElement("div");
    task.classList.add("taskInfo", "shadow-lg","shadow-violet-700","border-purple-700", "rounded-lg","border-2", "contain-content", "max-h-96", "flex-wrap", "flex", "flex-col", "md:w-[600px]", "max-md:w-[calc(100%-20%)]");
    
    task.innerHTML = `
        <div class="flex flex-wrap items-center">
            <h3 class="ml-2 font-bold text-lg">Title:</h3>
            <p class="ml-3 bg-opacity-40 font-mono">${title}</p>
            <button class="showTaskInfo absolute right-4"><i>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></i>
            </button>
        </div>
        <div class="taskInfoByTitle ">
            <div class="h-14 flex  items-center"><h3 class="ml-2 font-bold text-lg">Description:</h3><p class="ml-3 bg-slate-400 bg-opacity-40 font-mono">${description}</p></div>
            <div class="h-14 flex  items-center"><h3 class="ml-2 font-bold text-lg">Status:</h3><p class="ml-3 bg-slate-400 bg-opacity-40 font-mono">${status}</p></div>
            <div class="h-14 flex  items-center"><h3 class="ml-2 font-bold text-lg">Deadline:</h3><p class="ml-3 bg-slate-400 bg-opacity-40 font-mono">${deadline}</p></div>
            <br>
            <button class="absolute right-24 bottom-4 mt-2 rounded-md bg-red-500 hover:bg-red-900 w-16 text-white deleteTask">Delete</button>
            <button class="absolute right-6 bottom-4 mt-2 rounded-md bg-yellow-500 hover:bg-yellow-900 w-16 text-white editTask">Edit</button>
        </div>`;

    if (status === "to-do") {
        toDoSection.querySelector(".tasksInfo").appendChild(task);
        toDoSection.classList.remove("hidden");
        task.classList.add("bg-red-300","bg-opacity-50");
        toDoTasksNumber++;

    } else if (status === "in-progress") {
        inProgressSection.querySelector(".tasksInfo").appendChild(task);
        inProgressSection.classList.remove("hidden");
        task.classList.add("bg-orange-300","bg-opacity-50");
        inProgressTasksNumber++;
    } else if (status === "done") {
        doneSection.querySelector(".tasksInfo").appendChild(task);
        task.classList.add("bg-green-400" , "bg-opacity-50")
        doneSection.classList.remove("hidden");
        doneTasksNumber++;
    }

    addTaskInfo.reset();
    addTaskInfo.classList.add("hidden");


    task.querySelector(".showTaskInfo").addEventListener("click", () => {
        task.querySelector(".taskInfoByTitle").classList.toggle("hidden");
    });

    task.querySelector(".deleteTask").addEventListener("click", () => {
        task.remove();
    });
});



allTasksButton.addEventListener("click",() => {
    toDoSection.classList.remove("hidden");
    inProgressSection.classList.remove("hidden");
    doneSection.classList.remove("hidden");
})

toDoButton.addEventListener("click", () => {
    toDoSection.classList.remove("hidden");
    inProgressSection.classList.add("hidden");
    doneSection.classList.add("hidden");
});
inProgressButton.addEventListener("click", () => {
    inProgressSection.classList.remove("hidden");
    toDoSection.classList.add("hidden");
    doneSection.classList.add("hidden");
});
doneButton.addEventListener("click", () => {
    doneSection.classList.remove("hidden");
    toDoSection.classList.add("hidden");
    inProgressSection.classList.add("hidden");
});
