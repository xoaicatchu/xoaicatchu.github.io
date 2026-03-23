/* ========================================
   INTERACTIVE SCRIPTS
   Hoàng Công Vinh — AI Agents Commander
   ======================================== */

// ========================================
// PARTICLE SYSTEM
// ========================================
(function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(108, 92, 231, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Create particles
    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const opacity = (1 - dist / 150) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(108, 92, 231, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawLines();
        animationId = requestAnimationFrame(animate);
    }
    animate();
})();

// ========================================
// TYPING EFFECT
// ========================================
(function initTyping() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const phrases = [
        'Kỹ sư quản trị đội quân AI Agents 🤖',
        'Đa vũ trụ IT · Đa kỷ nguyên tu tiên 🔮',
        'Năng suất khủng khiếp · Quy trình tối ưu ⚡',
        'Công bằng tuyệt đối cho mọi AI Agent ⚖️',
        'Đầu tư vào Vinh · Thay đổi tương lai 🚀'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function type() {
        const current = phrases[phraseIndex];
        if (isDeleting) {
            el.textContent = current.substring(0, charIndex--);
        } else {
            el.textContent = current.substring(0, charIndex++);
        }

        let speed = isDeleting ? 30 : 60;

        if (!isDeleting && charIndex === current.length + 1) {
            speed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 500;
        }

        timeout = setTimeout(type, speed);
    }

    // Start after a delay
    setTimeout(type, 1500);
})();

// ========================================
// SCROLL REVEAL
// ========================================
(function initReveal() {
    const cards = document.querySelectorAll('.reveal-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    cards.forEach(card => observer.observe(card));
})();

// ========================================
// STAT COUNTER ANIMATION
// ========================================
(function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const bars = document.querySelectorAll('.stat-bar-fill');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = el.getAttribute('data-target');

                    if (target === '∞') {
                        animateInfinity(el);
                    } else {
                        animateNumber(el, parseInt(target));
                    }
                    observer.unobserve(el);
                }
            });
        },
        { threshold: 0.5 }
    );

    statNumbers.forEach(num => observer.observe(num));

    // Activate bars when visible
    const barObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    barObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    bars.forEach(bar => barObserver.observe(bar));

    function animateNumber(el, target) {
        const duration = 2000;
        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(update);
    }

    function animateInfinity(el) {
        let count = 0;
        const symbols = ['∞'];
        const interval = setInterval(() => {
            count++;
            if (count < 30) {
                el.textContent = Math.floor(Math.random() * 9999);
            } else {
                el.textContent = '∞';
                clearInterval(interval);
            }
        }, 60);
    }
})();

// ========================================
// SMOOTH SCROLL
// ========================================
document.getElementById('scroll-indicator')?.addEventListener('click', () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});

// ========================================
// PARALLAX ON MOUSE MOVE (Hero only)
// ========================================
(function initParallax() {
    const hero = document.querySelector('.hero');
    const avatar = document.querySelector('.avatar-container');
    const glow = document.querySelector('.hero-glow');

    if (!hero || !avatar) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        avatar.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
        if (glow) {
            glow.style.transform = `translate(calc(-50% + ${x * 30}px), calc(-50% + ${y * 30}px))`;
        }
    });

    hero.addEventListener('mouseleave', () => {
        avatar.style.transform = 'translate(0, 0)';
        if (glow) {
            glow.style.transform = 'translate(-50%, -50%)';
        }
    });
})();

// ========================================
// SCROLL HIDE INDICATOR
// ========================================
(function initScrollHide() {
    const indicator = document.getElementById('scroll-indicator');
    if (!indicator) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            indicator.style.opacity = '0';
            indicator.style.pointerEvents = 'none';
        } else {
            indicator.style.opacity = '';
            indicator.style.pointerEvents = '';
        }
    });
})();

// ========================================
// QR MODAL
// ========================================
function openModal() {
    document.getElementById('qr-modal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('qr-modal')?.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('qr-container')?.addEventListener('click', openModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ========================================
// COPY ACCOUNT NUMBER
// ========================================
function copyAccount() {
    const el = document.getElementById('account-number');
    if (!el) return;
    
    navigator.clipboard.writeText('0945810190').then(() => {
        const original = el.textContent;
        el.textContent = 'Đã copy! ✅';
        el.classList.add('copied');
        setTimeout(() => {
            el.textContent = original;
            el.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = '0945810190';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        const original = el.textContent;
        el.textContent = 'Đã copy! ✅';
        el.classList.add('copied');
        setTimeout(() => {
            el.textContent = original;
            el.classList.remove('copied');
        }, 2000);
    });
}
