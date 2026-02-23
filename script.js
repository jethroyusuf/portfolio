// ── Hamburger Menu ──────────────────────────────────────────
const hamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(function (n) {
    n.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ── Carousel ─────────────────────────────────────────────────
(function () {
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.carousel-card'));
    const total = cards.length;
    let current = 0;
    let isAnimating = false;

    // Build dots
    cards.forEach(function (_, i) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', function () {
            goTo(i);
        });
        dotsContainer.appendChild(dot);
    });

    function getDots() {
        return Array.from(dotsContainer.querySelectorAll('.carousel-dot'));
    }

    function getPos(cardIndex) {
        // Relative position to current, wrapping
        let diff = cardIndex - current;
        // Wrap around for shortest path
        if (diff > Math.floor(total / 2)) diff -= total;
        if (diff < -Math.floor(total / 2)) diff += total;
        // Clamp to ±2, anything beyond is hidden
        if (diff < -2 || diff > 2) return 'hidden';
        return String(diff);
    }

    function render() {
        cards.forEach(function (card, i) {
            card.setAttribute('data-pos', getPos(i));
        });
        getDots().forEach(function (dot, i) {
            dot.classList.toggle('active', i === current);
        });
    }

    function goTo(index) {
        if (isAnimating) return;
        isAnimating = true;
        current = ((index % total) + total) % total;
        render();
        setTimeout(function () { isAnimating = false; }, 650);
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
    });

    // Touch / swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) {
            dx < 0 ? next() : prev();
        }
    });

    // Click side cards to navigate
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const pos = parseInt(card.getAttribute('data-pos'));
            if (pos === -1 || pos === -2) prev();
            else if (pos === 1 || pos === 2) next();
        });
    });

    // Initial render
    render();
})();