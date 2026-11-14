
const words = [
    "Virtual Assistant",
    "Web Developer",
    
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const typingElement = document.querySelector(".typing-text");

    const currentWord = words[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingElement.textContent = currentWord.substring(0, letterIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && letterIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && letterIndex === 0) {
        deleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
