/* =========================================================
   TECHNOVA COMPUTER SHOP
   ========================================================= */


/* =========================================================
   PRODUCT DATA
   ========================================================= */

const products = [

    {
        id: 1,
        name: "ASUS ROG Strix G16",
        category: "laptop",
        categoryName: "Gaming Laptop",

        price: 1499,
        oldPrice: 1799,
        discount: 17,

        status: "new",
        statusText: "NEW",

        image:
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=85",

        rating: 4.9,

        description:
            "A powerful gaming laptop built for serious gaming, content creation and demanding applications.",

        specs: {
            CPU: "Intel Core i9",
            GPU: "RTX 4070",
            RAM: "32GB DDR5",
            Storage: "1TB NVMe SSD",
            Display: "16-inch 240Hz",
            OS: "Windows 11"
        }
    },

    {
        id: 2,
        name: "MacBook Pro 14",
        category: "laptop",
        categoryName: "Professional Laptop",

        price: 1899,
        oldPrice: 2099,
        discount: 10,

        status: "new",
        statusText: "NEW",

        image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",

        rating: 4.8,

        description:
            "A premium professional laptop with excellent performance, battery life and a stunning display.",

        specs: {
            CPU: "Apple M3 Pro",
            GPU: "Integrated GPU",
            RAM: "18GB",
            Storage: "512GB SSD",
            Display: "14.2-inch Retina",
            OS: "macOS"
        }
    },

    {
        id: 3,
        name: "Gaming PC RTX 4080",
        category: "desktop",
        categoryName: "Gaming PC",

        price: 2299,
        oldPrice: 2599,
        discount: 12,

        status: "new",
        statusText: "NEW",

        image:
            "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=900&q=85",

        rating: 4.9,

        description:
            "High-end gaming desktop designed for ultra settings, streaming and demanding creative workloads.",

        specs: {
            CPU: "Ryzen 9 7950X",
            GPU: "RTX 4080",
            RAM: "32GB DDR5",
            Storage: "2TB NVMe",
            Cooling: "Liquid Cooling",
            PSU: "850W Gold"
        }
    },

    {
        id: 4,
        name: "RTX 4070 SUPER",
        category: "component",
        categoryName: "Graphics Card",

        price: 699,
        oldPrice: 799,
        discount: 13,

        status: "available",
        statusText: "SALE",

        image:
            "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",

        rating: 4.8,

        description:
            "A high-performance graphics card delivering excellent gaming performance at high resolutions.",

        specs: {
            Memory: "12GB GDDR6X",
            Interface: "PCIe 4.0",
            Boost: "2.48 GHz",
            HDMI: "HDMI 2.1",
            Ports: "3x DisplayPort",
            Cooling: "Triple Fan"
        }
    },

    {
        id: 5,
        name: "Samsung 990 PRO 2TB",
        category: "component",
        categoryName: "NVMe SSD",

        price: 169,
        oldPrice: 199,
        discount: 15,

        status: "available",
        statusText: "SALE",

        image:
            "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85",

        rating: 4.9,

        description:
            "Fast PCIe 4.0 NVMe SSD designed for high-speed gaming, editing and professional workloads.",

        specs: {
            Capacity: "2TB",
            Interface: "PCIe 4.0",
            Read: "7,450 MB/s",
            Write: "6,900 MB/s",
            Form: "M.2 2280",
            Warranty: "5 Years"
        }
    },

    {
        id: 6,
        name: "LG UltraGear 27GR",
        category: "monitor",
        categoryName: "Gaming Monitor",

        price: 349,
        oldPrice: 399,
        discount: 13,

        status: "new",
        statusText: "NEW",

        image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",

        rating: 4.7,

        description:
            "A fast gaming monitor with a high refresh rate and responsive panel for competitive gaming.",

        specs: {
            Size: "27-inch",
            Resolution: "2560 x 1440",
            Refresh: "180Hz",
            Response: "1ms",
            Panel: "IPS",
            HDR: "HDR10"
        }
    },

    {
        id: 7,
        name: "Mechanical RGB Keyboard",
        category: "accessory",
        categoryName: "Gaming Keyboard",

        price: 89,
        oldPrice: 109,
        discount: 18,

        status: "available",
        statusText: "SALE",

        image:
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",

        rating: 4.6,

        description:
            "A responsive mechanical keyboard featuring customizable RGB lighting and comfortable switches.",

        specs: {
            Switches: "Mechanical",
            Layout: "87 Keys",
            Lighting: "RGB",
            Connection: "USB-C",
            Material: "Aluminum",
            Software: "Windows"
        }
    },

    {
        id: 8,
        name: "Wireless Gaming Mouse",
        category: "accessory",
        categoryName: "Gaming Mouse",

        price: 59,
        oldPrice: 79,
        discount: 25,

        status: "available",
        statusText: "SALE",

        image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",

        rating: 4.5,

        description:
            "Lightweight wireless gaming mouse designed for precise control and comfortable long sessions.",

        specs: {
            Sensor: "26K DPI",
            Weight: "63g",
            Connection: "2.4GHz",
            Battery: "70 Hours",
            Buttons: "6",
            Lighting: "RGB"
        }
    },

    {
        id: 9,
        name: "AMD Ryzen 7 7800X3D",
        category: "component",
        categoryName: "Desktop CPU",

        price: 399,
        oldPrice: 449,
        discount: 11,

        status: "available",
        statusText: "SALE",

        image:
            "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",

        rating: 4.9,

        description:
            "A high-performance gaming processor with excellent gaming efficiency and 3D V-Cache technology.",

        specs: {
            Cores: "8 Cores",
            Threads: "16 Threads",
            Boost: "5.0 GHz",
            Socket: "AM5",
            Cache: "96MB",
            TDP: "120W"
        }
    },

    {
        id: 10,
        name: "DDR5 32GB Gaming RAM",
        category: "component",
        categoryName: "Desktop Memory",

        price: 109,
        oldPrice: 139,
        discount: 22,

        status: "available",
        statusText: "SALE",

        image:
            "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=85",

        rating: 4.7,

        description:
            "High-speed DDR5 memory designed for modern gaming PCs and demanding applications.",

        specs: {
            Capacity: "32GB",
            Type: "DDR5",
            Speed: "6000MHz",
            Kit: "2 x 16GB",
            Voltage: "1.35V",
            RGB: "Yes"
        }
    },

    {
        id: 11,
        name: "Alienware Gaming Desktop",
        category: "desktop",
        categoryName: "Gaming Desktop",

        price: 2799,
        oldPrice: 3199,
        discount: 13,

        status: "sold",
        statusText: "SOLD OUT",

        image:
            "https://images.unsplash.com/photo-1587202372162-9c8c1b5e4f2e?auto=format&fit=crop&w=900&q=85",

        rating: 4.8,

        description:
            "Premium gaming desktop with powerful hardware and a distinctive gaming-focused design.",

        specs: {
            CPU: "Intel Core i9",
            GPU: "RTX 4090",
            RAM: "64GB DDR5",
            Storage: "2TB SSD",
            Cooling: "Liquid Cooling",
            PSU: "1000W"
        }
    },

    {
        id: 12,
        name: "UltraWide 34-inch Monitor",
        category: "monitor",
        categoryName: "Ultrawide Monitor",

        price: 499,
        oldPrice: 599,
        discount: 17,

        status: "available",
        statusText: "SALE",

        image:
            "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=900&q=85",

        rating: 4.7,

        description:
            "Immersive ultrawide display perfect for productivity, multitasking, gaming and creative work.",

        specs: {
            Size: "34-inch",
            Resolution: "3440 x 1440",
            Refresh: "165Hz",
            Panel: "VA",
            Response: "1ms",
            HDR: "HDR400"
        }
    }
];


/* =========================================================
   VARIABLES
   ========================================================= */

let currentCategory = "all";
let currentSearch = "";
let currentProduct = null;

let cart = [];

let heroSlide = 0;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const sortProducts =
    document.getElementById("sortProducts");

const productResultText =
    document.getElementById("productResultText");

const noProducts =
    document.getElementById("noProducts");

const resetProducts =
    document.getElementById("resetProducts");

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalCategory =
    document.getElementById("modalCategory");

const modalPrice =
    document.getElementById("modalPrice");

const modalOldPrice =
    document.getElementById("modalOldPrice");

const modalDiscount =
    document.getElementById("modalDiscount");

const modalDescription =
    document.getElementById("modalDescription");

const modalSpecs =
    document.getElementById("modalSpecs");

const modalStatus =
    document.getElementById("modalStatus");

const modalBuyBtn =
    document.getElementById("modalBuyBtn");

const cartBtn =
    document.getElementById("cartBtn");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.getElementById("cartCount");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const themeBtn =
    document.getElementById("themeBtn");

const themeIcon =
    document.getElementById("themeIcon");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const categoryNav =
    document.getElementById("categoryNav");

const backToTop =
    document.getElementById("backToTop");

const shopNowBtn =
    document.getElementById("shopNowBtn");

const dealBtn =
    document.getElementById("dealBtn");

const wishlistBtn =
    document.getElementById("wishlistBtn");


/* =========================================================
   DISPLAY PRODUCTS
   ========================================================= */

function displayProducts() {

    let filteredProducts = [...products];

    /* Category filter */

    if (currentCategory !== "all") {
        filteredProducts = filteredProducts.filter(
            product => product.category === currentCategory
        );
    }


    /* Search filter */

    if (currentSearch.trim() !== "") {

        const search =
            currentSearch.toLowerCase().trim();

        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(search) ||
            product.categoryName.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search)
        );
    }


    /* Sort */

    const sortValue = sortProducts.value;

    if (sortValue === "price-low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    } else if (sortValue === "price-high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    } else if (sortValue === "name") {

        filteredProducts.sort(
            (a, b) => a.name.localeCompare(b.name)
        );

    } else if (sortValue === "new") {

        filteredProducts.sort((a, b) => {

            if (a.status === "new" && b.status !== "new") {
                return -1;
            }

            if (a.status !== "new" && b.status === "new") {
                return 1;
            }

            return 0;
        });
    }


    /* Clear grid */

    productsGrid.innerHTML = "";


    /* No result */

    if (filteredProducts.length === 0) {

        noProducts.style.display = "block";

        productResultText.textContent =
            "No products found";

        return;
    }


    noProducts.style.display = "none";


    /* Result text */

    if (currentCategory === "all" && currentSearch === "") {

        productResultText.textContent =
            `Showing all ${filteredProducts.length} products`;

    } else {

        productResultText.textContent =
            `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""}`;
    }


    /* Generate cards */

    filteredProducts.forEach(product => {

        productsGrid.appendChild(
            createProductCard(product)
        );

    });
}


/* =========================================================
   CREATE PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

    const card =
        document.createElement("article");

    card.className = "product-card";


    /* Badges */

    let badges = "";

    if (product.status === "new") {

        badges += `
            <span class="badge new">
                NEW
            </span>
        `;

    } else if (product.status === "sold") {

        badges += `
            <span class="badge sold">
                SOLD OUT
            </span>
        `;
    }

    if (product.discount) {

        badges += `
            <span class="badge discount">
                -${product.discount}%
            </span>
        `;
    }


    /* Buy button */

    let buyButton = "";

    if (product.status === "sold") {

        buyButton = `
            <button
                class="card-buy sold-out"
                disabled
                title="Sold Out"
            >
                <i class="fa-solid fa-ban"></i>
            </button>
        `;

    } else {

        buyButton = `
            <button
                class="card-buy"
                data-buy="${product.id}"
                title="Add to Cart"
            >
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        `;
    }


    card.innerHTML = `

        <div
            class="product-image"
            data-product="${product.id}"
        >

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <div class="product-badges">
                ${badges}
            </div>

            <div class="image-overlay">
                <div class="view-product">
                    <i class="fa-solid fa-eye"></i>
                </div>
            </div>

        </div>


        <div class="product-info">

            <span class="product-category">
                ${product.categoryName}
            </span>

            <h3 class="product-name">
                ${product.name}
            </h3>

            <div class="product-rating">

                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>

                <span>
                    (${product.rating})
                </span>

            </div>


            <div class="price-row">

                <div class="price">

                    <strong class="current-price">
                        $${product.price.toLocaleString()}
                    </strong>

                    ${
                        product.oldPrice
                        ? `
                            <del class="old-price">
                                $${product.oldPrice.toLocaleString()}
                            </del>
                        `
                        : ""
                    }

                </div>

                ${buyButton}

            </div>

        </div>
    `;


    /* Click image */

    const image =
        card.querySelector(".product-image");

    image.addEventListener("click", () => {

        openProductModal(product.id);

    });


    /* Buy button */

    const buy =
        card.querySelector("[data-buy]");

    if (buy) {

        buy.addEventListener("click", event => {

            event.stopPropagation();

            addToCart(product.id);

        });
    }


    return card;
}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProductModal(productId) {

    const product =
        products.find(p => p.id === productId);

    if (!product) return;

    currentProduct = product;


    modalImage.src = product.image;

    modalImage.alt = product.name;

    modalName.textContent = product.name;

    modalCategory.textContent =
        product.categoryName;

    modalPrice.textContent =
        `$${product.price.toLocaleString()}`;

    modalDescription.textContent =
        product.description;


    /* Old price */

    if (product.oldPrice) {

        modalOldPrice.style.display = "inline";

        modalOldPrice.textContent =
            `$${product.oldPrice.toLocaleString()}`;

    } else {

        modalOldPrice.style.display = "none";
    }


    /* Discount */

    if (product.discount) {

        modalDiscount.style.display = "inline";

        modalDiscount.textContent =
            `-${product.discount}%`;

    } else {

        modalDiscount.style.display = "none";
    }


    /* Status */

    modalStatus.textContent =
        product.statusText;

    if (product.status === "sold") {

        modalStatus.style.background =
            "#ef4444";

    } else if (product.status === "new") {

        modalStatus.style.background =
            "#10b981";

    } else {

        modalStatus.style.background =
            "#2563eb";
    }


    /* Specifications */

    modalSpecs.innerHTML = "";

    Object.entries(product.specs).forEach(
        ([key, value]) => {

            const spec =
                document.createElement("div");

            spec.className = "spec-item";

            spec.innerHTML = `
                <strong>${key}</strong>
                <span>${value}</span>
            `;

            modalSpecs.appendChild(spec);
        }
    );


    /* Buy button */

    if (product.status === "sold") {

        modalBuyBtn.disabled = true;

        modalBuyBtn.classList.add("disabled");

        modalBuyBtn.innerHTML = `
            <i class="fa-solid fa-ban"></i>
            SOLD OUT
        `;

    } else {

        modalBuyBtn.disabled = false;

        modalBuyBtn.classList.remove("disabled");

        modalBuyBtn.innerHTML = `
            <i class="fa-solid fa-cart-shopping"></i>
            GO TO BUY
        `;
    }


    productModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeProductModal() {

    productModal.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================================
   MODAL EVENTS
   ========================================================= */

modalClose.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    event => {

        if (event.target === productModal) {

            closeProductModal();

        }
    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProductModal();

            closeCartSidebar();
        }
    }
);


/* =========================================================
   GO TO BUY
   ========================================================= */

modalBuyBtn.addEventListener(
    "click",
    () => {

        if (!currentProduct) return;

        if (currentProduct.status === "sold") {
            return;
        }

        addToCart(currentProduct.id);

        closeProductModal();

        openCartSidebar();
    }
);


/* =========================================================
   CART
   ========================================================= */

function addToCart(productId) {

    const product =
        products.find(p => p.id === productId);

    if (!product || product.status === "sold") {
        return;
    }


    const existing =
        cart.find(item => item.id === productId);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });
    }


    updateCart();

    showNotification(
        `${product.name} added to cart`
    );
}


function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);

    updateCart();
}


function updateCart() {

    cartItems.innerHTML = "";


    let total = 0;
    let count = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

        count += item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <strong>
                    $${item.price.toLocaleString()}
                    × ${item.quantity}
                </strong>

            </div>

            <button
                class="remove-cart"
                data-remove="${item.id}"
                title="Remove"
            >
                <i class="fa-solid fa-trash"></i>
            </button>
        `;


        cartItems.appendChild(cartItem);


        cartItem
            .querySelector("[data-remove]")
            .addEventListener(
                "click",
                () => removeFromCart(item.id)
            );
    });


    cartTotal.textContent =
        `$${total.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;


    cartCount.textContent = count;


    if (cart.length === 0) {

        cartEmpty.style.display = "flex";

    } else {

        cartEmpty.style.display = "none";
    }
}


/* =========================================================
   CART SIDEBAR
   ========================================================= */

function openCartSidebar() {

    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCartSidebar() {

    cartOverlay.classList.remove("active");

    document.body.style.overflow = "";
}


cartBtn.addEventListener(
    "click",
    openCartSidebar
);


closeCart.addEventListener(
    "click",
    closeCartSidebar
);


cartOverlay.addEventListener(
    "click",
    event => {

        if (event.target === cartOverlay) {

            closeCartSidebar();
        }
    }
);


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value;

        if (currentSearch.trim() !== "") {

            clearSearch.style.display =
                "block";

        } else {

            clearSearch.style.display =
                "none";
        }

        displayProducts();
    }
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        currentSearch = "";

        clearSearch.style.display =
            "none";

        displayProducts();

        searchInput.focus();
    }
);


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            currentCategory =
                button.dataset.category;


            displayProducts();


            document
                .getElementById("productsSection")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
        }
    );
});


/* =========================================================
   SORT
   ========================================================= */

sortProducts.addEventListener(
    "change",
    displayProducts
);


/* =========================================================
   RESET PRODUCTS
   ========================================================= */

resetProducts.addEventListener(
    "click",
    () => {

        currentCategory = "all";

        currentSearch = "";

        searchInput.value = "";

        clearSearch.style.display =
            "none";

        sortProducts.value =
            "default";


        categoryButtons.forEach(button => {

            button.classList.remove("active");

            if (button.dataset.category === "all") {

                button.classList.add("active");
            }
        });


        displayProducts();
    }
);


/* =========================================================
   HERO SHOP BUTTON
   ========================================================= */

shopNowBtn.addEventListener(
    "click",
    () => {

        document
            .getElementById("productsSection")
            .scrollIntoView({
                behavior: "smooth"
            });
    }
);


dealBtn.addEventListener(
    "click",
    () => {

        currentCategory = "all";

        currentSearch = "";

        searchInput.value = "";

        sortProducts.value =
            "price-low";


        categoryButtons.forEach(button => {

            button.classList.remove("active");

        });

        categoryButtons[0].classList.add("active");


        displayProducts();


        document
            .getElementById("productsSection")
            .scrollIntoView({
                behavior: "smooth"
            });
    }
);


/* =========================================================
   THEME
   ========================================================= */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            themeIcon.className =
                "fa-solid fa-sun";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeIcon.className =
                "fa-solid fa-moon";

            localStorage.setItem(
                "theme",
                "light"
            );
        }
    }
);


/* Load saved theme */

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark");

    themeIcon.className =
        "fa-solid fa-sun";
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

mobileMenuBtn.addEventListener(
    "click",
    () => {

        categoryNav.classList.toggle(
            "mobile-open"
        );


        const icon =
            mobileMenuBtn.querySelector("i");


        if (
            categoryNav.classList.contains(
                "mobile-open"
            )
        ) {

            icon.className =
                "fa-solid fa-xmark";

        } else {

            icon.className =
                "fa-solid fa-bars";
        }
    }
);


/* =========================================================
   BACK TO TOP
   ========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");
        }
    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


/* =========================================================
   WISHLIST
   ========================================================= */

wishlistBtn.addEventListener(
    "click",
    () => {

        const icon =
            wishlistBtn.querySelector("i");


        if (
            icon.classList.contains(
                "fa-regular"
            )
        ) {

            icon.classList.remove(
                "fa-regular"
            );

            icon.classList.add(
                "fa-solid"
            );

            wishlistBtn.style.color =
                "#ef4444";

        } else {

            icon.classList.remove(
                "fa-solid"
            );

            icon.classList.add(
                "fa-regular"
            );

            wishlistBtn.style.color =
                "";
        }
    }
);


/* =========================================================
   CHECKOUT
   ========================================================= */

checkoutBtn.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            showNotification(
                "Your cart is empty"
            );

            return;
        }


        showNotification(
            "Checkout system coming soon!"
        );
    }
);


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.style.position =
        "fixed";

    notification.style.bottom =
        "25px";

    notification.style.left =
        "50%";

    notification.style.transform =
        "translateX(-50%) translateY(20px)";

    notification.style.zIndex =
        "5000";

    notification.style.padding =
        "13px 20px";

    notification.style.color =
        "white";

    notification.style.background =
        "#111827";

    notification.style.borderRadius =
        "10px";

    notification.style.fontSize =
        "13px";

    notification.style.fontWeight =
        "600";

    notification.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.25)";

    notification.style.opacity =
        "0";

    notification.style.transition =
        "0.3s ease";

    notification.textContent =
        message;


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.style.opacity =
            "1";

        notification.style.transform =
            "translateX(-50%) translateY(0)";

    }, 10);


    setTimeout(() => {

        notification.style.opacity =
            "0";

        notification.style.transform =
            "translateX(-50%) translateY(20px)";


        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 2500);
}


/* =========================================================
   HERO AUTO SLIDER
   ========================================================= */

const heroImages = [

    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=85",

    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=85",

    "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=85"
];


const heroImage =
    document.querySelector(".hero-product img");

const heroDots =
    document.querySelectorAll(".hero-dot");


function changeHeroSlide(index) {

    heroSlide = index;

    heroImage.style.opacity = "0";

    setTimeout(() => {

        heroImage.src =
            heroImages[heroSlide];

        heroImage.style.opacity =
            "1";

    }, 200);


    heroDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === heroSlide
        );
    });
}


heroDots.forEach((dot, index) => {

    dot.addEventListener(
        "click",
        () => {

            changeHeroSlide(index);
        }
    );
});


setInterval(() => {

    heroSlide =
        (heroSlide + 1) %
        heroImages.length;

    changeHeroSlide(heroSlide);

}, 5000);


/* =========================================================
   INITIALIZE
   ========================================================= */

displayProducts();

updateCart();