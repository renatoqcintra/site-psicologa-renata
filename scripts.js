document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de scroll no Header
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Menu Mobile Toggle
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const nav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");

    mobileBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
        // Troca o ícone de hambúrguer para um X
        const icon = mobileBtn.querySelector("i");
        if(nav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Fecha o menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            const icon = mobileBtn.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });

    // 3. Animações de Fade-in on Scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll(".fade-in");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Ativa quando 15% do elemento estiver visível
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Para a animação ocorrer apenas na primeira vez
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

});