/* ========================================
   ABDELRAHMAN PORTFOLIO - JAVASCRIPT
   AI Automation & n8n Workflow Expert
   ======================================== */

// ---- Project Data ----
const projectsData = {
    1: {
        title: "Smart Email Classifier with AI",
        image: "projects/gmail labels.png",
        problem: "Incoming emails often get lost in clutter, making it hard to prioritize important messages like client inquiries or urgent ads, leading to delayed responses and missed opportunities.",
        solution: "I developed a real-time automation that triggers on new Gmail messages, uses an AI model to analyze content, and applies labels ('Important' or 'AD') based on conditional logic for quick sorting.",
        results: "Automatically categorized emails with high accuracy, reducing manual review time by 50% and ensuring priority messages are handled promptly.",
        tech: ["n8n", "Gmail Trigger", "AI Chat Model", "IF Node", "Gmail Add Label"]
    },
    2: {
        title: "Automated Personalized Email Campaign Generator",
        image: "projects/Leads.png",
        problem: "Managing a large client list in Excel/CSV files requires manual creation of personalized emails, which is time-intensive, error-prone, and scales poorly for businesses.",
        solution: "I created a workflow that downloads client files from Google Drive, extracts and splits records, loops through each client, generates customized email content with AI, structures the output, and creates Gmail drafts for easy sending.",
        results: "Generated hundreds of personalized email drafts in minutes, improving efficiency and personalization while reducing manual work by 80%.",
        tech: ["n8n", "Google Drive", "Gemini AI", "Structured Output Parser", "Gmail Create Draft", "Loop Over Clients"]
    },
    3: {
        title: "Intelligent FAQ Chatbot with RAG",
        image: "projects/Rag.png",
        problem: "Support teams spend excessive time answering repetitive FAQ questions, resulting in delays, inconsistent responses, and higher operational costs for businesses.",
        solution: "I built a RAG-enabled chatbot that monitors Google Drive for new FAQ files, downloads and processes them, chunks text, embeds content into a vector database, and uses an AI agent with memory to answer user queries via chat based solely on retrieved FAQ data.",
        results: "Provided instant, accurate answers to 85% of FAQ queries without human intervention, cutting support time and enhancing user satisfaction.",
        tech: ["n8n", "Google Drive Trigger", "Pinecone Vector Store", "Google Gemini Embeddings", "AI Agent", "Simple Memory"]
    },
    4: {
        title: "Automated CSV to Google Sheets Importer",
        image: "projects/data to sheet.png",
        problem: "Regular CSV report uploads to Google Drive require manual extraction and import to Sheets, which is repetitive, prone to errors, and inefficient for handling large datasets.",
        solution: "I designed a workflow that triggers on new file additions in Drive, downloads the CSV, extracts data, and appends it directly to a Google Sheet, supporting bulk operations for up to 999 items.",
        results: "Automated data import for large CSV files in real-time, eliminating manual entry and ensuring accurate, up-to-date Sheets without performance lags.",
        tech: ["n8n", "Google Drive Trigger", "Download File", "Extract From CSV", "Google Sheets Append", "Bulk Operations"]
    },
    5: {
        title: "Reliable Error Monitoring & Multi-Channel Alerts",
        image: "projects/Error logger.png",
        problem: "Workflow failures often go unnoticed, causing downtime, data loss, or delayed fixes, which can disrupt business operations and lead to lost trust.",
        solution: "I implemented an error-handling system that triggers on any workflow failure, logs details to a Google Sheet, sends email notifications, and pushes alerts to Telegram for immediate awareness.",
        results: "Ensured 100% visibility of workflow failures with instant multi-channel notifications, enabling rapid response and minimizing downtime.",
        tech: ["n8n", "Error Trigger", "Google Sheets Append", "Gmail Send Message", "Telegram Send Message"]
    },
    6: {
        title: "Automated Social Media Content Poster",
        image: "projects/social media manger.png",
        problem: "Businesses and creators struggle to maintain a consistent posting schedule on multiple platforms (X/Twitter, Instagram, Facebook, LinkedIn), spending hours daily writing captions, adding hashtags, and uploading media, which leads to burnout and inconsistent engagement.",
        solution: "I designed a fully automated n8n workflow that triggers on new media uploads to Google Drive (photo/video), analyzes the image using AI Vision, generates tailored, engaging captions optimized for each platform (concise for X, visual storytelling for Instagram, professional for LinkedIn, etc.), structures the output, and prepares posts for direct publishing or review in Sheets.",
        results: "Automated the creation and scheduling of platform-specific posts from new media uploads, saving 10–15 hours per week while ensuring consistent, high-quality content and increased audience engagement.",
        tech: ["n8n", "Google Drive Trigger", "OpenAI GPT-4o Vision", "AI Agent", "Twitter/X", "Facebook Graph API", "LinkedIn", "Instagram Graph API"]
    }
};

// ---- DOM Elements ----
const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const portfolioCards = document.querySelectorAll('.portfolio-card');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalProblem = document.getElementById('modal-problem');
const modalSolution = document.getElementById('modal-solution');
const modalResults = document.getElementById('modal-results');
const modalTech = document.getElementById('modal-tech');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const toastClose = document.querySelector('.toast-close');

let currentProjectId = 1;

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initScrollAnimations();
    initNavigation();
    initModal();
    initContactForm();
    initSmoothScroll();
});

// ---- Particle Background ----
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const particleCount = 80;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            color: Math.random() > 0.5 ? '#a855f7' : '#06b6d4'
        };
    }
    
    function initParticlesArray() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }
    
    function drawParticle(p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#a855f7';
                    ctx.globalAlpha = 0.1 * (1 - distance / 150);
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function updateParticle(p) {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            updateParticle(p);
            drawParticle(p);
        });
        
        connectParticles();
        ctx.globalAlpha = 1;
        
        requestAnimationFrame(animate);
    }
    
    resize();
    initParticlesArray();
    animate();
    
    window.addEventListener('resize', () => {
        resize();
        initParticlesArray();
    });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ---- Navigation ----
function initNavigation() {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ---- Modal ----
function initModal() {
    portfolioCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            openModal(projectId);
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    
    modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    
    modalPrev.addEventListener('click', () => navigateProject(-1));
    modalNext.addEventListener('click', () => navigateProject(1));
    
    modalImage.addEventListener('click', () => {
        modalImage.classList.toggle('zoomed');
    });
    
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') navigateProject(-1);
        if (e.key === 'ArrowRight') navigateProject(1);
    });
}

function openModal(projectId) {
    currentProjectId = parseInt(projectId);
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalImage.classList.remove('zoomed');
}

function navigateProject(direction) {
    const totalProjects = Object.keys(projectsData).length;
    currentProjectId += direction;
    
    if (currentProjectId < 1) currentProjectId = totalProjects;
    if (currentProjectId > totalProjects) currentProjectId = 1;
    
    updateModalContent();
}

function updateModalContent() {
    const project = projectsData[currentProjectId];
    
    modalImage.style.opacity = '0';
    
    setTimeout(() => {
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalTitle.textContent = project.title;
        modalProblem.textContent = project.problem;
        modalSolution.textContent = project.solution;
        modalResults.textContent = project.results;
        
        modalTech.innerHTML = project.tech.map(t => 
            `<span class="tech-badge">${t}</span>`
        ).join('');
        
        modalImage.style.opacity = '1';
    }, 200);
}

// ---- Contact Form ----
function initContactForm() {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        
        // Show success toast
        showToast();
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            submitBtn.classList.remove('success');
            submitBtn.disabled = false;
        }, 3000);
    });
    
    toastClose.addEventListener('click', hideToast);
}

function showToast() {
    toast.classList.add('show');
    
    setTimeout(() => {
        hideToast();
    }, 5000);
}

function hideToast() {
    toast.classList.remove('show');
}

// ---- Smooth Scroll ----
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ---- Button Ripple Effect ----
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = this.querySelector('.btn-ripple');
        if (ripple) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            ripple.classList.add('active');
            setTimeout(() => ripple.classList.remove('active'), 600);
        }
    });
});

// ---- Skill Cards Animation ----
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ---- Typing Effect for Hero (Optional Enhancement) ----
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ---- Parallax Effect on Mouse Move ----
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelectorAll('.gradient-orb').forEach(orb => {
        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// ---- Console Easter Egg ----
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #a855f7;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 14px; color: #e2e8f0;');
console.log('%c→ Scroll down and send me a message!', 'font-size: 12px; color: #06b6d4;');
