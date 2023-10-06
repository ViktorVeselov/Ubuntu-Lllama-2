async function getAnswer() {
    const question = document.getElementById('question').value;
    const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({question: question})
    });
    const data = await response.json();
    document.getElementById('score').innerText = data.score;
}

// Swirl cursor effect
const cursor = document.getElementById("cursor");

document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});  

// Auto-expand textarea
const textarea = document.getElementById("question");
textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
});

// Mockup of sending a message
textarea.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    const chatMessages = document.querySelector(".chat-messages");
    const newMessage = document.createElement("div");
    newMessage.textContent = textarea.value;
    newMessage.className = "chat-message";
    chatMessages.appendChild(newMessage);
    textarea.value = "";
    textarea.style.height = "auto";
  }
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});