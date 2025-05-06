document.addEventListener("DOMContentLoaded", () => {
    let tasks = [];
    let idCounter = 0;
  
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");
    const taskForm = document.getElementById("task-form");
    const sortButtons = document.querySelectorAll(".sort-buttons button");
  
    const renderTasks = (list = tasks) => {
      taskList.innerHTML = "";
      list.forEach(task => {
        const li = document.createElement("li");
        li.className = "task" + (task.done ? " done" : "");
        li.dataset.id = task.id;
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => toggleDone(task.id));
  
        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        textSpan.addEventListener("click", () => toggleDone(task.id));
  
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.addEventListener("click", () => editTask(task.id));
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));
  
        li.append(checkbox, textSpan, editBtn, deleteBtn);
        taskList.appendChild(li);
      });
    };
  
    const addTask = (text) => {
      const newTask = {
        id: ++idCounter,
        text,
        done: false,
        created: new Date(),
        updated: new Date()
      };
      tasks.push(newTask);
      renderTasks();
    };
  
    const deleteTask = (id) => {
      tasks = tasks.filter(t => t.id !== id);
      renderTasks();
    };
  
    const toggleDone = (id) => {
      tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done, updated: new Date() } : t);
      renderTasks();
    };
  
    const editTask = (id) => {
      const li = document.querySelector(`li[data-id="${id}"]`);
      const task = tasks.find(t => t.id === id);
  
      const input = document.createElement("input");
      input.type = "text";
      input.value = task.text;
      input.required = true;
      input.addEventListener("blur", () => {
        const newText = input.value.trim();
        if (newText) {
          tasks = tasks.map(t => t.id === id ? { ...t, text: newText, updated: new Date() } : t);
          renderTasks();
        }
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") input.blur();
      });
  
      li.replaceChild(input, li.querySelector("span"));
      input.focus();
    };
  
    taskForm.onsubmit = (e) => {
      e.preventDefault();
      const text = taskInput.value.trim();
      if (text) {
        addTask(text);
        taskInput.value = "";
      }
    };
  
    sortButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.sort;
        if (type === "created") tasks.sort((a, b) => new Date(a.created) - new Date(b.created));
        if (type === "updated") tasks.sort((a, b) => new Date(a.updated) - new Date(b.updated));
        if (type === "status") tasks.sort((a, b) => a.done - b.done);
        renderTasks();
      });
    });
  
    renderTasks();
  });
  