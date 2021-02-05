let sendMessage = document.getElementById('sendMessage');
let messageBox = document.getElementById('messageBox');
let messagesContainer = document.getElementById('messagesContainer');
let evenCount = 0;
function newText() {
	evenCount++;
	createMessageCard('AnotherDiscordUser', messageBox.value);
	sendNewText();
}
let messages = [
	{
		name: 'Lily',
		message: 'Hi, Guys whats up the server is dry today',
	},
	{
		name: 'Izel',
		message: 'Chicken LIcken is a great book tbh',
	},
	{
		name: 'Lily',
		message: 'Hi, Guys whats up the server is dry today',
	},
	{
		name: 'Izel',
		message: 'Chicken LIcken is a great book tbh',
	},
];
let messageCount = 0;
function sendNewText() {
	evenCount++;
	createMessageCard(
		messages[messageCount].name,
		messages[messageCount].message
	);
	messageCount++;
}

function createMessageCard(title, message) {
	let div = document.createElement('div');
	let h4 = document.createElement('h4');
	let p = document.createElement('p');

	div.classList.add('message');
	h4.classList.add('message-sender');
	if (evenCount % 2 === 0) {
		h4.classList.add('right');
		p.classList.add('right');
	}

	h4.innerText = title;
	p.innerText = message;

	div.appendChild(h4);
	div.appendChild(p);

	messagesContainer.appendChild(div);
}
