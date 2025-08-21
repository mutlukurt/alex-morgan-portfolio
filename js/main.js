// Alex Morgan Portfolio - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    console.log('Alex Morgan Portfolio loaded successfully!');
    
    // Enhanced smooth scrolling with easing
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            const targetPosition = element.offsetTop - 100;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;
            
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            
            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }
            
            requestAnimationFrame(animation);
        }
    };

    // Add click event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Enhanced hover effects for service cards with 3D transform
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05) rotateY(5deg)';
            this.style.boxShadow = '0 20px 40px rgba(108, 92, 231, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
        });
    });

    // Add click event to download CV button
    const downloadCVBtn = document.querySelector('.download-cv');
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
                alert('CV download started! (This is a demo)');
            }, 600);
        });
    }

    // Add click event to portfolio button
    const portfolioBtn = document.querySelector('.btn-primary');
    if (portfolioBtn) {
        portfolioBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
                alert('Portfolio section would open here! (This is a demo)');
            }, 600);
        });
    }

    // Add click event to hire me button
    const hireMeBtn = document.querySelector('.btn-secondary');
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
                alert('Contact form would open here! (This is a demo)');
            }, 600);
        });
    }

    // Enhanced scroll animations with staggered timing
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe education and work items
    const items = document.querySelectorAll('.education-item, .work-item');
    items.forEach(item => {
        observer.observe(item);
    });

    // Enhanced typing effect with cursor
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.innerHTML;
        nameElement.innerHTML = '';
        
        // Add cursor element
        const cursor = document.createElement('span');
        cursor.classList.add('typing-cursor');
        cursor.innerHTML = '|';
        nameElement.appendChild(cursor);
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                const charSpan = document.createElement('span');
                charSpan.innerHTML = originalText.charAt(i);
                nameElement.insertBefore(charSpan, cursor);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    cursor.style.opacity = '0';
                }, 1000);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 800);
    }

    // Enhanced parallax effect with smooth easing
    const floatingElements = document.querySelectorAll('.floating-element');
    let ticking = false;
    
    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        floatingElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            const rotation = scrolled * 0.05;
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
        });
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Enhanced skill tag hover effects with magnetic attraction
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) translateY(-3px)';
            this.style.background = 'rgba(255,255,255,0.4)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.background = 'rgba(255,255,255,0.2)';
            this.style.boxShadow = 'none';
        });
    });

    // Enhanced service card interactions
    const learnMoreLinks = document.querySelectorAll('.learn-more');
    learnMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceTitle = this.parentElement.querySelector('.service-title').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                alert(`Learn more about ${serviceTitle}! (This is a demo)`);
            }, 150);
        });
    });

    // Enhanced view all services button
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                alert('All services would be displayed here! (This is a demo)');
            }, 150);
        });
    }

    // Enhanced stats counter animation with easing
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element, target) => {
        let current = 0;
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            current = target * easeOutQuart;
            
            element.textContent = Math.floor(current) + '+';
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    };

    // Observe stats section for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach((stat, index) => {
                    const target = parseInt(stat.textContent);
                    setTimeout(() => {
                        animateCounter(stat, target);
                    }, index * 200);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Enhanced mobile menu functionality
    const addMobileMenu = () => {
        if (window.innerWidth <= 768) {
            // Add mobile-specific animations
            const mobileElements = document.querySelectorAll('.service-card, .education-item, .work-item');
            mobileElements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.1}s`;
            });
        }
    };

    // Call mobile menu function on load and resize
    addMobileMenu();
    window.addEventListener('resize', addMobileMenu);

    // Enhanced loading animation with staggered elements
    const animateElements = () => {
        const elements = document.querySelectorAll('.header, .skills, .services-section, .about-section, .education-section');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };

    // Initialize animations after a short delay
    setTimeout(animateElements, 100);

    // Add scroll-triggered animations for better performance
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[style*="opacity: 0"]');
    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
});

// Add CSS for ripple effect and typing cursor
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .typing-cursor {
        animation: blink-cursor 1s infinite;
        color: #6c5ce7;
    }
    
    @keyframes blink-cursor {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .btn, .download-cv {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
