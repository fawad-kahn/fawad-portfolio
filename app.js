// ============================================
// FAWAD KHAN PORTFOLIO - SCRIPT.JS
// Fully Animated & Interactive Portfolio
// ============================================

// Project Data - Easy to Edit/Add New Projects
const projectsData = [
  {
    id: 1,
    title: "Grocify Website",
    description:
      "Fresh organic fruits and vegetables delivered straight to your doorstep. Shop healthy, high-quality produce sourced with care.",
    image: "./grocify.jpeg",
    category: "ecommerce",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/fawad-kahn/grocify",
    demo: "",
  },
  {
    id: 2,
    title: "Savory Kitchen",
    description:
      "We prepare every dish using fresh, high-quality ingredients and recipes crafted by our expert chefs. From delicious pizzas and BBQ to desserts and refreshing beverages, our menu offers something for everyone. Our commitment to quality, hygiene, and outstanding customer service makes every visit truly special.",
    image: "./savory.png",
    category: "web",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/fawad-kahn/Savory",
    demo: "https://fawad-kahn.github.io/Savory/",
  },
  {
    id: 3,
    title: "Swiggy Clone",
    description:
      "It is a responsive food delivery web application that lets users explore restaurants and food categories like Pizza, Burgers, Chinese, and more. It provides a modern, easy-to-use interface with features such as menu browsing, cart management, and responsive design.",
    image: "./swiggy.png",
    category: "web",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/fawad-kahn/swiggy-clone",
    demo: "",
  },
  //   {
  //     id: 4,
  //     title: "Inventory Management",
  //     description:
  //       "Desktop application for managing inventory in small businesses with product tracking and stock alerts.",
  //     image: "./assets/inventrymanagement.svg",
  //     category: "web",
  //     technologies: ["C#", "SQL Server"],
  //     github: "",
  //     demo: "",
  //   },
  //   {
  //     id: 5,
  //     title: "Finance Tracker",
  //     description:
  //       "Web application for tracking personal income and expenses with budgeting and data visualization.",
  //     image: "./assets/finance.jpg",
  //     category: "web",
  //     technologies: ["React", "Chart.js", "Node.js"],
  //     github: "",
  //     demo: "",
  //   },
  //   {
  //     id: 6,
  //     title: "Weather Forecast",
  //     description:
  //       "Real-time weather application with beautiful UI showing current conditions and 7-day forecasts.",
  //     image: "./assets/weatherforcast.jpg",
  //     category: "web",
  //     technologies: ["JavaScript", "API", "CSS"],
  //     github: "",
  //     demo: "",
  //   },
];

// DOM Elements
const preloader = document.getElementById("preloader");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");
const scrollTop = document.getElementById("scrollTop");
const hireModal = document.getElementById("hireModal");
const modalClose = document.getElementById("modalClose");
const contactForm = document.getElementById("contactForm");
const projectsGrid = document.getElementById("projectsGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// ============================================
// PRELOADER
// ============================================
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 2500);
});

document.body.style.overflow = "hidden";

// ============================================
// CUSTOM CURSOR
// ============================================
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" },
  );
});

// Cursor hover effects
const interactiveElements = document.querySelectorAll(
  "a, button, .project-card, .service-card, .skill-category",
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorOutline.style.width = "60px";
    cursorOutline.style.height = "60px";
    cursorOutline.style.borderColor = "var(--primary)";
    cursorOutline.style.background = "rgba(2, 245, 161, 0.1)";
  });

  el.addEventListener("mouseleave", () => {
    cursorOutline.style.width = "40px";
    cursorOutline.style.height = "40px";
    cursorOutline.style.borderColor = "var(--primary)";
    cursorOutline.style.background = "transparent";
  });
});

// ============================================
// NAVIGATION
// ============================================
// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Scroll to top button
  if (window.scrollY > 500) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }

  // Active nav link
  updateActiveNavLink();
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinksContainer.classList.toggle("active");
  document.body.style.overflow = navLinksContainer.classList.contains("active")
    ? "hidden"
    : "auto";
});

// Close mobile menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinksContainer.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Active nav link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll to top
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ============================================
// HIRE MODAL
// ============================================
const hireBtns = document.querySelectorAll(".hire-btn");

function openHireModal() {
  hireModal.classList.add("active");
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
}

function closeHireModal() {
  hireModal.classList.remove("active");
  document.body.classList.remove("modal-open");
  document.body.style.overflow = "auto";
}

hireBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openHireModal();
  });
});

modalClose.addEventListener("click", () => {
  closeHireModal();
});

hireModal.addEventListener("click", (e) => {
  if (e.target === hireModal) {
    closeHireModal();
  }
});

// ============================================
// PROJECTS RENDERING & FILTERING
// ============================================
let visibleProjects = 6;
let currentFilter = "all";

function renderProjects(filter = "all", limit = visibleProjects) {
  let filtered = projectsData;

  if (filter !== "all") {
    filtered = projectsData.filter((p) => p.category === filter);
  }

  const toShow = filtered.slice(0, limit);

  projectsGrid.innerHTML = toShow
    .map(
      (project) => `
        <div class="project-card" data-aos="fade-up" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-link" title="View Code">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="${project.demo}" target="_blank" class="project-link" title="Live Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
                </div>
            </div>
        </div>
    `,
    )
    .join("");

  // Re-initialize AOS for new elements
  initAOS();

  // Show/hide load more button
  if (filtered.length <= limit) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "inline-flex";
  }
}

// Filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    visibleProjects = 6;
    renderProjects(currentFilter, visibleProjects);
  });
});

// Load more
loadMoreBtn.addEventListener("click", () => {
  visibleProjects += 3;
  renderProjects(currentFilter, visibleProjects);
});

// Initial render
renderProjects();

// ============================================
// CONTACT FORM
// ============================================
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector(".btn-submit");
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const projectType = document.getElementById("projectType").value;
  const budgetRange = document.getElementById("budgetRange").value;
  const message = document.getElementById("message").value.trim();

  // Show loading
  submitBtn.classList.add("loading");

  // Simulate short delay for feedback
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Show success
  submitBtn.classList.remove("loading");
  submitBtn.classList.add("success");

  // Send WhatsApp message directly to the provided number
  const whatsappText = encodeURIComponent(
    `*New Contact from Portfolio*\n\n` +
      `*Name :* ${name}\n` +
      `*Email :* ${email}\n` +
      `*Project Type :* ${projectType}\n` +
      `*Budget Range :* ${budgetRange}\n\n` +
      `*Message :*\n${message}`,
  );

  window.open(`https://wa.me/923315348543?text=${whatsappText}`, "_blank");

  // Reset form after delay
  setTimeout(() => {
    contactForm.reset();
    submitBtn.classList.remove("success");
  }, 2500);
});

// ============================================
// ANIMATED COUNTERS
// ============================================
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target + (el.dataset.suffix || "");
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + (el.dataset.suffix || "");
    }
  }, 16);
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".stat-number[data-count]").forEach((counter) => {
  counterObserver.observe(counter);
});

// ============================================
// SKILL BARS ANIMATION
// ============================================
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const width = progress.dataset.width;
        setTimeout(() => {
          progress.style.width = width + "%";
        }, 200);
        skillObserver.unobserve(progress);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".skill-progress").forEach((bar) => {
  skillObserver.observe(bar);
});

// ============================================
// AOS (Animate On Scroll) - Custom Implementation
// ============================================
function initAOS() {
  const aosElements = document.querySelectorAll("[data-aos]");

  const aosObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.aosDelay || 0;
          setTimeout(() => {
            entry.target.classList.add("aos-animate");
          }, delay);
          aosObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  aosElements.forEach((el) => aosObserver.observe(el));
}

initAOS();

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const parallaxElements = document.querySelectorAll(".glow-orb");

  parallaxElements.forEach((el, index) => {
    const speed = 0.2 + index * 0.1;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ============================================
// TYPING EFFECT (Optional - for hero subtitle)
// ============================================
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ============================================
// PARTICLE EFFECT (Canvas)
// ============================================
function createParticles() {
  const canvas = document.createElement("canvas");
  canvas.id = "particles";
  canvas.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.3;";
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext("2d");
  let particles = [];
  const particleCount = 50;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = `rgba(2, 245, 161, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach((b) => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.strokeStyle = `rgba(2, 245, 161, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize particles
createParticles();

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================
document.querySelectorAll(".btn, .social-link").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});

// ============================================
// GLITCH EFFECT ON LOGO (Optional)
// ============================================
const logo = document.querySelector(".logo");
const logoText = logo.querySelector(".logo-text");
const originalText = logoText.textContent;

logo.addEventListener("mouseenter", () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let iterations = 0;

  const interval = setInterval(() => {
    logoText.textContent = originalText
      .split("")
      .map((char, index) => {
        if (index < iterations) return originalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iterations >= originalText.length) clearInterval(interval);
    iterations += 1 / 3;
  }, 30);
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeHireModal();
    navLinksContainer.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

// ============================================
// PERFORMANCE: Pause animations when tab is hidden
// ============================================
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.body.classList.add("paused");
  } else {
    document.body.classList.remove("paused");
  }
});

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log(
  "%c👋 Hey there!",
  "font-size: 24px; color: #02F5A1; font-weight: bold;",
);
console.log(
  "%cWelcome to Fawad Khan's Portfolio!",
  "font-size: 16px; color: #8ba3ab;",
);
console.log(
  "%cLooking for a Front-End Developer? Let's connect!",
  "font-size: 14px; color: #02F5A1;",
);
console.log(
  "%c📧 ifawadkahn@gmail.com | 📱 +92 331 534 8543",
  "font-size: 12px; color: #5a7a85;",
);

// ============================================
// EXPORT FUNCTION FOR ADDING NEW PROJECTS
// Usage: window.addProject({...})
// ============================================
window.addProject = function (project) {
  projectsData.push({
    id: projectsData.length + 1,
    ...project,
  });
  renderProjects(currentFilter, visibleProjects);
};

// Example usage (uncomment to test):
// window.addProject({
//     title: "New Project",
//     description: "Description here",
//     image: "./assets/new-project.jpg",
//     category: "web",
//     technologies: ["React", "Node.js"],
//     github: "https://github.com/fawad-kahn",
//     demo: "#"
// });
