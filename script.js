// --- PAGE NAVIGATION LOGIC ---
const mainNavLinks = document.querySelectorAll('.main-nav-link');
const pageContents = document.querySelectorAll('.page-content');

function showPage(targetId) {
    // Hide all content pages
    pageContents.forEach(page => page.classList.remove('active'));
    
    // Show the target page
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update active state for navigation links
    mainNavLinks.forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll(`.main-nav-link[href="#${targetId}"]`).forEach(activeLink => {
        activeLink.classList.add('active');
    });
    
    // Special handling for "Giới thiệu" dropdown parent to keep it active
    if (targetId.startsWith('gioithieu') || targetId.startsWith('hosonangluc') || targetId.startsWith('cosovatchat') || targetId.startsWith('chinhsach')) {
         const introParentLink = document.querySelector('a.main-nav-link[href="#gioithieu-page"]');
         if(introParentLink) {
            introParentLink.classList.add('active');
         }
    }

    // Scroll to the top of the page after navigation
    window.scrollTo(0, 0);
}

mainNavLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const targetId = href.substring(1);
            showPage(targetId);
        }
    });
});

// --- MOBILE MENU ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    // Hide menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// --- SWIPER SLIDERS ---
// Hero Slider
const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    autoplay: { delay: 3000 },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Featured Product Slider
const featuredProductSlider = new Swiper('.featured-product-slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

// Partner Logos Slider
const partnerSlider = new Swiper('.partner-slider', {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});

// Initialize the default page view on load
document.addEventListener('DOMContentLoaded', () => {
    showPage('homepage');
});