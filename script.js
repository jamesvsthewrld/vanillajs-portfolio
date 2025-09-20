document.addEventListener('DOMContentLoaded', () => {
    const subtitles = [
        "talks to his code.",
        "loves working out.",
        "forgets to sleep.",
        "thinks he’s funny.",
        "designs with intent.",
        "laughs too loud.",
        "doesn't mind.",
        "forgets what day it is.",
        "debug codes at 3 a.m"
    ];

    const subtitleElement = document.querySelector('.name-subtitle');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % subtitles.length;
        subtitleElement.textContent = subtitles[index];
    }, 3000);
});