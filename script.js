const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

const tasks = [];

//after pressing add task, do the following
form.addEventListener("submit",function(event) {
    event.preventDefault();
    const task = taskInput.value;
    const priority = priorityInput.value;
    
    //check if they actually entered something
    if (task.trim() === "") {
        return;
    }

    //create task object
    const fullTask = {
        name: task,
        priority: priority,
        completed: false
    }
    tasks.push(fullTask);
    displayTasks();
});

    //displaying tasks
    function displayTasks(){
        taskList.innerHTML = "";

        tasks.forEach(function(task, index) {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");

            //depending on the priority, the color is different
            if (task.priority === "high") {
             taskElement.classList.add("High");
            } else if (task.priority === "medium") {
                taskElement.classList.add("Medium");
            } else if (task.priority === "low") {
                taskElement.classList.add("Low");
            }


            if(task.completed){
                taskElement.classList.add("completed");
            }

            const taskName = document.createElement("p");
            taskName.textContent = task.name;

            const taskPriority = document.createElement("p");
            taskPriority.textContent = "Priority: " + task.priority;
            
            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            
            completeButton.addEventListener("click", function() {
                task.completed = true;
                displayTasks();
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            
            deleteButton.addEventListener("click", function() {
                tasks.splice(index, 1);
                displayTasks();
            });
            

            taskElement.appendChild(taskName);
            taskList.appendChild(taskElement);
            taskElement.appendChild(taskPriority);
            taskElement.appendChild(completeButton);
            taskElement.appendChild(deleteButton);


            
        });
    }

