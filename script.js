const addTask= () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !=="") {
        const todolist = document.getElementById("todoList");
        const li = document.createElement("li");
        const span = document.createElement("span")
        span.textContent = taskText;
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(span);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => removeTask(li);
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todolist.appendChild(li);
        taskInput.value = "";
        
} else {
    alert("Please add a task");
}
}