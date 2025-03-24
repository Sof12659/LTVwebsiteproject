// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Contact form functionality
    const openFormBtn = document.getElementById('openFormBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const contactForm = document.getElementById('contactForm');

    if (openFormBtn && closeFormBtn && contactForm) {
        openFormBtn.addEventListener('click', function() {
            contactForm.style.display = 'flex';
        });

        closeFormBtn.addEventListener('click', function() {
            contactForm.style.display = 'none';
        });

        document.querySelector('.form-container').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            alert(`Thanks, ${name}! We'll contact you soon at ${email}.`);
            contactForm.style.display = 'none';

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
        });
    }

    // Smooth scroll behavior
    const scrollLink = document.querySelector('.scroll-down a');
    scrollLink?.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    const audio = document.getElementById('backgroundMusic');

    const unmuteAudio = () => {
        audio.muted = false;
        audio.play().then(() => {
            console.log('Audio started after user interaction.');
        }).catch((error) => {
            console.error('Playback prevented:', error);
        });

        document.removeEventListener('click', unmuteAudio);
        document.removeEventListener('scroll', unmuteAudio);
    };

    document.addEventListener('click', unmuteAudio, { once: true });
    document.addEventListener('scroll', unmuteAudio, { once: true });
});
