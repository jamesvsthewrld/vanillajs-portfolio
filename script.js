document.addEventListener('DOMContentLoaded', () => {
    const subtitles = [
        "talks to his code.",
        "loves working out.",
        "forgets to sleep.",
        "thinks he’s funny.",
        "laughs too loud.",
    ];

    const subtitleElement = document.querySelector('.name-subtitle');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % subtitles.length;
        subtitleElement.textContent = subtitles[index];
    }, 3000);
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 0 && window.scrollY > lastScrollY) {
            // Any scroll down, even 1px, hides the navbar
            navbar.classList.add('hide');
        } else if (window.scrollY <= 0 || window.scrollY < lastScrollY) {
            // At the very top or scrolling up, show the navbar
            navbar.classList.remove('hide');
        }
        lastScrollY = window.scrollY;
    });
    const preview = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');
    document.querySelectorAll('.graphics-card img').forEach(img => {
        img.addEventListener('click', () => {
            previewImg.src = img.src;
            preview.style.display = 'flex';
        });
    });
    preview.addEventListener('click', () => {
        preview.style.display = 'none';
        previewImg.src = '';
    });
});      


