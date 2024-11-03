
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

let toDoTasksNumber = 0;
let inProgressTasksNumber = 0;
let doneTasksNumber = 0;

addTaskButton.addEventListener("click", () => {
    addTaskInfo.classList.remove("hidden");
    background.classList.add("blur");
    addTaskButton.classList.add("hidden");
    toDoSection.classList.add("hidden");
    inProgressSection.classList.add("hidden");
    doneSection.classList.add("hidden");
    allTasksButton.classList.add("hidden");
    toDoButton.classList.add("hidden");
    inProgressButton.classList.add("hidden");
    doneButton.classList.add("hidden");
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTaskInfo.classList.add("hidden");
    background.classList.remove("blur");
    addTaskButton.classList.remove("hidden");
    allTasksButton.classList.remove("hidden");
    toDoButton.classList.remove("hidden");
    inProgressButton.classList.remove("hidden");
    doneButton.classList.remove("hidden");
});

document.querySelector(".search").addEventListener('click',()=>{
    document.querySelector("#search").classList.toggle("hidden");
})

addTaskInfo.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = addTaskInfo.title.value;
    const description = addTaskInfo.description.value;
    const status = addTaskInfo.status.value;
    const deadline = addTaskInfo["dead-line"].value;
    const priority = addTaskInfo.Priority.value;
    addTaskButton.classList.remove("hidden");
    allTasksButton.classList.remove("hidden");
    toDoButton.classList.remove("hidden");
    inProgressButton.classList.remove("hidden");
    doneButton.classList.remove("hidden");
    
    let Pstyle = "";
    
    switch (priority) {
        case "P1":Pstyle="text-white p-1 text-lg bg-red-500 rounded-md";break;
        case "P2":Pstyle="text-white p-1 text-lg bg-orange-500 rounded-md";break;
        case "P3":Pstyle="text-white p-1 text-lg bg-green-500 rounded-md";break;
    }

    const task = document.createElement("div");
    task.classList.add("taskInfo", "shadow-lg","shadow-violet-700","border-purple-700","p-2", "rounded-lg","border-2", "flex-wrap", "flex", "flex-col", "md:w-[600px]", "max-md:w-full");
    
    task.innerHTML = `
        <div class="flex flex-wrap justify-between items-center min-w-[240px]">
            <div class="flex self-start items-center">
            <p class="${Pstyle} rounded-md">${priority}</p>
            <h3 class="ml-2 font-bold text-lg">Title:</h3>
            <p class="ml-3 bg-white bg-opacity-40 font-mono text-wrap rounded-md">${title}</p>
            </div>
            <button class="showTaskInfo "><i>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></i>
            </button>
        </div>
        <div class="taskInfoByTitle hidden max-md:max-w-[230px]">
            <div class=""><h3 class="ml-2 font-bold text-lg">Description:</h3><p class="ml-3 h-16 bg-white bg-opacity-40 p-2 font-mono rounded-md ">${description}</p></div>
            <div class="h-14 flex  items-center"><h3 class="ml-2 font-bold text-lg">Status:</h3><p class="statu ml-3 bg-white bg-opacity-40 font-mono rounded-md">${status}</p></div>
            <div class="h-14 flex  items-center"><h3 class="ml-2 font-bold text-lg">Dead Line:</h3><p class="ml-3 bg-white bg-opacity-40 font-mono rounded-md">${deadline}</p></div>
            <div class="flex justify-end w-full">
            <div>
            <button class=" mt-2 rounded-md bg-red-500 hover:bg-red-900 w-16 text-white deleteTask">Delete</button>
            <button class=" mt-2 rounded-md bg-yellow-500 hover:bg-yellow-900 w-16 text-white editTask">Edit</button>
            <div>
            </div>
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

    toDoSection.querySelector(".tasksNumber").innerHTML = " " + toDoTasksNumber + " ";
    inProgressSection.querySelector(".tasksNumber").innerHTML = " " + inProgressTasksNumber + " ";
    doneSection.querySelector(".tasksNumber").innerHTML = " " + doneTasksNumber + " ";

    addTaskInfo.reset();
    addTaskInfo.classList.add("hidden");


    task.querySelector(".showTaskInfo").addEventListener("click", () => {
        task.querySelector(".taskInfoByTitle").classList.toggle("hidden");
        task.querySelector(".showTaskInfo").classList.toggle("rotate-180");
    });

    task.querySelector(".deleteTask").addEventListener("click", () => {
let statu = task.querySelector(".statu").textContent;
        if(statu === "to-do"){
            console.log("1");
            ;--toDoTasksNumber;
            toDoSection.querySelector(".tasksNumber").innerHTML = " " + toDoTasksNumber + " ";
        }else if (statu === "in-progress") {
                console.log("2");
                --inProgressTasksNumber;
                inProgressSection.querySelector(".tasksNumber").innerHTML = " " + inProgressTasksNumber + " ";
            }else if(statu === "done") {
                console.log("3");
                --doneTasksNumber;
                doneSection.querySelector(".tasksNumber").innerHTML = " " + doneTasksNumber + " ";}
        task.remove();
    });
});



allTasksButton.addEventListener("click",() => {
    toDoSection.classList.remove("hidden");
    inProgressSection.classList.remove("hidden");
    doneSection.classList.remove("hidden");
    background.classList.add("blur");
})

toDoButton.addEventListener("click", () => {
    toDoSection.classList.remove("hidden");
    inProgressSection.classList.add("hidden");
    doneSection.classList.add("hidden");
    background.classList.add("blur");
});
inProgressButton.addEventListener("click", () => {
    inProgressSection.classList.remove("hidden");
    toDoSection.classList.add("hidden");
    doneSection.classList.add("hidden");
    background.classList.add("blur");
});
doneButton.addEventListener("click", () => {
    doneSection.classList.remove("hidden");
    toDoSection.classList.add("hidden");
    inProgressSection.classList.add("hidden");
    background.classList.add("blur");
});
