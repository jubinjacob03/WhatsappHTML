const users = {
    "User 1": {
        name: "Elon Musk",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Elon_Musk_Royal_Society_crop.jpg" 
    },
    "User 2": {
        name: "Mark Zuckerberg",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg/800px-Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
    }
};

const chats = {
    "User 1": ["Hello, this is Elon Musk"],
    "User 2": ["Hi, this is Mark Zuckerberg"]
};

let currentChat = "User 1";
let tempChats = { "User 1": [], "User 2": [] }; 

function switchChat(userName) {
    currentChat = userName;
    const chatTitle = document.getElementById("chat-title");
    const chatAvatar = document.querySelector(".chat-header .chat-avatar");

    if (users[userName]) {
        chatTitle.textContent = users[userName].name;
        chatAvatar.style.backgroundImage = `url(${users[userName].avatar})`;
    }
    renderMessages();
}

function renderMessages() {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";
    
    if (chats[currentChat]) {
        chats[currentChat].forEach(msg => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "received");
            messageDiv.innerText = msg;
            chatMessages.appendChild(messageDiv);
        });
    }
    
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
            tempChats[currentChat].push(messageText);
            renderMessages();
            inputField.value = "";
        }
    }
}

document.querySelectorAll(".chat-item").forEach(chat => {
    const chatName = chat.querySelector(".chat-info h4").textContent;
    const avatarDiv = chat.querySelector(".chat-avatar");

    if (users[chatName]) {
        avatarDiv.style.backgroundImage = `url(${users[chatName].avatar})`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderMessages();
});
