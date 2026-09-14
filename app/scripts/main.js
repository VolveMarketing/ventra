// =========================================
// VENTRA - MAIN SCRIPTS
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Sticky & Scroll Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // 3. Scroll Reveal Animation (Fade Up)
    const fadeElements = document.querySelectorAll('.anim-fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 4. WhatsApp Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const challenge = document.getElementById('challenge').value;
            
            // Get selected profile
            let profile = '';
            const profileOptions = document.getElementsByName('profile');
            for (let i = 0; i < profileOptions.length; i++) {
                if (profileOptions[i].checked) {
                    profile = profileOptions[i].value;
                    break;
                }
            }

            // Format message
            const message = `Olá Ventra! Meu nome é ${name} (${email}).%0A%0A*Meu perfil:* ${profile}%0A*Meu desafio hoje:* ${challenge}%0A%0AGostaria de conversar sobre um projeto.`;
            
            // WhatsApp Number (Replace with real number)
            const phone = "5511999999999"; 
            
            // Redirect
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        });
    }

    // 5. Interactive Tabs Switcher (Para servicos.html - Modelo Bounce)
    const tabButtons = document.querySelectorAll('.tab-card-btn[data-tab]');
    const tabPanels = document.querySelectorAll('.tab-content-panel');

    function activateTab(targetTab) {
        if (!targetTab) return;
        
        tabButtons.forEach(b => {
            if (b.getAttribute('data-tab') === targetTab) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        tabPanels.forEach(panel => {
            if (panel.id === `tab-panel-${targetTab}`) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }

    if (tabButtons.length > 0 && tabPanels.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                activateTab(targetTab);

                // Scroll suave até o topo do conteúdo da aba ativa
                const activePanel = document.getElementById(`tab-panel-${targetTab}`);
                if (activePanel) {
                    const headerOffset = 90;
                    const elementPosition = activePanel.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Verifica se há hash na URL ao carregar a página (ex: #tab-1, #tab-2, #tab-3)
        const currentHash = window.location.hash;
        if (currentHash && currentHash.startsWith('#tab-')) {
            const tabNum = currentHash.replace('#tab-', '');
            activateTab(tabNum);
            setTimeout(() => {
                const activePanel = document.getElementById(`tab-panel-${tabNum}`);
                if (activePanel) {
                    const headerOffset = 90;
                    const elementPosition = activePanel.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 200);
        }
    }
});
