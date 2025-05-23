document.addEventListener('DOMContentLoaded', function() {
    // Gestion des onglets du menu
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons et catégories
            tabBtns.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(cat => cat.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Afficher la catégorie correspondante
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Animation des éléments du menu au scroll
    const menuItems = document.querySelectorAll('.menu-item');
    
    const animateMenuItems = function() {
        menuItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
            }
        });
    };
    
    // Initial state
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
    });
    
    // Ajouter l'animation keyframes dynamiquement
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', animateMenuItems);
    animateMenuItems(); // Pour les éléments déjà visibles au chargement
});