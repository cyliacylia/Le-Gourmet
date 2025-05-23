document.addEventListener('DOMContentLoaded', function() {
    // Animation des sections au scroll
    const sections = document.querySelectorAll('.our-story, .team, .values');
    
    const animateSections = function() {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial state
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease';
    });
    
    window.addEventListener('scroll', animateSections);
    animateSections(); // Pour les sections déjà visibles au chargement
    
    // Animation des membres de l'équipe
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach((member, index) => {
        member.style.transition = `all 0.5s ease ${index * 0.2}s`;
        member.style.opacity = '0';
        member.style.transform = 'scale(0.9)';
        
        const memberPosition = member.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        
        if (memberPosition < screenPosition) {
            member.style.opacity = '1';
            member.style.transform = 'scale(1)';
        }
    });
    
    window.addEventListener('scroll', function() {
        teamMembers.forEach(member => {
            const memberPosition = member.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;
            
            if (memberPosition < screenPosition) {
                member.style.opacity = '1';
                member.style.transform = 'scale(1)';
            }
        });
    });
});