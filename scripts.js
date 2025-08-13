// Smooth scrolling for navigation links
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('.nav-link');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const href = this.getAttribute('href');
                    const targetId = href.replace('#', '');
                    const target = document.getElementById(targetId);
                    
                    if (target) {
                        // Close mobile menu if open
                        const navMenu = document.querySelector('.nav-menu');
                        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                        
                        if (window.innerWidth <= 768) {
                            navMenu.style.display = 'none';
                            mobileMenuBtn.textContent = '☰';
                        }
                        
                        // Calculate position with header offset
                        const headerHeight = 80;
                        const targetPosition = target.offsetTop - headerHeight;
                        
                        // Smooth scroll
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                    
                    return false;
                });
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'none';
            }
        });

        // WhatsApp contact form function
        function enviarWhatsApp() {
            // Get form values
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validate required fields
            if (!nombre || !telefono || !email || !mensaje) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = `¡Hola MatLim! 👋

🏷️ *Información de contacto:*
• *Nombre:* ${nombre}
• *Teléfono:* ${telefono}
• *Email:* ${email}

💬 *Mensaje:*
${mensaje}

_Enviado desde la página web de MatLim_`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp
            const whatsappURL = `https://wa.me/5219861074347?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
            
            // Clear form after sending
            document.getElementById('contactForm').reset();
            
            // Show success message
            alert('¡Gracias por contactarnos! Se abrirá WhatsApp con tu mensaje.');
        }

        // Make function globally available
        window.enviarWhatsApp = enviarWhatsApp;

        // Mobile menu functionality - Simplified
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navMenu = document.querySelector('.nav-menu');
            let menuOpen = false;
            
            if (mobileMenuBtn && navMenu) {
                mobileMenuBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    menuOpen = !menuOpen;
                    
                    if (menuOpen) {
                        navMenu.style.cssText = `
                            display: flex !important;
                            position: absolute;
                            top: 100%;
                            left: 0;
                            right: 0;
                            background-color: white;
                            flex-direction: column;
                            padding: 1rem;
                            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                            z-index: 1000;
                        `;
                        mobileMenuBtn.textContent = '✕';
                    } else {
                        navMenu.style.display = 'none';
                        mobileMenuBtn.textContent = '☰';
                    }
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(e) {
                    if (menuOpen && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                        navMenu.style.display = 'none';
                        mobileMenuBtn.textContent = '☰';
                        menuOpen = false;
                    }
                });
                
                // Handle window resize
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 768) {
                        navMenu.style.cssText = 'display: flex;';
                        mobileMenuBtn.textContent = '☰';
                        menuOpen = false;
                    } else if (!menuOpen) {
                        navMenu.style.display = 'none';
                    }
                });
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe service cards for animation
        document.querySelectorAll('.service-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Simple scroll function
        function scrollToSection(sectionId) {
            const target = document.getElementById(sectionId);
            if (target) {
                const headerHeight = 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Make scrollToSection available globally
        window.scrollToSection = scrollToSection;
        
        document.addEventListener('DOMContentLoaded', function() {
            // Find all elements containing phone number
            const allElements = document.querySelectorAll('p, span, div');
            allElements.forEach(element => {
                if (element.textContent.includes('999 122 1847') && element.tagName !== 'A') {
                    element.style.cursor = 'pointer';
                    element.style.color = 'var(--primary-blue)';
                    element.style.textDecoration = 'underline';
                    element.addEventListener('click', function() {
                        window.open('tel:+529991221847');
                    });
                }
            });
        });

        // Add floating action button for quick contact
        const floatingBtn = document.createElement('div');
        floatingBtn.innerHTML = '💬';
        floatingBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: var(--accent-orange);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        floatingBtn.addEventListener('click', function() {
            // Create WhatsApp message
            const whatsappMessage = `¡Hola MatLim! 👋

Me interesa conocer más sobre sus productos de limpieza.

_Enviado desde su página web_`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp Web/App
            const whatsappURL = `https://wa.me/5219861074347?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        });
        
        floatingBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 25px rgba(249, 115, 22, 0.6)';
        });
        
        floatingBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(249, 115, 22, 0.4)';
        });
        
        document.body.appendChild(floatingBtn);

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
