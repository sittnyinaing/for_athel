const messages = [
    "tyy chr loh lrr?",
    "takl ty chr b lrr??",
    "ty chr pyan twyy kyi?",
    "thel thel ka ll.....",
    "1 khr lout pyn sin srr kyi",
    "koko s8 m kg fik ny b...",
    "koko ayan s8 m kg fik ny b...",
    "koko ayan ayan s8 m kg fik ny b...",
    "tw b m may tot bu...",
    "sa tr,s8 soe pyay pr tot nww! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}