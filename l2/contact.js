document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Ici, vous pourriez ajouter une logique pour envoyer les données à un serveur
            // Pour cet exemple, nous allons simplement afficher une alerte
            
            alert(`Merci ${name} pour votre message!\nNous vous répondrons dès que possible à l'adresse ${email}.`);
            
            // Réinitialisation du formulaire
            contactForm.reset();
        });
    }
    
    // Animation des éléments de contact
    const contactItems = document.querySelectorAll('.contact-info, .contact-form');
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.8s ease';
    });
    
    const animateContactItems = function() {
        contactItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transitionDelay = `${index * 0.2}s`;
            }
        });
    };
    
    window.addEventListener('scroll', animateContactItems);
    animateContactItems(); // Pour les éléments déjà visibles au chargement
    
    // Animation de la carte
    const map = document.querySelector('.map');
    if (map) {
        map.style.opacity = '0';
        map.style.transition = 'opacity 1s ease';
        
        const mapPosition = map.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        
        if (mapPosition < screenPosition) {
            map.style.opacity = '1';
        }
        
        window.addEventListener('scroll', function() {
            const mapPosition = map.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;
            
            if (mapPosition < screenPosition) {
                map.style.opacity = '1';
            }
        });
    }
});