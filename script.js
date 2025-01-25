const todolist = () => {
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
} else {
    alert("Please add a task");
}
}