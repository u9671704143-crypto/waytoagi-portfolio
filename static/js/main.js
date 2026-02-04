/**
 * main.js - 主逻辑文件
 * 包含：语言切换、滚动动效、数字计数动画、项目模态框等
 */

// Current language
let currentLang = 'zh';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initScrollAnimations();
    initProjectCards();
    initCounterAnimations();
    initSkillBars();
});

/**
 * Initialize language system
 */
function initLanguage() {
    const langButtons = document.querySelectorAll('.lang-switcher button');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                currentLang = lang;
                updateLanguage();

                // Update active state
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    // Initial render
    updateLanguage();
}

/**
 * Update all text content based on current language
 */
function updateLanguage() {
    const data = i18n[currentLang];

    // Navigation
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.dataset.i18n.split('.');
        let value = data;
        for (const key of keys) {
            value = value[key];
        }
        if (value) {
            if (el.dataset.i18nAttr) {
                el.setAttribute(el.dataset.i18nAttr, value);
            } else {
                el.innerHTML = value;
            }
        }
    });

    // Update navigation links
    updateNavLinks(data.nav);

    // Update hero section
    updateHeroSection(data.hero);

    // Update about section
    updateAboutSection(data.about);

    // Update timeline
    updateTimeline(data.timeline);

    // Update projects
    updateProjects(data.projects);

    // Update skills
    updateSkills(data.skills);

    // Update contact
    updateContact(data.contact);

    // Update footer
    updateFooter(data.footer);
}

function updateNavLinks(nav) {
    document.querySelector('[href="#about"]').textContent = nav.about;
    document.querySelector('[href="#timeline"]').textContent = nav.experience;
    document.querySelector('[href="#projects"]').textContent = nav.projects;
    document.querySelector('[href="#skills"]').textContent = nav.skills;
    document.querySelector('[href="#contact"]').textContent = nav.contact;
}

function updateHeroSection(hero) {
    document.querySelector('.hero-name').textContent = hero.name;
    document.querySelector('.hero-name-en').textContent = hero.nameEn;
    document.querySelector('.hero-title').textContent = hero.title;
    document.querySelector('.hero-tagline').innerHTML = hero.tagline + '<span class="typing-cursor"></span>';
    document.querySelector('.btn-projects').textContent = hero.cta.projects;
    document.querySelector('.btn-contact').textContent = hero.cta.contact;
}

function updateAboutSection(about) {
    document.querySelector('#about .section-header h2').innerHTML = '<span></span>' + about.title;
    document.querySelector('#about .section-header p').textContent = about.subtitle;

    const descContainer = document.querySelector('.about-description');
    descContainer.innerHTML = about.description.map(p => `<p>${p}</p>`).join('');

    const tagsContainer = document.querySelector('.about-tags');
    tagsContainer.innerHTML = about.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Stats
    const stats = document.querySelectorAll('.stat-item');
    const statsData = Object.values(about.stats);
    stats.forEach((stat, i) => {
        if (statsData[i]) {
            stat.querySelector('.stat-number').textContent = statsData[i].value;
            stat.querySelector('.stat-label').textContent = statsData[i].label;
        }
    });
}

function updateTimeline(timeline) {
    document.querySelector('#timeline .section-header h2').innerHTML = '<span></span>' + timeline.title;
    document.querySelector('#timeline .section-header p').textContent = timeline.subtitle;

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, i) => {
        if (timeline.items[i]) {
            item.querySelector('.timeline-date').textContent = timeline.items[i].date;
            item.querySelector('.timeline-role').textContent = timeline.items[i].role;
            item.querySelector('.timeline-company').textContent = timeline.items[i].company;
            item.querySelector('.timeline-desc').textContent = timeline.items[i].description;
        }
    });
}

function updateProjects(projects) {
    document.querySelector('#projects .section-header h2').innerHTML = '<span></span>' + projects.title;
    document.querySelector('#projects .section-header p').textContent = projects.subtitle;

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
        if (projects.items[i]) {
            const project = projects.items[i];
            card.querySelector('.project-icon').innerHTML = `<span class="material-icons-round">${project.icon}</span>`;
            card.querySelector('h3').textContent = project.title;
            card.querySelector('.project-brief').textContent = project.brief;

            const metrics = card.querySelectorAll('.metric');
            project.metrics.forEach((m, j) => {
                if (metrics[j]) {
                    metrics[j].querySelector('.metric-value').textContent = m.value;
                    metrics[j].querySelector('.metric-label').textContent = m.label;
                }
            });

            // Store project data for modal
            card.dataset.projectIndex = i;
        }
    });
}

function updateSkills(skills) {
    document.querySelector('#skills .section-header h2').innerHTML = '<span></span>' + skills.title;
    document.querySelector('#skills .section-header p').textContent = skills.subtitle;

    const categories = document.querySelectorAll('.skill-category');
    categories.forEach((cat, i) => {
        if (skills.categories[i]) {
            const data = skills.categories[i];
            cat.querySelector('h3').innerHTML = `<span class="icon material-icons-round">${data.icon}</span> ${data.name}`;

            const items = cat.querySelectorAll('.skill-item');
            items.forEach((item, j) => {
                if (data.items[j]) {
                    item.querySelector('.skill-name').textContent = data.items[j].name;
                    item.querySelector('.skill-percent').textContent = data.items[j].level + '%';
                    item.querySelector('.skill-progress').style.setProperty('--target-width', data.items[j].level + '%');
                }
            });
        }
    });
}

function updateContact(contact) {
    document.querySelector('#contact .section-header h2').innerHTML = '<span></span>' + contact.title;
    document.querySelector('#contact .section-header p').textContent = contact.subtitle;
    document.querySelector('.contact-info h3').textContent = contact.info.title;

    const items = document.querySelectorAll('.contact-item');
    contact.info.items.forEach((item, i) => {
        if (items[i]) {
            items[i].querySelector('.contact-icon').innerHTML = `<span class="material-icons-round">${item.icon}</span>`;
            items[i].querySelector('.contact-label').textContent = item.label;
            items[i].querySelector('.contact-value').textContent = item.value;
        }
    });

    document.querySelector('.qr-section h3').textContent = contact.wechat.title;
    document.querySelector('.qr-placeholder').textContent = contact.wechat.placeholder;
}

function updateFooter(footer) {
    document.querySelector('.footer-text').textContent = footer.copyright;
}

/**
 * Navigation functionality
 */
function initNavigation() {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu
                navLinks.classList.remove('active');
            }
        });
    });
}

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger counter animation if applicable
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.fade-in-up, .timeline-item, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Counter animation for statistics
 */
function animateCounter(element) {
    if (!element || element.dataset.animated) return;
    element.dataset.animated = 'true';

    const text = element.textContent;
    const hasPlus = text.includes('+');
    const hasWan = text.includes('万');
    const numericPart = parseFloat(text.replace(/[^0-9.]/g, ''));

    if (isNaN(numericPart)) return;

    const duration = 2000;
    const start = performance.now();

    const animate = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = numericPart * easeOutQuart;

        let displayValue;
        if (hasWan) {
            displayValue = Math.round(current) + '万';
        } else if (Number.isInteger(numericPart)) {
            displayValue = Math.round(current).toString();
        } else {
            displayValue = current.toFixed(1);
        }

        if (hasPlus) displayValue += '+';
        element.textContent = displayValue;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
}

/**
 * Initialize counter animations
 */
function initCounterAnimations() {
    // Will be triggered by scroll observer
}

/**
 * Initialize skill bar animations
 */
function initSkillBars() {
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.getPropertyValue('--target-width') || '0%';
                progressBar.style.width = targetWidth;
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-progress').forEach(bar => {
        observer.observe(bar);
    });
}

/**
 * Project cards and modal functionality
 */
function initProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    const modal = document.querySelector('.project-modal');
    const modalClose = document.querySelector('.modal-close');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.projectIndex);
            openProjectModal(index);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

function openProjectModal(index) {
    const data = i18n[currentLang];
    const project = data.projects.items[index];
    const modalData = data.modal;

    if (!project) return;

    const modal = document.querySelector('.project-modal');

    // Populate modal content
    document.querySelector('.modal-title').textContent = project.title;
    document.querySelector('.modal-date').textContent = project.date;
    document.querySelector('.modal-overview-title').textContent = modalData.overview;
    document.querySelector('.modal-overview-text').textContent = project.overview;
    document.querySelector('.modal-responsibilities-title').textContent = modalData.responsibilities;

    const respList = document.querySelector('.modal-responsibilities-list');
    respList.innerHTML = project.responsibilities.map(r => `<li>${r}</li>`).join('');

    document.querySelector('.modal-results-title').textContent = modalData.results;

    const metricsContainer = document.querySelector('.modal-metrics');
    metricsContainer.innerHTML = project.metrics.map(m => `
    <div class="modal-metric">
      <span class="modal-metric-value">${m.value}</span>
      <span class="modal-metric-label">${m.label}</span>
    </div>
  `).join('');

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
