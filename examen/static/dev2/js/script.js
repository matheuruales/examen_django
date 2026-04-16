// Script interactivo para la página de CV de Dev2

// Animación de entrada suave para los cards
document.addEventListener('DOMContentLoaded', function() {
    animateCardsOnScroll();
    addInteractiveEffects();
    initializeSkillTags();
});

// Función para animar cards cuando llegan al viewport
function animateCardsOnScroll() {
    const cards = document.querySelectorAll('.cv-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                entry.target.style.opacity = '0';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));
}

// Agregar efectos interactivos a elementos
function addInteractiveEffects() {
    const sections = document.querySelectorAll('.cv-section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Efecto en la tarjeta de encabezado
    const header = document.querySelector('.cv-header');
    if (header) {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}

// Inicializar interactividad en tags de habilidades
function initializeSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(1.15) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });

        tag.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.3))';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.2))';
        });
    });
}

// Agregar smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para copiar texto (opcional)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showMessage('Copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// Mostrar mensajes temporales
function showMessage(message) {
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #8b5cf6;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => messageEl.remove(), 300);
    }, 2000);
}

// Agregar estilo para animaciones de mensaje
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .cv-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .cv-section {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(style);

// Log de inicialización
console.log('✨ CV de Dev 2 cargado correctamente');
