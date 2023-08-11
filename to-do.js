function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const newTask = document.createElement("li");
      newTask.innerHTML = `<input type="checkbox" onchange="toggleTaskCompletion(this)">${taskText}`;
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  
  function toggleTaskCompletion(checkbox) {
    const taskText = checkbox.nextSibling; // Get the task text node next to the checkbox
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  }
  
