const chats = {
    "User 1": ["Hello, this is User 1's chat!"],
    "User 2": ["Hi, User 2 here!"]
};

let currentChat = "User 1";
let tempChats = { "User 1": [], "User 2": [] }; // Store dynamic messages per user

function switchChat(chatName) {
    currentChat = chatName;
    document.getElementById("chat-title").innerText = chatName;
    renderMessages();
}

function renderMessages() {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";
    
    // Ensure hardcoded messages persist
    if (chats[currentChat]) {
        chats[currentChat].forEach(msg => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "received");
            messageDiv.innerText = msg;
            chatMessages.appendChild(messageDiv);
        });
    }
    
    // Render dynamic messages
    if (tempChats[currentChat]) {
        tempChats[currentChat].forEach(msg => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "sent");
            messageDiv.innerText = msg;
            chatMessages.appendChild(messageDiv);
        });
    }
}

function sendMessage(event) {
    if (event.key === "Enter") {
        const inputField = document.getElementById("message-input");
        const messageText = inputField.value.trim();
        
        if (messageText !== "") {
            tempChats[currentChat].push(messageText); // Store message dynamically
            renderMessages();
            inputField.value = "";
        }
    }
}

// Initialize the first chat
document.addEventListener("DOMContentLoaded", () => {
    renderMessages();
});
