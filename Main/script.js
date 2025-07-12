// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorDiv = document.getElementById("form-error");
  let errors = [];

  if (name === "") errors.push("Name is required.");
  if (email === "") {
    errors.push("Email is required.");
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Invalid email format.");
  }
  if (message === "") errors.push("Message is required.");

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    errorDiv.innerHTML = "";
    alert("Message submitted successfully!");
    this.reset();
  }
});

// To-Do List Functionality
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// Optional: Add task with Enter key
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTaskBtn.click();
});
