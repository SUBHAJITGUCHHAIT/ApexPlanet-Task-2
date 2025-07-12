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
