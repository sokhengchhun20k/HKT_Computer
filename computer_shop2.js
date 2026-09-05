/* =========================================================
   TECHNOVA COMPUTER SHOP
   CUSTOMER + AUTHENTICATION + CART
   ========================================================= */


/* =========================================================
   STORAGE
   ========================================================= */

const PRODUCTS_KEY = "technova_products";
const USERS_KEY = "technova_users";
const CURRENT_USER_KEY = "technova_current_user";
const ORDERS_KEY = "technova_orders";

const ADMIN_EMAIL = "admin@technova.com";
const ADMIN_PASSWORD = "TechNovaAdmin123";


/* =========================================================
   DEFAULT PRODUCTS
   ========================================================= */

const defaultProducts = [

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
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=85",
        rating: 4.9,
        description: "Powerful gaming laptop designed for gaming and content creation.",
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
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
        rating: 4.8,
        description: "Professional laptop with Apple's powerful M3 Pro chip.",
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
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=900&q=85",
        rating: 4.9,
        description: "High-performance gaming desktop built for demanding games.",
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
        statusText: "AVAILABLE",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",
        rating: 4.8,
        description: "Powerful graphics card for high-performance gaming.",
        specs: {
            Memory: "12GB GDDR6X",
            Interface: "PCIe 4.0",
            Clock: "2.48 GHz",
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
        statusText: "AVAILABLE",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85",
        rating: 4.9,
        description: "Ultra-fast PCIe 4.0 NVMe SSD for gaming and productivity.",
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
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
        rating: 4.7,
        description: "Fast and immersive gaming monitor with high refresh rate.",
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
        statusText: "AVAILABLE",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
        rating: 4.6,
        description: "Mechanical gaming keyboard with customizable RGB lighting.",
        specs: {
            Type: "Mechanical",
            Keys: "87 Keys",
            Lighting: "RGB",
            Connection: "USB-C",
            Frame: "Aluminum",
            OS: "Windows"
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
        statusText: "AVAILABLE",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
        rating: 4.5,
        description: "Lightweight wireless gaming mouse with precise tracking.",
        specs: {
            DPI: "26K DPI",
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
        statusText: "AVAILABLE",
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",
        rating: 4.9,
        description: "High-performance gaming CPU with 3D V-Cache technology.",
        specs: {
            Cores: "8 Cores",
            Threads: "16 Threads",
            Speed: "5.0 GHz",
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
        statusText: "AVAILABLE",
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=85",
        rating: 4.7,
        description: "Fast DDR5 gaming memory for modern desktop systems.",
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
        image: "https://images.unsplash.com/photo-1587202372162-9c8c1b5e4f2e?auto=format&fit=crop&w=900&q=85",
        rating: 4.8,
        description: "Premium gaming desktop with extreme performance.",
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
        statusText: "AVAILABLE",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=900&q=85",
        rating: 4.7,
        description: "Immersive ultrawide monitor for gaming and productivity.",
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
   LOAD PRODUCTS
   ========================================================= */

let products = [];

function loadProducts() {

    try {

        const savedProducts =
            localStorage.getItem(PRODUCTS_KEY);

        if (savedProducts) {

            products = JSON.parse(savedProducts);

        } else {

            products = [...defaultProducts];

            localStorage.setItem(
                PRODUCTS_KEY,
                JSON.stringify(products)
            );

        }

    } catch (error) {

        console.error(
            "Could not load products:",
            error
        );

        products = [...defaultProducts];

    }

}


/* =========================================================
   ADMIN USER
   ========================================================= */

function initializeAdmin() {

    let users = [];

    try {

        users =
            JSON.parse(
                localStorage.getItem(USERS_KEY)
            ) || [];

    } catch {

        users = [];

    }

    const adminExists =
        users.some(
            user =>
                user.email.toLowerCase() ===
                ADMIN_EMAIL.toLowerCase()
        );

    if (!adminExists) {

        users.push({

            id: "admin",

            name: "TechNova Admin",

            email: ADMIN_EMAIL,

            password: ADMIN_PASSWORD,

            role: "admin",

            createdAt:
                new Date().toISOString()

        });

        localStorage.setItem(
            USERS_KEY,
            JSON.stringify(users)
        );

    }

}


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let currentCategory = "all";
let currentSearch = "";
let currentProduct = null;

let cart = [];

let heroSlide = 0;

let pendingBuyProductId = null;


/* =========================================================
   DOM
   ========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const productResultText =
    document.getElementById("productResultText");

const noProducts =
    document.getElementById("noProducts");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const sortProducts =
    document.getElementById("sortProducts");

const productsSection =
    document.getElementById("productsSection");

const cartBtn =
    document.getElementById("cartBtn");

const cartCount =
    document.getElementById("cartCount");

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

const checkoutBtn =
    document.getElementById("checkoutBtn");


/* =========================================================
   AUTH DOM
   ========================================================= */

const accountBtn =
    document.getElementById("accountBtn");

const accountIcon =
    document.getElementById("accountIcon");

const accountText =
    document.getElementById("accountText");

const authModal =
    document.getElementById("authModal");

const authClose =
    document.getElementById("authClose");

const loginPanel =
    document.getElementById("loginPanel");

const registerPanel =
    document.getElementById("registerPanel");

const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");

const showRegister =
    document.getElementById("showRegister");

const showLogin =
    document.getElementById("showLogin");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");

const registerName =
    document.getElementById("registerName");

const registerEmail =
    document.getElementById("registerEmail");

const registerPassword =
    document.getElementById("registerPassword");

const registerConfirmPassword =
    document.getElementById(
        "registerConfirmPassword"
    );


/* =========================================================
   AUTH FUNCTIONS
   ========================================================= */

function getCurrentUser() {

    try {

        return JSON.parse(
            localStorage.getItem(
                CURRENT_USER_KEY
            )
        );

    } catch {

        return null;

    }

}


function saveCurrentUser(user) {

    localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(user)
    );

}


function logoutUser() {

    localStorage.removeItem(
        CURRENT_USER_KEY
    );

    updateAccountUI();

    showNotification(
        "You have been logged out."
    );

}


function updateAccountUI() {

    const user = getCurrentUser();

    if (!user) {

        accountText.textContent = "Account";

        accountIcon.className =
            "fa-solid fa-user";

        accountBtn.title =
            "Login / Register";

        return;

    }

    accountIcon.className =
        "fa-solid fa-user-check";

    if (user.role === "admin") {

        accountText.textContent =
            "Admin";

        accountBtn.title =
            "Open Admin Dashboard";

    } else {

        accountText.textContent =
            user.name.split(" ")[0];

        accountBtn.title =
            "Account";

    }

}


function openAuthModal(mode = "login") {

    authModal.classList.add("active");

    if (mode === "register") {

        loginPanel.classList.add("hidden");

        registerPanel.classList.remove(
            "hidden"
        );

    } else {

        registerPanel.classList.add("hidden");

        loginPanel.classList.remove(
            "hidden"
        );

    }

}


function closeAuthModal() {

    authModal.classList.remove("active");

}


function continuePendingBuy() {

    if (pendingBuyProductId === null) {
        return;
    }

    const productId =
        pendingBuyProductId;

    pendingBuyProductId = null;

    const product =
        products.find(
            p => Number(p.id) === Number(productId)
        );

    if (!product) {
        return;
    }

    if (product.status === "sold") {
        return;
    }

    addToCart(product.id);

    openCart();

}


/* =========================================================
   ACCOUNT BUTTON
   ========================================================= */

accountBtn.addEventListener(
    "click",
    () => {

        const user = getCurrentUser();

        if (!user) {

            openAuthModal("login");

            return;

        }

        if (user.role === "admin") {

            // INSTANT ADMIN REDIRECT
            window.location.href = "admin.html";

            return;

        }

        const shouldLogout =
            confirm(
                `Logged in as ${user.name}.\n\nDo you want to logout?`
            );

        if (shouldLogout) {

            logoutUser();

        }

    }
);


/* =========================================================
   LOGIN
   ========================================================= */

loginForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const email =
            loginEmail.value
                .trim()
                .toLowerCase();

        const password =
            loginPassword.value;

        let users = [];

        try {

            users =
                JSON.parse(
                    localStorage.getItem(
                        USERS_KEY
                    )
                ) || [];

        } catch {

            users = [];

        }

        const user =
            users.find(
                item =>
                    item.email.toLowerCase() === email &&
                    item.password === password
            );

        if (!user) {

            showNotification(
                "Invalid email or password.",
                "error"
            );

            return;

        }

        saveCurrentUser(user);

        loginForm.reset();

        closeAuthModal();

        updateAccountUI();


        /* =================================================
           ADMIN LOGIN
           NO DELAY
           ================================================= */

        if (user.role === "admin") {

            // Direct navigation.
            // No setTimeout / fake delay.
            window.location.href = "admin.html";

            return;

        }


        /* =================================================
           CUSTOMER LOGIN
           ================================================= */

        showNotification(
            `Welcome back, ${user.name}!`
        );

        continuePendingBuy();

    }
);


/* =========================================================
   REGISTER
   ========================================================= */

registerForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const name =
            registerName.value.trim();

        const email =
            registerEmail.value
                .trim()
                .toLowerCase();

        const password =
            registerPassword.value;

        const confirmPassword =
            registerConfirmPassword.value;


        if (password !== confirmPassword) {

            showNotification(
                "Passwords do not match.",
                "error"
            );

            return;

        }


        if (password.length < 6) {

            showNotification(
                "Password must be at least 6 characters.",
                "error"
            );

            return;

        }


        let users = [];

        try {

            users =
                JSON.parse(
                    localStorage.getItem(
                        USERS_KEY
                    )
                ) || [];

        } catch {

            users = [];

        }


        const existingUser =
            users.find(
                user =>
                    user.email.toLowerCase() ===
                    email
            );


        if (existingUser) {

            showNotification(
                "An account with this email already exists.",
                "error"
            );

            return;

        }


        const newUser = {

            id:
                "user_" +
                Date.now(),

            name,

            email,

            password,

            role: "customer",

            createdAt:
                new Date().toISOString()

        };


        users.push(newUser);


        localStorage.setItem(
            USERS_KEY,
            JSON.stringify(users)
        );


        saveCurrentUser(newUser);


        registerForm.reset();

        closeAuthModal();

        updateAccountUI();


        showNotification(
            `Welcome to TechNova, ${name}!`
        );


        continuePendingBuy();

    }
);


/* =========================================================
   AUTH SWITCH
   ========================================================= */

showRegister.addEventListener(
    "click",
    () => {

        loginPanel.classList.add("hidden");

        registerPanel.classList.remove(
            "hidden"
        );

    }
);


showLogin.addEventListener(
    "click",
    () => {

        registerPanel.classList.add(
            "hidden"
        );

        loginPanel.classList.remove(
            "hidden"
        );

    }
);


authClose.addEventListener(
    "click",
    closeAuthModal
);


authModal.addEventListener(
    "click",
    event => {

        if (event.target === authModal) {

            closeAuthModal();

        }

    }
);


/* =========================================================
   BUY HANDLER
   ========================================================= */

function handleBuy(productId) {

    const product =
        products.find(
            p => Number(p.id) === Number(productId)
        );

    if (!product) {
        return;
    }


    if (product.status === "sold") {

        showNotification(
            "This product is sold out.",
            "error"
        );

        return;

    }


    const user = getCurrentUser();


    if (!user) {

        pendingBuyProductId =
            productId;

        openAuthModal("login");

        return;

    }


    addToCart(productId);

    openCart();

}


/* =========================================================
   DISPLAY PRODUCTS
   ========================================================= */

function displayProducts() {

    let filteredProducts =
        products.filter(product => {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        currentSearch.toLowerCase()
                    ) ||
                product.categoryName
                    .toLowerCase()
                    .includes(
                        currentSearch.toLowerCase()
                    );


            return categoryMatch &&
                   searchMatch;

        });


    const sort =
        sortProducts.value;


    if (sort === "price-low") {

        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "price-high") {

        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sort === "name") {

        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    if (sort === "new") {

        filteredProducts.sort(
            (a, b) =>
                b.id - a.id
        );

    }


    productsGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        noProducts.style.display =
            "block";

        productResultText.textContent =
            "No products found";

        return;

    }


    noProducts.style.display =
        "none";


    productResultText.textContent =
        `Showing ${filteredProducts.length} product${
            filteredProducts.length === 1
                ? ""
                : "s"
        }`;


    filteredProducts.forEach(product => {

        productsGrid.appendChild(
            createProductCard(product)
        );

    });

}


function createProductCard(product) {

    const card =
        document.createElement("article");


    card.className =
        "product-card";


    card.innerHTML = `

        <div class="product-image">

            <img
                src="${product.image}"
                alt="${product.name}"
                data-product="${product.id}"
            >

            <span class="product-status ${product.status}">
                ${product.statusText}
            </span>

            ${
                product.discount
                    ? `
                        <span class="discount-badge">
                            -${product.discount}%
                        </span>
                    `
                    : ""
            }

        </div>


        <div class="product-info">

            <span class="product-category">
                ${product.categoryName}
            </span>

            <h3>
                ${product.name}
            </h3>


            <div class="product-rating">

                <span>
                    ${"★".repeat(
                        Math.round(product.rating)
                    )}
                </span>

                <small>
                    ${product.rating}
                </small>

            </div>


            <div class="product-price">

                <strong>
                    $${product.price.toLocaleString()}
                </strong>

                ${
                    product.oldPrice
                        ? `
                            <del>
                                $${product.oldPrice.toLocaleString()}
                            </del>
                        `
                        : ""
                }

            </div>


            <button
                class="buy-btn"
                data-buy="${product.id}"
                ${
                    product.status === "sold"
                        ? "disabled"
                        : ""
                }
            >

                <i class="fa-solid fa-cart-shopping"></i>

                ${
                    product.status === "sold"
                        ? "SOLD OUT"
                        : "GO TO BUY"
                }

            </button>

        </div>
    `;


    card.addEventListener(
        "click",
        event => {

            const buyButton =
                event.target.closest(
                    "[data-buy]"
                );


            if (buyButton) {

                event.stopPropagation();

                handleBuy(
                    Number(
                        buyButton.dataset.buy
                    )
                );

                return;

            }


            const image =
                event.target.closest(
                    "[data-product]"
                );


            if (image) {

                openProductModal(
                    Number(
                        image.dataset.product
                    )
                );

                return;

            }


            const info =
                event.target.closest(
                    ".product-info"
                );


            if (info) {

                openProductModal(
                    product.id
                );

            }

        }
    );


    return card;

}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

const productModal =
    document.getElementById(
        "productModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalStatus =
    document.getElementById(
        "modalStatus"
    );


const modalCategory =
    document.getElementById(
        "modalCategory"
    );


const modalName =
    document.getElementById(
        "modalName"
    );


const modalPrice =
    document.getElementById(
        "modalPrice"
    );


const modalOldPrice =
    document.getElementById(
        "modalOldPrice"
    );


const modalDiscount =
    document.getElementById(
        "modalDiscount"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const modalSpecs =
    document.getElementById(
        "modalSpecs"
    );


const modalBuyBtn =
    document.getElementById(
        "modalBuyBtn"
    );


function openProductModal(productId) {

    const product =
        products.find(
            p => Number(p.id) === Number(productId)
        );


    if (!product) {
        return;
    }


    currentProduct =
        product;


    modalImage.src =
        product.image;


    modalImage.alt =
        product.name;


    modalStatus.textContent =
        product.statusText;


    modalCategory.textContent =
        product.categoryName;


    modalName.textContent =
        product.name;


    modalPrice.textContent =
        `$${product.price.toLocaleString()}`;


    if (product.oldPrice) {

        modalOldPrice.textContent =
            `$${product.oldPrice.toLocaleString()}`;

        modalOldPrice.style.display =
            "inline";

    } else {

        modalOldPrice.style.display =
            "none";

    }


    if (product.discount) {

        modalDiscount.textContent =
            `-${product.discount}%`;

        modalDiscount.style.display =
            "inline";

    } else {

        modalDiscount.style.display =
            "none";

    }


    modalDescription.textContent =
        product.description;


    modalSpecs.innerHTML = "";


    Object.entries(product.specs)
        .forEach(
            ([key, value]) => {

                const spec =
                    document.createElement("div");


                spec.className =
                    "spec-item";


                spec.innerHTML = `
                    <span>${key}</span>
                    <strong>${value}</strong>
                `;


                modalSpecs.appendChild(spec);

            }
        );


    productModal.classList.add(
        "active"
    );

}


modalClose.addEventListener(
    "click",
    () => {

        productModal.classList.remove(
            "active"
        );

    }
);


productModal.addEventListener(
    "click",
    event => {

        if (event.target === productModal) {

            productModal.classList.remove(
                "active"
            );

        }

    }
);


modalBuyBtn.addEventListener(
    "click",
    () => {

        if (!currentProduct) {
            return;
        }


        handleBuy(
            currentProduct.id
        );


        productModal.classList.remove(
            "active"
        );

    }
);


/* =========================================================
   CART
   ========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            p => Number(p.id) === Number(productId)
        );


    if (!product) {
        return;
    }


    if (product.status === "sold") {

        showNotification(
            "This product is sold out.",
            "error"
        );

        return;

    }


    const existingItem =
        cart.find(
            item =>
                Number(item.product.id) ===
                Number(productId)
        );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            product,

            quantity: 1

        });

    }


    updateCart();


    showNotification(
        `${product.name} added to cart.`
    );

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                Number(item.product.id) !==
                Number(productId)
        );


    updateCart();

}


function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            item =>
                Number(item.product.id) ===
                Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    updateCart();

}


function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let count = 0;


    cart.forEach(item => {

        const subtotal =
            item.product.price *
            item.quantity;


        total += subtotal;

        count += item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.product.image}"
                alt="${item.product.name}"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.product.name}
                </h4>

                <strong>
                    $${item.product.price.toLocaleString()}
                </strong>


                <div class="cart-quantity">

                    <button
                        data-minus="${item.product.id}"
                    >
                        -
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-plus="${item.product.id}"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="cart-remove"
                data-remove="${item.product.id}"
            >

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        cartItems.appendChild(
            cartItem
        );

    });


    cartCount.textContent =
        count;


    cartTotal.textContent =
        `$${total.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}`;


    if (cart.length === 0) {

        cartEmpty.style.display =
            "flex";

    } else {

        cartEmpty.style.display =
            "none";

    }

}


cartItems.addEventListener(
    "click",
    event => {

        const minus =
            event.target.closest(
                "[data-minus]"
            );


        const plus =
            event.target.closest(
                "[data-plus]"
            );


        const remove =
            event.target.closest(
                "[data-remove]"
            );


        if (minus) {

            changeQuantity(
                Number(
                    minus.dataset.minus
                ),
                -1
            );

        }


        if (plus) {

            changeQuantity(
                Number(
                    plus.dataset.plus
                ),
                1
            );

        }


        if (remove) {

            removeFromCart(
                Number(
                    remove.dataset.remove
                )
            );

        }

    }
);


/* =========================================================
   CART OPEN / CLOSE
   ========================================================= */

function openCart() {

    cartOverlay.classList.add(
        "active"
    );

}


function closeCartSidebar() {

    cartOverlay.classList.remove(
        "active"
    );

}


cartBtn.addEventListener(
    "click",
    openCart
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
   CHECKOUT
   ========================================================= */

checkoutBtn.addEventListener(
    "click",
    () => {

        const user =
            getCurrentUser();


        if (!user) {

            pendingBuyProductId =
                null;

            closeCartSidebar();

            openAuthModal(
                "login"
            );

            return;

        }


        if (cart.length === 0) {

            showNotification(
                "Your cart is empty.",
                "error"
            );

            return;

        }


        let orders = [];


        try {

            orders =
                JSON.parse(
                    localStorage.getItem(
                        ORDERS_KEY
                    )
                ) || [];

        } catch {

            orders = [];

        }


        const total =
            cart.reduce(
                (sum, item) =>
                    sum +
                    item.product.price *
                    item.quantity,
                0
            );


        const order = {

            id:
                "ORD-" +
                Date.now(),

            userId:
                user.id,

            customerName:
                user.name,

            customerEmail:
                user.email,

            items:
                cart.map(
                    item => ({

                        productId:
                            item.product.id,

                        name:
                            item.product.name,

                        price:
                            item.product.price,

                        quantity:
                            item.quantity

                    })
                ),

            total,

            status:
                "Pending",

            createdAt:
                new Date().toISOString()

        };


        orders.push(order);


        localStorage.setItem(
            ORDERS_KEY,
            JSON.stringify(orders)
        );


        cart = [];


        updateCart();


        closeCartSidebar();


        showNotification(
            `Order ${order.id} created successfully!`
        );

    }
);


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        currentSearch =
            searchInput.value.trim();

        displayProducts();

    }
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        currentSearch = "";

        displayProducts();

    }
);


/* =========================================================
   CATEGORIES
   ========================================================= */

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".category-btn"
                    )
                    .forEach(btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );


                button.classList.add(
                    "active"
                );


                currentCategory =
                    button.dataset.category;


                displayProducts();

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
   RESET
   ========================================================= */

document
    .getElementById("resetProducts")
    .addEventListener(
        "click",
        () => {

            currentCategory =
                "all";


            currentSearch =
                "";


            searchInput.value =
                "";


            sortProducts.value =
                "default";


            document
                .querySelectorAll(
                    ".category-btn"
                )
                .forEach(
                    button =>
                        button.classList.remove(
                            "active"
                        )
                );


            document
                .querySelector(
                    '[data-category="all"]'
                )
                .classList.add(
                    "active"
                );


            displayProducts();

        }
    );


/* =========================================================
   HERO BUTTONS
   ========================================================= */

document
    .getElementById("shopNowBtn")
    .addEventListener(
        "click",
        () => {

            productsSection.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


document
    .getElementById("dealBtn")
    .addEventListener(
        "click",
        () => {

            currentSearch = "";

            searchInput.value = "";

            currentCategory = "all";

            displayProducts();

            productsSection.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


/* =========================================================
   THEME
   ========================================================= */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


const themeIcon =
    document.getElementById(
        "themeIcon"
    );


/*
   IMPORTANT:
   Your CSS uses:

   body.dark

   So JavaScript must also use:

   "dark"

   NOT "dark-mode"
*/


function updateThemeIcon() {

    const dark =
        document.body.classList.contains(
            "dark"
        );


    if (dark) {

        themeIcon.className =
            "fa-solid fa-sun";

    } else {

        themeIcon.className =
            "fa-solid fa-moon";

    }

}


/* Load saved theme */

const savedTheme =
    localStorage.getItem(
        "technova_theme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );

}


updateThemeIcon();


/* Theme button */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "technova_theme",
            dark
                ? "dark"
                : "light"
        );


        updateThemeIcon();

    }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

const mobileMenuBtn =
    document.getElementById(
        "mobileMenuBtn"
    );


const categoryNav =
    document.getElementById(
        "categoryNav"
    );


mobileMenuBtn.addEventListener(
    "click",
    () => {

        categoryNav.classList.toggle(
            "mobile-open"
        );

    }
);


/* =========================================================
   WISHLIST
   ========================================================= */

const wishlistBtn =
    document.getElementById(
        "wishlistBtn"
    );


wishlistBtn.addEventListener(
    "click",
    () => {

        if (!currentProduct) {
            return;
        }


        wishlistBtn.classList.toggle(
            "active"
        );


        const icon =
            wishlistBtn.querySelector("i");


        if (
            wishlistBtn.classList.contains(
                "active"
            )
        ) {

            icon.className =
                "fa-solid fa-heart";


            showNotification(
                "Added to wishlist."
            );

        } else {

            icon.className =
                "fa-regular fa-heart";


            showNotification(
                "Removed from wishlist."
            );

        }

    }
);


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(
    message,
    type = "success"
) {

    let notification =
        document.getElementById(
            "techNovaNotification"
        );


    if (!notification) {

        notification =
            document.createElement(
                "div"
            );


        notification.id =
            "techNovaNotification";


        notification.style.position =
            "fixed";


        notification.style.right =
            "20px";


        notification.style.bottom =
            "20px";


        notification.style.zIndex =
            "99999";


        notification.style.padding =
            "14px 18px";


        notification.style.borderRadius =
            "10px";


        notification.style.background =
            "var(--card)";


        notification.style.color =
            "var(--text)";


        notification.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.15)";


        notification.style.fontSize =
            "14px";


        notification.style.fontWeight =
            "600";


        notification.style.maxWidth =
            "320px";


        document.body.appendChild(
            notification
        );

    }


    notification.textContent =
        message;


    notification.style.borderLeft =
        type === "error"
            ? "4px solid var(--danger)"
            : "4px solid var(--success)";


    clearTimeout(
        notification._timer
    );


    notification._timer =
        setTimeout(
            () => {

                notification.remove();

            },
            3000
        );

}


/* =========================================================
   HERO SLIDER
   ========================================================= */

const heroImages = [

    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=85",

    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=85",

    "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=85"

];


const heroImage =
    document.querySelector(
        ".hero-product img"
    );


const heroDots =
    document.querySelectorAll(
        ".hero-dot"
    );


function changeHeroSlide(index) {

    heroSlide =
        index;


    heroImage.src =
        heroImages[index];


    heroDots.forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        }
    );

}


heroDots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                changeHeroSlide(index);

            }
        );

    }
);


/* Auto hero slider */

setInterval(
    () => {

        heroSlide =
            (heroSlide + 1) %
            heroImages.length;


        changeHeroSlide(
            heroSlide
        );

    },
    5000
);


/* =========================================================
   BACK TO TOP
   ========================================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

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
   PRODUCT SYNC
   ========================================================= */

/*
   If admin.html changes products while the
   customer website is open in another tab,
   automatically reload them.
*/

window.addEventListener(
    "storage",
    event => {

        if (
            event.key ===
            PRODUCTS_KEY
        ) {

            loadProducts();

            displayProducts();


            if (currentProduct) {

                const updated =
                    products.find(
                        product =>
                            Number(product.id) ===
                            Number(currentProduct.id)
                    );


                if (updated) {

                    currentProduct =
                        updated;

                }

            }

        }

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

loadProducts();

initializeAdmin();

updateAccountUI();

displayProducts();

updateCart();