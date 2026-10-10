
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Mobile navigation
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navLinks.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation"
  );

  navLinks.classList.toggle("is-open", !isOpen);
});

// Close the menu after choosing a destination
navItems.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close menu with Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

// Scroll reveal, with fallback for older browsers
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

// Current copyright year
document.querySelector("#year").textContent =
  new Date().getFullYear();
