// ===================================================================
// DATABASE SẢN PHẨM (VÍ DỤ)
// ===================================================================
// ===================================================================
// DATABASE SẢN PHẨM (Đầy đủ)
// ===================================================================
const products = [
    // --- Rèm/Màn ngăn cháy ---
    {
        id: 'rem-1-lop',
        name: 'Rèm/ màn ngăn cháy 1 lớp',
        category: 'Rèm/Màn cuốn ngăn cháy',
        sku: 'RNC-01',
        images: ['./man ngan chay 1 lop.jpg', './ie 90.jpg', './ie 60 test.jpg'],
        short_desc: 'Giải pháp PCCC hiệu quả, gọn nhẹ và thẩm mỹ cho các công trình hiện đại. Sản phẩm được làm từ vật liệu composite chống cháy cao cấp, có khả năng tự động sập xuống khi có tín hiệu báo cháy.',
        description: `<p>Rèm ngăn cháy 1 lớp được thiết kế để thay thế cho các giải pháp cửa chống cháy truyền thống ở những khu vực cần không gian mở và tính thẩm mỹ cao như sảnh trung tâm thương mại, lối thoát hiểm, khu vực sản xuất...</p><h4>Ưu điểm nổi bật:</h4><ul><li>Thiết kế gọn nhẹ, hiện đại, tiết kiệm diện tích.</li><li>Tự động hoạt động khi có hỏa hoạn, đảm bảo an toàn tối đa.</li><li>Vật liệu cao cấp, đã được kiểm định PCCC theo tiêu chuẩn Việt Nam.</li><li>Dễ dàng lắp đặt, bảo trì và bảo dưỡng.</li></ul>`,
        specs: {'Giới hạn chịu lửa': 'E 120 (chỉ ngăn lửa, không ngăn nhiệt)', 'Vật liệu': 'Vải thủy tinh phủ silicone/PU', 'Độ dày': '0.8mm - 2.0mm', 'Cơ chế hoạt động': 'Tự động, điều khiển bằng Motor và Hộp điều khiển trung tâm', 'Tiêu chuẩn': 'TCVN 9383:2012'}
    },
    {
        id: 'rem-ei-90',
        name: 'Rèm/ màn ngăn cháy EI 90 phút',
        category: 'Rèm/Màn cuốn ngăn cháy',
        sku: 'RNC-02',
        images: ['./ie 90.jpg', './man ngan chay 1 lop.jpg', './ie 60 test.jpg'],
        short_desc: 'Sản phẩm rèm ngăn cháy cao cấp với giới hạn chịu lửa và cách nhiệt lên đến 90 phút, đáp ứng các tiêu chuẩn PCCC khắt khe nhất cho các công trình trọng điểm.',
        description: `<p>Rèm ngăn cháy EI 90 là giải pháp an toàn tối ưu cho các khu vực có nguy cơ cháy nổ cao. Với cấu tạo nhiều lớp vật liệu chống cháy và cách nhiệt, sản phẩm đảm bảo ngăn chặn lửa và nhiệt độ hiệu quả trong 90 phút, tạo thời gian vàng cho công tác sơ tán và chữa cháy.</p><h4>Ứng dụng:</h4><ul><li>Nhà xưởng sản xuất, kho chứa hàng hóa có giá trị cao.</li><li>Tầng hầm, bãi đậu xe của các tòa nhà chung cư, trung tâm thương mại.</li><li>Phòng máy, phòng kỹ thuật, khu vực chứa thiết bị quan trọng.</li></ul>`,
        specs: {'Giới hạn chịu lửa': 'EI 90 phút (ngăn lửa và cách nhiệt)', 'Vật liệu': 'Vải chống cháy đa lớp, bông gốm ceramic cách nhiệt', 'Độ dày': '3.0mm - 5.0mm', 'Cơ chế hoạt động': 'Tự động, điều khiển bằng Motor, có thể tích hợp UPS', 'Tiêu chuẩn': 'QCVN 06:2021/BXD'}
    },
    {
        id: 'rem-ei-60',
        name: 'Rèm/ màn ngăn cháy EI 60 phút',
        category: 'Rèm/Màn cuốn ngăn cháy',
        sku: 'RNC-03',
        images: ['./ie 60 test.jpg', './man ngan chay 1 lop.jpg', './ie 90.jpg'],
        short_desc: 'Giải pháp cân bằng giữa chi phí và hiệu quả, cung cấp khả năng ngăn cháy và cách nhiệt trong 60 phút, phù hợp với đa số các công trình dân dụng và công nghiệp.',
        description: `<p>Rèm ngăn cháy EI 60 là lựa chọn phổ biến nhất hiện nay. Sản phẩm không chỉ đảm bảo các yêu cầu về PCCC mà còn có thiết kế hiện đại, dễ dàng lắp đặt và vận hành.</p>`,
        specs: {'Giới hạn chịu lửa': 'EI 60 phút (ngăn lửa và cách nhiệt)', 'Vật liệu': 'Vải thủy tinh phủ hợp chất chống cháy', 'Độ dày': '1.5mm - 2.5mm', 'Cơ chế hoạt động': 'Tự động, kết nối hệ thống báo cháy', 'Tiêu chuẩn': 'TCVN 9383:2012'}
    },
    // --- Tấm MGO ---
    {
        id: 'tam-mgo-10mm',
        name: 'Tấm Eron - MGO 10mm cách nhiệt',
        category: 'Tấm MGO chống cháy',
        sku: 'MGO-01',
        images: ['./mgo 10mm.png'],
        short_desc: 'Tấm MGO (Magnesium Oxide) dày 10mm với khả năng chống cháy, cách âm, cách nhiệt và chống ẩm vượt trội, là vật liệu xanh cho xây dựng hiện đại.',
        description: `<p>Tấm MGO 10mm là vật liệu xây dựng thế hệ mới, không chứa amiăng, an toàn cho sức khỏe và thân thiện với môi trường.</p>`,
        specs: {'Độ dày': '10mm', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Kích thước tiêu chuẩn': '1220mm x 2440mm', 'Chống cháy': 'Loại A1 (không cháy)'}
    },
    {
        id: 'tam-mgo-5mm',
        name: 'Tấm MGO-Eron chống cháy 5mm',
        category: 'Tấm MGO chống cháy',
        sku: 'MGO-02',
        images: ['./mgo eron.jpg'],
        short_desc: 'Phiên bản tấm MGO mỏng hơn, linh hoạt cho các ứng dụng ốp tường, trần, vách ngăn yêu cầu khả năng chống cháy nhưng cần tối ưu về trọng lượng.',
        description: `<p>Với độ dày chỉ 5mm, tấm MGO-Eron dễ dàng thi công, uốn cong, phù hợp cho nhiều thiết kế phức tạp.</p>`,
        specs: {'Độ dày': '5mm', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Kích thước tiêu chuẩn': '1220mm x 2440mm', 'Chống cháy': 'Loại A1 (không cháy)'}
    },
    {
        id: 'tam-mgo-tong-hop',
        name: 'Tấm chống cháy MGO',
        category: 'Tấm MGO chống cháy',
        sku: 'MGO-03',
        images: ['./tam chong chay.jpg'],
        short_desc: 'Dòng sản phẩm tấm MGO đa dạng về độ dày và quy cách, đáp ứng mọi nhu cầu về giải pháp chống cháy cho công trình.',
        description: `<p>Cung cấp các loại tấm MGO với độ dày từ 3mm đến 20mm, phù hợp làm vách ngăn, sàn, trần chống cháy.</p>`,
        specs: {'Độ dày': 'Tùy chọn (3mm - 20mm)', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Ứng dụng': 'Ốp tường, trần, sàn, vách ngăn', 'Chống cháy': 'Loại A1 (không cháy)'}
    },
    // --- Tấm Panel ---
    {
        id: 'panel-xop-10cm',
        name: 'PANEL LÕI XỐP THƯỜNG DÀY 10 CM',
        category: 'Tấm Panel chống cháy',
        sku: 'PNL-01',
        images: ['./panel-loi-xop-thuong-day-10-cm_300x300.jpg'],
        short_desc: 'Tấm panel EPS (lõi xốp) dày 10cm, giải pháp cách nhiệt, cách âm hiệu quả với chi phí hợp lý cho nhà xưởng, kho lạnh, phòng sạch.',
        description: `<p>Cấu tạo gồm 2 lớp tôn mạ màu và lớp xốp EPS ở giữa, giúp thi công nhanh chóng và tiết kiệm chi phí.</p>`,
        specs: {'Độ dày': '10 cm', 'Lõi': 'Xốp EPS (Expandable Polystyrene)', 'Tỷ trọng xốp': '10 - 16 kg/m³', 'Ứng dụng': 'Vách, trần nhà xưởng, kho lạnh'}
    },
    {
        id: 'panel-bong-khoang-100mm',
        name: 'PANEL LÕI BÔNG KHOÁNG DÀY 100 MM',
        category: 'Tấm Panel chống cháy',
        sku: 'PNL-02',
        images: ['./panel-loi-bong-khoang-day-100-mm_300x300.jpg'],
        short_desc: 'Panel Rockwool (lõi bông khoáng) chống cháy vượt trội, là giải pháp tối ưu cho các công trình yêu cầu tiêu chuẩn PCCC cao.',
        description: `<p>Lõi bông khoáng có khả năng chống cháy lên đến 2 giờ, đồng thời cách âm và cách nhiệt hiệu quả.</p>`,
        specs: {'Độ dày': '100 mm', 'Lõi': 'Bông khoáng (Rockwool)', 'Tỷ trọng': '80 - 120 kg/m³', 'Chống cháy': 'Lên đến 2 giờ'}
    },
    {
        id: 'panel-mai-rockwool',
        name: 'PANEL MÁI LÕI BÔNG KHOÁNG (ROCKWOOL)',
        category: 'Tấm Panel chống cháy',
        sku: 'PNL-03',
        images: ['./panel-mai-loi-bong-khoang-rockwool_300x300.jpg'],
        short_desc: 'Loại panel chuyên dụng cho lợp mái, có tạo sóng giúp thoát nước tốt, kết hợp khả năng chống cháy, chống nóng và chống ồn ưu việt.',
        description: `<p>Thiết kế sóng tôn đặc biệt giúp tăng độ cứng và khả năng thoát nước cho mái nhà xưởng, nhà kho.</p>`,
        specs: {'Loại': 'Panel lợp mái', 'Lõi': 'Bông khoáng (Rockwool)', 'Số sóng': '3 sóng / 5 sóng', 'Chống cháy': 'Lên đến 2 giờ'}
    },
    // --- Keo Chống Cháy ---
    {
        id: 'keo-f200',
        name: 'Keo Silicone chống cháy Ssangkom Topseal F200',
        category: 'Keo chống cháy',
        sku: 'KEO-01',
        images: ['./keo f200.jpg'],
        short_desc: 'Keo silicone cao cấp gốc Acrylic, chuyên dụng để trám, bịt kín các khe hở, mối nối trong hệ thống PCCC, ngăn cháy lan hiệu quả.',
        description: `<p>Sản phẩm có khả năng bám dính tốt trên nhiều loại vật liệu xây dựng và chịu được nhiệt độ cao.</p>`,
        specs: {'Thương hiệu': 'Ssangkom Topseal', 'Mã sản phẩm': 'F200', 'Gốc': 'Acrylic', 'Ứng dụng': 'Trám khe hở, ống gió, vách ngăn'}
    },
    {
        id: 'keo-m1',
        name: 'Keo silicone chống cháy Fixacryl M1 Grey 300 ml',
        category: 'Keo chống cháy',
        sku: 'KEO-02',
        images: ['./keo m1.png'],
        short_desc: 'Keo silicone chống cháy lan gốc Acrylic Polymer, đạt tiêu chuẩn M1 của Pháp về chống cháy.',
        description: `<p>Dùng để bịt kín các khe co giãn, mối nối tường, cửa chống cháy, đảm bảo tính toàn vẹn của kết cấu khi có hỏa hoạn.</p>`,
        specs: {'Thương hiệu': 'Fixacryl', 'Mã sản phẩm': 'M1', 'Màu sắc': 'Xám (Grey)', 'Dung tích': '300 ml'}
    },
    {
        id: 'keo-m1c',
        name: 'KEO SILICONE CHỐNG CHÁY LAN SELSIL M1C',
        category: 'Keo chống cháy',
        sku: 'KEO-03',
        images: ['./keo m1c.png'],
        short_desc: 'Keo trám gốc Acrylic có khả năng trương nở khi gặp nhiệt độ cao, tạo thành một lớp than hóa ngăn chặn lửa và khói hiệu quả.',
        description: `<p>Được sử dụng rộng rãi trong việc thi công các hệ thống PCCC cho tòa nhà cao tầng, nhà máy.</p>`,
        specs: {'Thương hiệu': 'Selsil', 'Mã sản phẩm': 'M1C', 'Tính năng': 'Trương nở khi gặp nhiệt', 'Đóng gói': 'Tuýp 310ml'}
    },
    // --- Ron Chống Cháy ---
    {
        id: 'ron-cua-thep',
        name: 'Ron chống cháy cửa thép',
        category: 'Ron chống cháy',
        sku: 'RON-01',
        images: ['./ron-chong-chay-cua-thep_300x300.png'],
        short_desc: 'Ron (gioăng) cao su chuyên dụng cho cửa thép chống cháy, giúp làm kín khít giữa cánh và khung cửa, ngăn khói độc lan tỏa.',
        description: `<p>Ron cao su có độ đàn hồi tốt, chịu được nhiệt độ cao và không bị lão hóa theo thời gian.</p>`,
        specs: {'Vật liệu': 'Cao su EPDM', 'Ứng dụng': 'Lắp đặt trên khung cửa thép chống cháy', 'Tính năng': 'Ngăn khói, giảm chấn'}
    },
    {
        id: 'ron-thanh',
        name: 'Ron chống cháy thanh',
        category: 'Ron chống cháy',
        sku: 'RON-02',
        images: ['./ron-chong-chay-thanh_300x300.png'],
        short_desc: 'Thanh ron (intumescent strip) có khả năng trương nở gấp nhiều lần thể tích ban đầu khi tiếp xúc nhiệt độ cao, bịt kín hoàn toàn khe hở cửa.',
        description: `<p>Thường được dán vào mép cánh cửa hoặc khung bao, là thành phần bắt buộc trong cửa chống cháy EI.</p>`,
        specs: {'Vật liệu': 'Graphite trương nở', 'Kích thước': '10x2mm, 20x2mm,...', 'Tính năng': 'Trương nở, ngăn lửa và khói'}
    },
    {
        id: 'ron-mem',
        name: 'Ron chống cháy mềm',
        category: 'Ron chống cháy',
        sku: 'RON-03',
        images: ['./ron-chong-chay-mem_300x300.png'],
        short_desc: 'Loại ron dẻo, dễ dàng uốn lượn và lắp đặt cho các vị trí phức tạp, đảm bảo độ kín khít và khả năng ngăn cháy lan.',
        description: `<p>Giải pháp linh hoạt cho các loại cửa có hình dạng đặc biệt hoặc các khe hở không đồng đều.</p>`,
        specs: {'Vật liệu': 'Polymer chống cháy', 'Đóng gói': 'Cuộn', 'Tính năng': 'Linh hoạt, ngăn khói'}
    }
];


// ===================================================================
// LOGIC CHÍNH CỦA TRANG WEB
// ===================================================================

function renderProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Sản phẩm không tồn tại!');
        return;
    }

    // Điền thông tin cơ bản
    document.getElementById('breadcrumb-product-name').textContent = product.name;
    document.getElementById('product-detail-image').src = product.images[0];
    document.getElementById('product-detail-title').textContent = product.name;
    
    // An toàn hơn khi kiểm tra element trước khi gán
    const shortDescEl = document.getElementById('product-detail-short-desc');
    if(shortDescEl) {
        shortDescEl.innerHTML = product.short_desc;
    }

    // VÔ HIỆU HÓA 2 DÒNG GÂY LỖI
    // document.getElementById('product-detail-sku').textContent = product.sku;
    // document.getElementById('product-detail-category').textContent = product.category;

    // Điền thư viện ảnh
    const gallery = document.getElementById('product-thumbnail-gallery');
    gallery.innerHTML = '';
    product.images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = `border rounded hover:border-green-primary cursor-pointer p-1 ${index === 0 ? 'border-2 border-green-primary' : ''}`;
        img.onclick = function() {
            document.getElementById('product-detail-image').src = this.src;
            gallery.querySelectorAll('img').forEach(i => i.className = 'border rounded hover:border-green-primary cursor-pointer p-1');
            this.className = 'border-2 border-green-primary rounded cursor-pointer p-1';
        };
        gallery.appendChild(img);
    });

    // Điền mô tả chi tiết và thông số kỹ thuật
    document.getElementById('description').innerHTML = product.description;
    const specsTable = document.getElementById('product-specs-table');
    specsTable.innerHTML = '';
    for (const key in product.specs) {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        row.innerHTML = `
            <th class="px-6 py-3 font-medium text-gray-900">${key}</th>
            <td class="px-6 py-3">${product.specs[key]}</td>
        `;
        specsTable.appendChild(row);
    }
}

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
    
    // Logic highlight menu cha
    if (targetId.startsWith('gioithieu') || targetId.startsWith('hosonangluc') || targetId.startsWith('cosovatchat') || targetId.startsWith('chinhsach')) {
         document.querySelector('a.main-nav-link[href="#gioithieu-page"]')?.classList.add('active');
    } else if (targetId === 'chitietsanpham-page') {
        document.querySelector('a.main-nav-link[href="#sanpham-page"]')?.classList.add('active');
    }

    window.scrollTo(0, 0);
}

mainNavLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const targetId = href.substring(1);

            const productId = link.dataset.productId;
            if (productId) {
                renderProductDetail(productId);
            }

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
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// --- SLIDERS ---
const heroSlider = new Swiper('.hero-slider', { loop: true, autoplay: { delay: 4000 }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
const projectSlider = new Swiper('.project-slider', { loop: true, slidesPerView: 1, spaceBetween: 20, pagination: { el: '.swiper-pagination', clickable: true }, breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 30 } } });
const featuredProductSlider = new Swiper('.featured-product-slider', { loop: true, slidesPerView: 2, spaceBetween: 20, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4, spaceBetween: 30 } } });
const partnerSlider = new Swiper('.partner-slider', { loop: true, grabCursor: true, autoplay: { delay: 2500, disableOnInteraction: false }, breakpoints: { 320: { slidesPerView: 2, spaceBetween: 20 }, 640: { slidesPerView: 3, spaceBetween: 30 }, 1024: { slidesPerView: 5, spaceBetween: 40 } } });


// --- PRODUCT TABS LOGIC ---
const tabs = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;
        tabs.forEach(t => {
            t.classList.remove('active', 'text-green-primary', 'border-green-primary');
            t.classList.add('text-gray-500', 'border-transparent');
        });
        tabContents.forEach(c => c.classList.add('hidden'));
        
        tab.classList.add('active', 'text-green-primary', 'border-green-primary');
        tab.classList.remove('text-gray-500', 'border-transparent');
        const targetContent = document.getElementById(targetId);
        if(targetContent) {
            targetContent.classList.remove('hidden');
        }
    });
});

// Khởi tạo trang mặc định khi tải
showPage('homepage');