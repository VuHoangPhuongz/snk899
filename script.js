// --- PAGE NAVIGATION LOGIC ---
const mainNavLinks = document.querySelectorAll('.main-nav-link');
const pageContents = document.querySelectorAll('.page-content');

function showPage(targetId) {
    pageContents.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    mainNavLinks.forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll(`.main-nav-link[href="#${targetId}"]`).forEach(activeLink => {
        activeLink.classList.add('active');
    });
    
    // Special handling for "Giới thiệu" dropdown parent
    if (targetId.startsWith('gioithieu') || targetId.startsWith('hosonangluc') || targetId.startsWith('cosovatchat') || targetId.startsWith('chinhsach')) {
         document.querySelector('a.main-nav-link[href="#gioithieu-page"]').classList.add('active');
    }

    window.scrollTo(0, 0);
}

mainNavLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showPage(targetId);
    });
});

// --- MOBILE MENU ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}


// --- HERO SLIDER ---
const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    autoplay: { delay: 5000 },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// --- PROJECT SLIDER ---
const projectSlider = new Swiper('.project-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    }
});

// --- FEATURED PRODUCT SLIDER ---
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