// Intersection Observer for section animations
document.addEventListener('DOMContentLoaded', function() {
    // Add js-loaded class to enable animations
    document.body.classList.add('js-loaded');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

function toggleFullscreen() {
    const wrapper = document.querySelector('.unity-wrapper');
    const button = document.getElementById('fullscreen-btn');
    
    if (!document.fullscreenElement) {
        wrapper.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
        wrapper.classList.add('fullscreen');
        button.classList.add('fullscreen');
    } else {
        document.exitFullscreen();
        wrapper.classList.remove('fullscreen');
        button.classList.remove('fullscreen');
    }
}

// Event-Listener für Fullscreen-Änderungen
document.addEventListener('fullscreenchange', () => {
    const wrapper = document.querySelector('.unity-wrapper');
    const button = document.getElementById('fullscreen-btn');
    
    if (!document.fullscreenElement) {
        wrapper.classList.remove('fullscreen');
        button.classList.remove('fullscreen');
    }
});

// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Logo click handler for smooth scroll to top
    const logo = document.getElementById('logo');
    logo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const languageToggle = document.getElementById('languageToggle');
    const toggleThumb = document.querySelector('.toggle-thumb');
    let isEnglish = false;  // Start with German

    // Set initial flag to German
    const flagIcon = toggleThumb.querySelector('.flag-icon');
    flagIcon.className = 'flag-icon flag-icon-de';
    languageToggle.classList.add('active');

    // Translations object
    const translations = {
        en: {
            about: 'About',
            history: 'History',
            model: '3D Model',
            gallery: 'Gallery',
            heroTitle: 'Old Hagia Sophia',
            heroSubtitle: '3D Reconstruction and Analysis of Hidden Structures',
            aboutText1: 'We are a small interdisciplinary student team from Furtwangen University (HFU), working within the framework of our project studies. In collaboration with the Byzantine Studies Department at the University of Freiburg, we are developing a digital application that enables the exploration and analysis of archaeological findings beneath the present-day Hagia Sophia.',
            aboutText2: 'Using state-of-the-art 3D reconstruction techniques, we digitally model the excavations to make them accessible for academic research and public education. Our goal is to rediscover archaeological knowledge through technological approaches and to present it vividly and interactively to a broader public.',
            historyText: 'From Byzantine cathedral to Ottoman mosque, explore the rich history of this architectural masterpiece.',
            galleryText: 'Discover the archaeological findings and reconstructions of the Old Hagia Sophia',
            connect: 'Connect',
            legal: 'Legal',
            impressum: 'Impressum',
            privacyPolicy: 'Privacy Policy',
            copyright: '© 2024 Hagia Sophia Project. All rights reserved.',
            // Section headings
            aboutHeading: 'About',
            modelHeading: '3D Experience',
            historyHeading: 'History',
            galleryHeading: 'Gallery',
            impressumHeading: 'Legal Notice',
            tmgInfo: 'Information according to § 5 TMG',
            contact: 'Contact',
            responsible: 'Responsible for content according to § 55 Abs. 2 RStV',
            disclaimer: 'Disclaimer',
            contentLiability: 'Liability for Content',
            contentLiabilityText: 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content.',
            linkLiability: 'Liability for Links',
            linkLiabilityText: 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents.'
        },
        de: {
            about: 'Über uns',
            history: 'Geschichte',
            model: '3D Modell',
            gallery: 'Galerie',
            heroTitle: 'Alte Hagia Sophia',
            heroSubtitle: '3D-Rekonstruktion und Analyse versteckter Strukturen',
            aboutText1: 'Wir sind ein kleines interdisziplinäres Studententeam der Hochschule Furtwangen (HFU), das im Rahmen unserer Projektstudien arbeitet. In Zusammenarbeit mit der Byzantinischen Abteilung der Universität Freiburg entwickeln wir eine digitale Anwendung, die die Erforschung und Analyse archäologischer Funde unter der heutigen Hagia Sophia ermöglicht.',
            aboutText2: 'Mit Hilfe modernster 3D-Rekonstruktionstechniken modellieren wir die Ausgrabungen digital, um sie für die akademische Forschung und öffentliche Bildung zugänglich zu machen. Unser Ziel ist es, archäologisches Wissen durch technologische Ansätze neu zu erschließen und einer breiteren Öffentlichkeit anschaulich und interaktiv zu vermitteln.',
            historyText: 'Von der byzantinischen Kathedrale zur osmanischen Moschee - erkunden Sie die reiche Geschichte dieses architektonischen Meisterwerks.',
            galleryText: 'Entdecken Sie die archäologischen Funde und Rekonstruktionen der Alten Hagia Sophia',
            connect: 'Kontakt',
            legal: 'Rechtliches',
            impressum: 'Impressum',
            privacyPolicy: 'Datenschutz',
            copyright: '© 2024 Hagia Sophia Projekt. Alle Rechte vorbehalten.',
            // Section headings
            aboutHeading: 'Über uns',
            modelHeading: '3D Erlebnis',
            historyHeading: 'Geschichte',
            galleryHeading: 'Galerie',
            impressumHeading: 'Impressum',
            tmgInfo: 'Angaben gemäß § 5 TMG',
            contact: 'Kontakt',
            responsible: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
            disclaimer: 'Haftungsausschluss',
            contentLiability: 'Haftung für Inhalte',
            contentLiabilityText: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.',
            linkLiability: 'Haftung für Links',
            linkLiabilityText: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.',
            copyright: 'Urheberrecht',
            copyrightText: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
        }
    };

    // Function to update text content
    function updateLanguage(lang) {
        try {
            // Navigation links
            const navElements = {
                about: document.querySelector('a[href="#about"]'),
                history: document.querySelector('a[href="#history"]'),
                model: document.querySelector('a[href="#model"]'),
                gallery: document.querySelector('a[href="#gallery"]')
            };

            // Update navigation if elements exist
            Object.entries(navElements).forEach(([key, element]) => {
                if (element) {
                    element.textContent = translations[lang][key];
                }
            });

            // Hero section
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroTitle) heroTitle.textContent = translations[lang].heroTitle;
            if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;

            // Section headings
            const headings = {
                about: document.querySelector('#about h2'),
                model: document.querySelector('#model h2'),
                history: document.querySelector('#history h2'),
                gallery: document.querySelector('#gallery h2')
            };

            // Update headings if they exist
            Object.entries(headings).forEach(([key, element]) => {
                if (element) {
                    element.textContent = translations[lang][`${key}Heading`];
                }
            });

            // Section texts
            const aboutTexts = document.querySelectorAll('#about .section-text');
            if (aboutTexts.length >= 2) {
                aboutTexts[0].textContent = translations[lang].aboutText1;
                aboutTexts[1].textContent = translations[lang].aboutText2;
            }

            const historyText = document.querySelector('#history .section-text');
            if (historyText) {
                historyText.textContent = translations[lang].historyText;
            }

            // Gallery text
            const galleryText = document.querySelector('#gallery .section-text');
            if (galleryText) {
                galleryText.textContent = translations[lang].galleryText;
            }

            // Footer
            const footerElements = {
                connect: document.querySelector('.footer-section h3:first-child'),
                legal: document.querySelector('.footer-section h3:last-child'),
                impressum: document.querySelector('.footer-link:first-child'),
                privacyPolicy: document.querySelector('.footer-link:last-child'),
                copyright: document.querySelector('.footer-bottom p')
            };

            // Update footer if elements exist
            Object.entries(footerElements).forEach(([key, element]) => {
                if (element) {
                    element.textContent = translations[lang][key];
                }
            });
        } catch (error) {
            console.error('Error updating language:', error);
        }
    }

    // Toggle language
    languageToggle.addEventListener('click', function() {
        isEnglish = !isEnglish;
        const toggleThumb = document.querySelector('.toggle-thumb');
        const flagIcon = toggleThumb.querySelector('.flag-icon');
        
        // Toggle active class for styling
        languageToggle.classList.toggle('active');
        
        // Update flag
        if (isEnglish) {
            flagIcon.className = 'flag-icon flag-icon-gb';
        } else {
            flagIcon.className = 'flag-icon flag-icon-de';
        }
        
        // Toggle content visibility
        const germanContent = document.querySelectorAll('.content-de');
        const englishContent = document.querySelectorAll('.content-en');
        
        germanContent.forEach(content => {
            content.style.display = isEnglish ? 'none' : 'block';
        });
        
        englishContent.forEach(content => {
            content.style.display = isEnglish ? 'block' : 'none';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                const navLinks = document.getElementById('nav-links');
                const navToggle = document.getElementById('nav-toggle');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navToggle.classList.remove('active');
                }

                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Gallery Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentImageIndex = 0;
    let images = [];

    // Initialize gallery
    function initGallery() {
        images = Array.from(galleryItems).map(item => ({
            src: item.getAttribute('data-image'),
            title: item.getAttribute('data-title'),
            description: item.querySelector('.gallery-info p').textContent
        }));

        // Add click event to each gallery item
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        });
    }

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        const image = images[index];
        
        lightboxImage.src = image.src;
        lightboxImage.alt = image.title;
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
        
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Update navigation buttons
        updateNavigationButtons();
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Navigate to previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        const image = images[currentImageIndex];
        
        lightboxImage.src = image.src;
        lightboxImage.alt = image.title;
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
        
        updateNavigationButtons();
    }

    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const image = images[currentImageIndex];
        
        lightboxImage.src = image.src;
        lightboxImage.alt = image.title;
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
        
        updateNavigationButtons();
    }

    // Update navigation button visibility
    function updateNavigationButtons() {
        if (images.length <= 1) {
            lightboxPrev.style.display = 'none';
            lightboxNext.style.display = 'none';
        } else {
            lightboxPrev.style.display = 'block';
            lightboxNext.style.display = 'block';
        }
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('show')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                nextImage();
            } else {
                // Swipe right - previous image
                prevImage();
            }
        }
    }

    // Initialize gallery when DOM is loaded
    initGallery();
}); 

// Responsive handling for Unity iframe
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const unityWrapper = document.querySelector('.unity-wrapper');
        if (unityWrapper) {
            const width = unityWrapper.offsetWidth;
            const height = width * (9/16); // 16:9 aspect ratio
            unityWrapper.style.height = `${height}px`;
        }
    }, 250);
});

// Touch event handling for gallery
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('touchstart', function(e) {
        this.classList.add('touch-active');
    }, { passive: true });

    item.addEventListener('touchend', function(e) {
        this.classList.remove('touch-active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            const navLinks = document.getElementById('nav-links');
            const navToggle = document.getElementById('nav-toggle');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }

            // Smooth scroll to target
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for lazy loading
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.tagName.toLowerCase() === 'img') {
                entry.target.src = entry.target.dataset.src;
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.add('visible');
            }
        }
    });
}, observerOptions);

// Observe all sections and images
document.querySelectorAll('.section, img[data-src]').forEach(el => {
    observer.observe(el);
});

// Prevent zoom on double tap for touch devices
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false }); 