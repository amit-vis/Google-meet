const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// function to create a new chat message element
function createMessageElement(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  if (sender === 'bot') {
    messageElement.classList.add('bot-message');
  } else {
    messageElement.classList.add('user-message');
  }
  messageElement.textContent = message;
  return messageElement;
}

// function to handle sending of messages
function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    const messageElement = createMessageElement(message, 'user');
    chatWindow.appendChild(messageElement);
    userInput.value = '';
    receiveMessage();
  }
}

// function to handle receiving of messages
function receiveMessage() {
  const message = 'This is a sample response from the chatbot.';
  const messageElement = createMessageElement(message, 'bot');
  setTimeout(() => {
    chatWindow.appendChild(messageElement);
  }, 1000);
}

// add event listeners to the input field and send button
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
