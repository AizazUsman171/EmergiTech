document.addEventListener("DOMContentLoaded", function() {
    // Scroll Effect for Navbar
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Adding/removing 'scrolled' class to change the background color
        if (currentScroll > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Hide navbar on scroll down and show on scroll up
        if (currentScroll > lastScrollTop) {
            // Scroll down - hide navbar
            navbar.style.top = "-70px"; // Adjust this value based on your navbar height
        } else {
            // Scroll up - show navbar
            navbar.style.top = "0";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
    });

    // Hamburger Menu Toggle for Mobile View
    const toggleButton = document.querySelector(".menu-toggle");
    const navbarLinks = document.querySelector("#navbar ul.nav-links");

    toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("show");
    });

    // Scroll Animation Effect for Cards using Intersection Observer
    const solutionCards = document.querySelectorAll(".solution-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.3
    });

    solutionCards.forEach((card) => {
        observer.observe(card);
    });

    // JavaScript for sliding functionality of client logos
    const logosWrapper = document.querySelector('.logos-wrapper');
    if (logosWrapper) {
        let isMouseDown = false;
        let startX, scrollLeft;

        logosWrapper.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX - logosWrapper.offsetLeft;
            scrollLeft = logosWrapper.scrollLeft;
        });

        logosWrapper.addEventListener('mouseleave', () => {
            isMouseDown = false;
        });

        logosWrapper.addEventListener('mouseup', () => {
            isMouseDown = false;
        });

        logosWrapper.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - logosWrapper.offsetLeft;
            const walk = (x - startX) * 3; // Adjust the scroll speed
            logosWrapper.scrollLeft = scrollLeft - walk;
        });
    }

    // GSAP Scroll Animation for Cards
    if (typeof gsap !== "undefined" && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);

        var start = "top top";

        gsap.to(".card-1", {
            scrollTrigger: {
                trigger: ".solutions-cards",
                start: start,
                end: "+=" + (document.querySelector('.solutions-cards').offsetHeight - 500),
                scrub: true,
            },
            yPercent: 311,
            scale: 0.94,
        });

        gsap.to(".card-2", {
            scrollTrigger: {
                trigger: ".solutions-cards",
                start: start,
                end: "+=" + (document.querySelector('.solutions-cards').offsetHeight - 500),
                scrub: true,
            },
            yPercent: 208,
            scale: 0.96,
        });

        gsap.to(".card-3", {
            scrollTrigger: {
                trigger: ".solutions-cards",
                start: start,
                end: "+=" + (document.querySelector('.solutions-cards').offsetHeight - 500),
                scrub: true,
            },
            yPercent: 105,
            scale: 0.98,
        });
    }
});
