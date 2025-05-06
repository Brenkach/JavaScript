// Функція для дозволу переміщення елементів
function allowDrop(event) {
    event.preventDefault();
    event.target.classList.add('drag-over');
  }
  
  // Функція для скидання елемента в область
  function drop(event) {
    event.preventDefault();
    event.target.classList.remove('drag-over');
    
    const taskId = event.dataTransfer.getData("taskId");
    const task = document.getElementById(taskId);
    
    // Додаємо елемент до нової колонки
    if (event.target.classList.contains("kanban-column")) {
      event.target.appendChild(task);
    }
  }
  
  // Функція для початку перетягування елемента
  function drag(event) {
    event.dataTransfer.setData("taskId", event.target.id);
  }
  