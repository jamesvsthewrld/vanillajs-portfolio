document.addEventListener('DOMContentLoaded', () => {
    // Rotating subtitle
    const subtitles = [
        "talks to his code.",
        "loves working out.",
        "forgets to sleep.",
        "thinks he’s funny.",
        "laughs too loud.",
    ];
    const subtitleElement = document.querySelector('.name-subtitle');
    if (subtitleElement) {
        let index = 0;
        setInterval(() => {
            index = (index + 1) % subtitles.length;
            subtitleElement.textContent = subtitles[index];
        }, 3000);
    }

    // Navbar hide on scroll down, show on scroll up/top
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0 && window.scrollY > lastScrollY) {
                navbar.classList.add('hide');
            } else {
                navbar.classList.remove('hide');
            }
            lastScrollY = window.scrollY;
        });
    }

    // Image preview overlay
    const preview = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');
    if (preview && previewImg) {
        document.querySelectorAll('.graphics-card img').forEach((img) => {
            img.addEventListener('click', () => {
                previewImg.src = img.src;
                preview.style.display = 'flex';
            });
        });
        preview.addEventListener('click', () => {
            preview.style.display = 'none';
            previewImg.src = '';
        });
    }

    // Slower custom smooth scroll to top (~1200ms)
    function smoothScrollToTop(duration = 1200) {
        const start = window.scrollY || window.pageYOffset;
        const startTime = performance.now();
        const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const y = Math.round(start * (1 - ease(progress)));
            window.scrollTo(0, y);
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // Footer back-to-top action
    const backToTop = document.querySelector('.footer-right');
    if (backToTop) {
        backToTop.addEventListener('click', (event) => {
            event.preventDefault();
            smoothScrollToTop(1200);
        });
    }
});


