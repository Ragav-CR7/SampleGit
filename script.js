// Get references to the chat window and message container
const chatWindow = document.getElementById('chat-window');
const messageContainer = document.getElementById('message-container');
const chatName = document.getElementById('chat-name');
const chatProfilePic = document.getElementById('chat-profile-pic');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Get all contact items
const contactItems = document.querySelectorAll('.contact-item');

// Add click event listener to each contact item
contactItems.forEach(item => {
    item.addEventListener('click', () => {
        
        const contactNameValue = item.getAttribute('data-name');
        const contactImg = item.getAttribute('data-img');
        
        chatName.textContent = contactNameValue;
        chatProfilePic.src = contactImg;

        chatWindow.style.display = 'block';

        messageContainer.innerHTML = '';
    });
});

// Function to send a message
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        // Create a new message bubble
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble');

        // Get the current time
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;

        // Set the message content
        messageBubble.innerHTML = `
            <span class="message-text">${messageText}</span>
            <span class="message-time">${time}</span>
        `;

        // Append the message bubble to the message container
        messageContainer.appendChild(messageBubble);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the message container
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}

// Add event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Add event listener for the Enter key
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {    
        sendMessage();
    }
});