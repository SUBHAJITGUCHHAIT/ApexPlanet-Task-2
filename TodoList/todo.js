 function addTodo() {
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    if (input.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input.value;

      // Create a delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function () {
        list.removeChild(li);
      };

      // Add delete button to the list item
      li.appendChild(deleteBtn);
      list.appendChild(li);

      input.value = "";
    }
  }