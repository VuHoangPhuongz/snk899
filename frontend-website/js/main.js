document.addEventListener('DOMContentLoaded', function () {
    // Biến này sẽ lưu trữ dữ liệu sản phẩm lấy từ API
    let allProducts = []; 
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // ===================================================================
    // HÀM MỚI: LẤY DỮ LIỆU TỪ API VÀ HIỂN THỊ RA GIAO DIỆN
    // ===================================================================
    async function fetchAndRenderProducts() {
        try {
            // Gọi đến backend của bạn để lấy danh sách sản phẩm
            const response = await fetch('http://localhost:5000/api/products');
            if (!response.ok) {
                throw new Error('Lỗi mạng hoặc server không phản hồi');
            }
            allProducts = await response.json();
            
            // Sau khi có dữ liệu, gọi hàm để render lưới sản phẩm
            renderProductGrid(allProducts);
            
        } catch (error) {
            console.error('Lỗi khi tải sản phẩm:', error);
            // Hiển thị thông báo lỗi ra cho người dùng biết
            const productGrid = document.getElementById('product-grid');
            if(productGrid) {
                productGrid.innerHTML = '<p class="col-span-full text-center text-red-500">Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.</p>';
            }
        }
    }

    // ===================================================================
    // HÀM MỚI: RENDER LƯỚI SẢN PHẨM
    // ===================================================================
    function renderProductGrid(productsToRender) {
        const productGrid = document.getElementById('product-grid');
        if (!productGrid) return;

        // Nếu không có sản phẩm nào, hiển thị thông báo
        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<p class="col-span-full text-center">Không có sản phẩm nào phù hợp.</p>';
            return;
        }

        // Lưu ý: data-product-id giờ sẽ dùng `_id` từ MongoDB
        // Thêm ảnh mặc định nếu sản phẩm không có ảnh
        productGrid.innerHTML = productsToRender.map(product => `
            <div class="product-card group bg-white rounded-lg shadow-lg overflow-hidden text-center flex flex-col h-full" data-category="${product.category ? product.category.toLowerCase() : ''}">
                <div class="overflow-hidden">
                    <img src="${product.images && product.images.length > 0 ? product.images[0] : './anh/placeholder.png'}" alt="${product.name}" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="text-base font-bold group-hover-text-green transition-colors flex-grow">
                        <a href="#chitietsanpham-page" class="main-nav-link" data-product-id="${product._id}">${product.name}</a>
                    </h3>
                    <p class="text-green-primary font-bold my-2 text-lg">Liên hệ</p>
                    <a href="#chitietsanpham-page" class="main-nav-link mt-auto bg-blue-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-primary transition-colors" data-product-id="${product._id}">Xem chi tiết</a>
                </div>
            </div>
        `).join('');
    }
    
    // ===================================================================
    // CẬP NHẬT HÀM RENDER CHI TIẾT SẢN PHẨM
    // ===================================================================
    function renderProductDetail(productId) {
        // Tìm sản phẩm trong mảng 'allProducts' đã được fetch về bằng `_id`
        const product = allProducts.find(p => p._id === productId); 
        if (!product) {
            console.error("Không tìm thấy sản phẩm với ID:", productId);
            return;
        }

        showPage('chitietsanpham-page');

        // Các dòng dưới đây giữ nguyên logic, chỉ cần đảm bảo các trường dữ liệu khớp với Model của bạn
        document.getElementById('breadcrumb-product-name').textContent = product.name;
        document.getElementById('product-detail-image').src = product.images && product.images.length > 0 ? product.images[0] : './anh/placeholder.png';
        document.getElementById('product-detail-title').textContent = product.name;
        document.getElementById('product-detail-short-desc').innerHTML = product.short_desc || '';
        
        const gallery = document.getElementById('product-thumbnail-gallery');
        gallery.innerHTML = (product.images || []).map((imgSrc, index) => `
            <div class="aspect-square border rounded hover:border-green-primary cursor-pointer p-1 ${index === 0 ? 'border-2 border-green-primary' : ''}" onclick="document.getElementById('product-detail-image').src='${imgSrc}'">
                <img src="${imgSrc}" alt="Thumbnail ${index+1}" class="w-full h-full object-cover rounded-sm">
            </div>
        `).join('');

        const specsTable = document.getElementById('product-specs-table');
        if (product.specs) {
            specsTable.innerHTML = Object.entries(product.specs).map(([key, value]) => `
                <tr class="hover:bg-gray-50">
                    <th class="px-6 py-3 font-medium text-gray-900">${key}</th>
                    <td class="px-6 py-3">${value}</td>
                </tr>
            `).join('');
        } else {
            specsTable.innerHTML = '';
        }
        
        document.getElementById('description').innerHTML = product.description || '';
        document.getElementById('add-to-cart-btn').dataset.productId = product._id;
    }
    
    // ===================================================================
    // CẬP NHẬT HÀM LỌC SẢN PHẨM
    // ===================================================================
    function filterProducts(category) {
        document.querySelectorAll('#category-sidebar a, .main-nav-link[data-filter]').forEach(link => {
            link.classList.toggle('active', link.dataset.filter === category);
        });

        if (category === 'all') {
            renderProductGrid(allProducts);
        } else {
            const filtered = allProducts.filter(p => p.category && p.category.toLowerCase() === category.toLowerCase());
            renderProductGrid(filtered);
        }
    }

    // --- Các hàm và event listener khác giữ nguyên ---
    // (showPage, addToCart, removeFromCart, updateCartUI, toggleCart, Swiper, Scroll to top...)
    // --- Mình sẽ copy lại các hàm đó xuống dưới đây cho đầy đủ ---

    const pageContents = document.querySelectorAll('.page-content');
    const mainNavLinks = document.querySelectorAll('.main-nav-link');

    const heroSlider = new Swiper('.hero-slider', { loop: true, autoplay: { delay: 4000 }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
    const featuredProductSlider = new Swiper('.featured-product-slider', { loop: true, slidesPerView: 2, spaceBetween: 20, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4, spaceBetween: 30 } } });
    
    showPage('homepage');
    updateCartUI();

    document.body.addEventListener('click', function(event) {
        const target = event.target;
        const navLink = target.closest('.main-nav-link');
        const addToCartBtn = target.closest('#add-to-cart-btn');
        const categoryLink = target.closest('#category-sidebar a');
        const cartIconBtn = target.closest('#cart-icon-btn');
        const closeCartBtn = target.closest('#close-cart-btn, #cart-overlay-bg');
        const removeCartItemBtn = target.closest('.remove-from-cart-btn');

        if (navLink) {
            const href = navLink.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                const productId = navLink.dataset.productId;
                if (productId) {
                    renderProductDetail(productId);
                }
                const filterCategory = navLink.dataset.filter;
                if (filterCategory) {
                    showPage('sanpham-page');
                    filterProducts(filterCategory);
                } else {
                    showPage(targetId);
                }
            }
        }
        
        if (addToCartBtn) {
            const productId = addToCartBtn.dataset.productId;
            addToCart(productId);
        }
        
        if (cartIconBtn) toggleCart(true);
        if (closeCartBtn) toggleCart(false);
        if (removeCartItemBtn) {
            const productId = removeCartItemBtn.dataset.productId;
            removeFromCart(productId);
        }
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });
    }

    const productTabs = document.getElementById('product-tabs');
    if (productTabs) {
        productTabs.addEventListener('click', (event) => {
            const tabButton = event.target.closest('.tab-button');
            if (tabButton) {
                const targetId = tabButton.dataset.tab;
                document.querySelectorAll('.tab-button').forEach(t => t.classList.remove('active', 'text-green-primary', 'border-green-primary'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
                tabButton.classList.add('active', 'text-green-primary', 'border-green-primary');
                document.getElementById(targetId).classList.remove('hidden');
            }
        });
    }
    
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    };
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

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
        
        if (['hosonangluc-page', 'cosovatchat-page', 'chinhsachchatluong-page', 'chinhsachbaomat-page'].includes(targetId)) {
            document.querySelector('a.main-nav-link[href="#gioithieu-page"]').classList.add('active');
        } else if (targetId === 'chitietsanpham-page') {
            document.querySelector('a.main-nav-link[href="#sanpham-page"]').classList.add('active');
        }

        window.scrollTo(0, 0);
    }
    
    function addToCart(productId) {
        const product = allProducts.find(p => p._id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item._id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        saveCart();
        updateCartUI();
        toggleCart(true);
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item._id !== productId);
        saveCart();
        updateCartUI();
    }
    
    function saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    function updateCartUI() {
        const cartItemCount = document.getElementById('cart-item-count');
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartSubtotal = document.getElementById('cart-subtotal');
        
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartItemCount.textContent = totalItems;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Giỏ hàng của bạn đang trống.</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="flex items-center space-x-4 mb-4">
                    <img src="${item.images && item.images.length > 0 ? item.images[0] : './anh/placeholder.png'}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md">
                    <div class="flex-grow">
                        <h4 class="font-semibold text-sm">${item.name}</h4>
                        <p class="text-xs text-gray-500">Số lượng: ${item.quantity}</p>
                        <p class="font-bold text-green-primary">Liên hệ</p>
                    </div>
                    <button class="remove-from-cart-btn text-gray-400 hover:text-red-500" data-product-id="${item._id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `).join('');
        }
        cartSubtotal.textContent = 'Liên hệ';
    }
    
    function toggleCart(show) {
        const cartSidebar = document.getElementById('cart-sidebar');
        if (show) {
            cartSidebar.classList.remove('hidden');
        } else {
            cartSidebar.classList.add('hidden');
        }
    }

    // ===================================================================
    // GỌI HÀM FETCH KHI TRANG ĐƯỢC TẢI
    // ===================================================================
    fetchAndRenderProducts();
});
