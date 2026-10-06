/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    const intro = document.getElementById("intro");
    const letterSection = document.getElementById("letterSection");
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const surpriseButton = document.querySelector(".surprise-btn");

    // Scroll to letter section
    letterSection.scrollIntoView({
        behavior: "smooth"
    });

    // Open envelope
    setTimeout(() => {

        envelope.classList.add("open");

    }, 700);


    // Show letter
    setTimeout(() => {

        letter.classList.add("show");

    }, 1500);


    // Show surprise button
    setTimeout(() => {

        surpriseButton.classList.add("show");

    }, 3000);

}


/* =========================
   FINAL SURPRISE
========================= */

function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "♡",
        "💕",
        "💗",
        "💖"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


/* Create hearts continuously */

setInterval(createHeart, 900);