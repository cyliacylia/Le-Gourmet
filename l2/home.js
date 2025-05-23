document.addEventListener('DOMContentLoaded', function() {
    // Animation des spécialités au scroll
    const specialItems = document.querySelectorAll('.special-item');
    
    const animateOnScroll = function() {
        specialItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial state
    specialItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Pour les éléments déjà visibles au chargement
    
    // Simple testimonial slider
    const testimonials = [
        {
            text: "La meilleure expérience culinaire que j'ai eue cette année. Le service était impeccable et chaque plat était une révélation.",
            name: "Marie Dupont",
            image: "images/client-1.jpg"
        },
        {
            text: "L'ambiance est magnifique et la nourriture est à tomber par terre. Je recommande vivement le risotto aux champignons!",
            name: "Jean Martin",
            image: "images/clients-jean&Martin.jpg"
        },
        {
            text: "Nous avons célébré notre anniversaire de mariage ici et tout était parfait. Merci pour ce moment inoubliable!",
            name: "Sophie et Pierre",
            image: "images/sophie&pierre.jpg"
        }
    ];
    
    let currentTestimonial = 0;
    const testimonialElement = document.querySelector('.testimonial');
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    function showTestimonial(index) {
        const testimonial = testimonials[index];
        testimonialElement.innerHTML = `
            <p>"${testimonial.text}"</p>
            <div class="client">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <span>${testimonial.name}</span>
            </div>
        `;
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Initial display
    if (testimonialSlider) {
        showTestimonial(0);
    }
});