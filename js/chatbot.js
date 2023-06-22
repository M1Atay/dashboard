const messageField = document.querySelector(".middle-container");
const messageContainer = document.querySelector(".bg-container");
const InputField = document.querySelector("input");

// Dit is een variabel voor message timeout. Elke keer als een message wordt gestuurd, krijgt de volgende komende message een timeout.
let messageTimeout = false;

// Dit is hoe de messages worden gedisplayed.
function displayMessage(text, response) {
    messageField.innerHTML += `<div class="row flex-row-reverse">
    <div class="col-1 text-white text-center float-end bg-dark w-auto p-3">${text}</div>
    </div>`;

    setTimeout(() => {
    messageField.innerHTML += `<div class="row">
    <div class="col-1 text-white text-center bg-dark w-50 my-5 p-3">${response}</div>
    </div>`
      
    messageTimeout = false;
    scrollToBottom();
    }, 1000);
}

// Dit is waar het algoritme gebeurt. Hier worden er bepaalde dingen geregeld.
function checkMessage(text) {
    let response = "Sorry I couldn't understand your message. Could you please try again? (English only please)";

    const originalText = text;

    // Dit is een regel die maakt de text van jouw message allemaal lowercase.
    text = text.toLowerCase();

    // Als je groet
    if (text.includes("hey") || text.includes("hi") || text.includes("hello")) {
        response = "Hello there! How may I assist you?"
    // Als je vraagt waar de Home page ligt.
    } else if (text.includes("home") ) {
        response = `Here is the link to <a href="/html/home.html" class="text-white">Home</a>`
    // Als je vraagt waar de Chatbot page ligt.    
    } else if (text.includes("chatbot")) {
        response = `You're already here!`
    // Als je vraagt waar de Support page ligt.
    } else if (text.includes("support")) {
        response = `Here is the link to <a href="/html/support.html" class="text-white">Support</a>`
    // Als je vraagt waar de Dashboard page ligt.
    } else if (text.includes("dashboard")) {
        response = `The dashboards are in the <a href="/html/home.html" class="text-white">Home</a> page`
    }
    
    // Als de text leeg is, gebeurt er niks. Zorgt voor geen lege messages.
    else if (text == "") {
        return
    }

    displayMessage(originalText, response);
    messageContainer.scrollTop = messageContainer.scrollHeight;


    setTimeout(() => {
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }, 1000);
}

// Dit function zorgt ervoor dat elke keer een nieuwe message wordt gestuurd, dat het messageContainer helemaal naar beneden scrollt om de message te displayen.
function scrollToBottom() {
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Hier is een addEventListener voor de InputField. Elke keer als je hier op "Enter" drukt, doet hij het volgende:
// 1. Hij stuurt de message met de text afhankelijk van wat je hebt ingevuld in de InputField. 
// 2. Voordat hij de message stuurt, checkt hij met de checkMessage function voor bepaalde dingen.
// 3. Nadat de message is gestuurd, maakt hij het InputField leeg.
InputField.addEventListener("keyup", function(e) {

        if (e.key == "Enter" && messageTimeout == false) {
            messageTimeout = true;
            const text = InputField.value;
            checkMessage(text);
            InputField.value = "";
        }
})