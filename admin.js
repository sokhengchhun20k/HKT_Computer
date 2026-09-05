/* =========================================================
   TECHNOVA COMPUTER SHOP — ADMIN PANEL
   ========================================================= */

const PRODUCTS_KEY = "technova_products";
const USERS_KEY = "technova_users";
const CURRENT_USER_KEY = "technova_current_user";
const ORDERS_KEY = "technova_orders";

/* =========================================================
   CURRENT USER / SECURITY
   ========================================================= */

function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    } catch (error) {
        return null;
    }
}

const currentUser = getCurrentUser();

if (!currentUser || currentUser.role !== "admin") {
    window.location.href = "computer_shop2.html";
}

/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const navButtons = document.querySelectorAll(".admin-nav-btn");
const pages = document.querySelectorAll(".admin-page");

const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const adminName = document.getElementById("adminName");

/* =========================================================
   BUTTON SAFETY
   ========================================================= */

document.querySelectorAll("button").forEach(button => {
    if (
        button.type !== "submit" &&
        button.type !== "button" &&
        button.type !== "reset"
    ) {
        button.type = "button";
    }
});

/* =========================================================
   DATA FUNCTIONS
   ========================================================= */

function getProducts() {
    try {
        const data = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return [];
    }
}

function saveProducts(products) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

function getUsers() {
    try {
        const data = JSON.parse(localStorage.getItem(USERS_KEY));
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return [];
    }
}

function getOrders() {
    try {
        const data = JSON.parse(localStorage.getItem(ORDERS_KEY));
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return [];
    }
}

/* =========================================================
   ADMIN NAME
   ========================================================= */

if (adminName && currentUser) {
    adminName.textContent =
        currentUser.name ||
        currentUser.username ||
        currentUser.email ||
        "Admin";
}

/* =========================================================
   PAGE INFORMATION
   ========================================================= */

const pageInformation = {
    dashboard: {
        title: "Dashboard",
        subtitle: "Welcome back, Admin."
    },

    products: {
        title: "Products",
        subtitle: "Manage products displayed in your store."
    },

    orders: {
        title: "Orders",
        subtitle: "View and manage customer orders."
    },

    customers: {
        title: "Customers",
        subtitle: "Registered TechNova customers."
    }
};

/* =========================================================
   PAGE RENDER STATE
   ========================================================= */

const renderedPages = {
    dashboard: false,
    products: false,
    orders: false,
    customers: false
};

/* =========================================================
   OPEN PAGE
   ========================================================= */

function openPage(pageName) {
    if (!pageInformation[pageName]) {
        return;
    }

    navButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.page === pageName
        );
    });

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const targetPage =
        document.getElementById(`${pageName}Page`);

    if (targetPage) {
        targetPage.classList.add("active");
    }

    if (pageTitle) {
        pageTitle.textContent =
            pageInformation[pageName].title;
    }

    if (pageSubtitle) {
        pageSubtitle.textContent =
            pageInformation[pageName].subtitle;
    }

    if (pageName === "dashboard") {
        renderDashboard();
        renderedPages.dashboard = true;
    }

    if (pageName === "products") {
        renderProducts();
        renderedPages.products = true;
    }

    if (pageName === "orders") {
        renderOrders();
        renderedPages.orders = true;
    }

    if (pageName === "customers") {
        renderCustomers();
        renderedPages.customers = true;
    }

    closeMobileSidebar();
}

/* =========================================================
   NAVIGATION
   ========================================================= */

navButtons.forEach(button => {
    button.type = "button";

    button.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();

        const pageName = button.dataset.page;

        if (pageName) {
            openPage(pageName);
        }
    });
});

/* =========================================================
   DATA-PAGE-TARGET BUTTONS
   ========================================================= */

document
    .querySelectorAll("[data-page-target]")
    .forEach(button => {
        button.type = "button";

        button.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();

            const pageName =
                button.dataset.pageTarget;

            if (pageName) {
                openPage(pageName);
            }
        });
    });

/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {
    const products = getProducts();
    const users = getUsers();
    const orders = getOrders();

    const totalProducts =
        document.getElementById("totalProducts");

    const totalOrders =
        document.getElementById("totalOrders");

    const totalCustomers =
        document.getElementById("totalCustomers");

    /* Your HTML uses totalSales */
    const totalSales =
        document.getElementById("totalSales");

    if (totalProducts) {
        totalProducts.textContent =
            products.length;
    }

    if (totalOrders) {
        totalOrders.textContent =
            orders.length;
    }

    if (totalCustomers) {
        totalCustomers.textContent =
            users.filter(
                user => user.role !== "admin"
            ).length;
    }

    if (totalSales) {
        const revenue = orders.reduce(
            (total, order) => {
                const amount =
                    Number(
                        order.total ??
                        order.amount ??
                        order.price ??
                        0
                    ) || 0;

                return total + amount;
            },
            0
        );

        totalSales.textContent =
            `$${revenue.toFixed(2)}`;
    }

    renderRecentOrders();
    renderStoreOverview();
}

/* =========================================================
   RECENT ORDERS
   ========================================================= */

function renderRecentOrders() {
    const container =
        document.getElementById("recentOrders");

    if (!container) {
        return;
    }

    const orders = getOrders();

    if (!orders.length) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>No orders yet.</p>
            </div>
        `;

        return;
    }

    const recentOrders =
        [...orders].reverse().slice(0, 5);

    container.innerHTML =
        recentOrders.map(order => {
            const orderId =
                order.id ??
                order.orderId ??
                "N/A";

            const customer =
                order.customerName ||
                order.name ||
                order.customer ||
                "Unknown Customer";

            const total =
                Number(
                    order.total ??
                    order.amount ??
                    0
                ) || 0;

            const status =
                order.status ||
                "Pending";

            return `
                <div class="recent-order">

                    <div>
                        <strong>
                            #${escapeHtml(String(orderId))}
                        </strong>

                        <small>
                            ${escapeHtml(String(customer))}
                        </small>
                    </div>

                    <div>
                        <div class="recent-order-total">
                            $${total.toFixed(2)}
                        </div>

                        <span class="status-badge ${getStatusClass(status)}">
                            ${escapeHtml(String(status))}
                        </span>
                    </div>

                </div>
            `;
        }).join("");
}

/* =========================================================
   STORE OVERVIEW
   ========================================================= */

function renderStoreOverview() {
    const container =
        document.getElementById("storeOverview");

    if (!container) {
        return;
    }

    const products = getProducts();

    const totalStock = products.reduce(
        (total, product) => {
            return total + (
                Number(
                    product.stock ??
                    product.quantity ??
                    0
                ) || 0
            );
        },
        0
    );

    container.innerHTML = `
        <div class="overview-item">
            <span>Products</span>
            <strong>${products.length}</strong>
        </div>

        <div class="overview-item">
            <span>Total Stock</span>
            <strong>${totalStock}</strong>
        </div>

        <div class="overview-item">
            <span>Store Status</span>
            <strong>Online</strong>
        </div>
    `;
}

/* =========================================================
   PRODUCTS
   ========================================================= */

const productsTable =
    document.getElementById("productsTable");

function renderProducts() {
    if (!productsTable) {
        return;
    }

    const products = getProducts();

    if (!products.length) {
        productsTable.innerHTML = `
            <tr>
                <td
                    colspan="100%"
                    class="empty-table"
                >
                    <i class="fa-solid fa-box-open"></i>
                    <p>No products found.</p>
                </td>
            </tr>
        `;

        return;
    }

    productsTable.innerHTML =
        products.map((product, index) => {
            const id =
                product.id ??
                product.productId ??
                index;

            const name =
                product.name ||
                product.title ||
                "Unnamed Product";

            const category =
                product.categoryName ||
                product.category ||
                "General";

            const price =
                Number(product.price) || 0;

            const stock =
                Number(
                    product.stock ??
                    product.quantity ??
                    0
                ) || 0;

            const image =
                product.image ||
                product.img ||
                product.imageUrl ||
                "";

            const status =
                product.status ||
                (stock > 0 ? "available" : "sold");

            return `
                <tr>

                    <td>
                        <div class="product-table-info">

                            ${
                                image
                                    ? `
                                        <img
                                            src="${escapeHtml(String(image))}"
                                            alt="${escapeHtml(String(name))}"
                                            loading="lazy"
                                            onerror="this.style.display='none'"
                                        >
                                    `
                                    : `
                                        <div class="product-placeholder">
                                            <i class="fa-solid fa-box"></i>
                                        </div>
                                    `
                            }

                            <div>
                                <strong>
                                    ${escapeHtml(String(name))}
                                </strong>

                                ${
                                    product.description
                                        ? `
                                            <small>
                                                ${escapeHtml(
                                                    truncateText(
                                                        product.description,
                                                        45
                                                    )
                                                )}
                                            </small>
                                        `
                                        : ""
                                }
                            </div>

                        </div>
                    </td>

                    <td>
                        ${escapeHtml(String(category))}
                    </td>

                    <td>
                        $${price.toFixed(2)}
                    </td>

                    <td>
                        <span class="status-badge ${getStatusClass(status)}">
                            ${escapeHtml(formatStatus(status))}
                        </span>
                    </td>

                    <td>
                        <div class="table-actions">

                            <button
                                type="button"
                                class="table-action edit-product-btn"
                                data-product-id="${escapeHtml(String(id))}"
                                title="Edit Product"
                                aria-label="Edit Product"
                            >
                                <i class="fa-solid fa-pen"></i>
                            </button>

                            <button
                                type="button"
                                class="table-action delete delete-product-btn"
                                data-product-id="${escapeHtml(String(id))}"
                                title="Delete Product"
                                aria-label="Delete Product"
                            >
                                <i class="fa-solid fa-trash"></i>
                            </button>

                        </div>
                    </td>

                </tr>
            `;
        }).join("");
}

/* =========================================================
   PRODUCT TABLE EVENTS
   ========================================================= */

if (productsTable) {
    productsTable.addEventListener(
        "click",
        event => {
            const editButton =
                event.target.closest(
                    ".edit-product-btn"
                );

            const deleteButton =
                event.target.closest(
                    ".delete-product-btn"
                );

            if (editButton) {
                event.preventDefault();
                event.stopPropagation();

                const id =
                    editButton.dataset.productId;

                if (id !== undefined) {
                    openProductForm(id);
                }

                return;
            }

            if (deleteButton) {
                event.preventDefault();
                event.stopPropagation();

                const id =
                    deleteButton.dataset.productId;

                if (id !== undefined) {
                    deleteProduct(id);
                }
            }
        }
    );
}

/* =========================================================
   PRODUCT FORM / MODAL
   ========================================================= */

const productModal =
    document.getElementById(
        "productFormModal"
    );

const productForm =
    document.getElementById("productForm");

const addProductBtn =
    document.getElementById("addProductBtn");

const closeProductForm =
    document.getElementById("closeProductForm");

const cancelProductForm =
    document.getElementById("cancelProductForm");

const productFormTitle =
    document.getElementById(
        "productFormTitle"
    );

/* =========================================================
   FORM INPUTS
   ========================================================= */

const productIdInput =
    document.getElementById("productId");

const productNameInput =
    document.getElementById("productName");

const productCategoryInput =
    document.getElementById("productCategory");

const productCategoryNameInput =
    document.getElementById(
        "productCategoryName"
    );

const productPriceInput =
    document.getElementById("productPrice");

const productOldPriceInput =
    document.getElementById(
        "productOldPrice"
    );

const productDiscountInput =
    document.getElementById(
        "productDiscount"
    );

const productStatusInput =
    document.getElementById(
        "productStatus"
    );

const productStockInput =
    document.getElementById(
        "productStock"
    );

const productImageInput =
    document.getElementById(
        "productImage"
    );

const productDescriptionInput =
    document.getElementById(
        "productDescription"
    );

const productSpecsInput =
    document.getElementById(
        "productSpecs"
    );

/* =========================================================
   OPEN PRODUCT FORM
   ========================================================= */

function openProductForm(productId = null) {
    if (!productModal || !productForm) {
        return;
    }

    productForm.reset();

    if (productIdInput) {
        productIdInput.value = "";
    }

    if (productFormTitle) {
        productFormTitle.textContent =
            productId !== null
                ? "Edit Product"
                : "Add Product";
    }

    if (productDiscountInput) {
        productDiscountInput.value = "0";
    }

    if (productStatusInput) {
        productStatusInput.value =
            "available";
    }

    /*
       ADD PRODUCT
    */

    if (productId === null) {
        productModal.classList.add("active");
        document.body.classList.add(
            "modal-open"
        );
        return;
    }

    /*
       EDIT PRODUCT
    */

    const products = getProducts();

    const product = products.find(
        item =>
            String(
                item.id ??
                item.productId
            ) === String(productId)
    );

    if (!product) {
        showNotification(
            "Product could not be found.",
            "error"
        );

        return;
    }

    if (productIdInput) {
        productIdInput.value =
            product.id ??
            product.productId ??
            "";
    }

    if (productNameInput) {
        productNameInput.value =
            product.name ||
            product.title ||
            "";
    }

    if (productCategoryInput) {
        productCategoryInput.value =
            product.category ||
            "laptop";
    }

    if (productCategoryNameInput) {
        productCategoryNameInput.value =
            product.categoryName ||
            product.category ||
            "";
    }

    if (productPriceInput) {
        productPriceInput.value =
            product.price ?? "";
    }

    if (productOldPriceInput) {
        productOldPriceInput.value =
            product.oldPrice ??
            product.originalPrice ??
            "";
    }

    if (productDiscountInput) {
        productDiscountInput.value =
            product.discount ??
            "0";
    }

    if (productStatusInput) {
        productStatusInput.value =
            product.status ||
            "available";
    }

    if (productStockInput) {
        productStockInput.value =
            product.stock ??
            product.quantity ??
            "";
    }

    if (productImageInput) {
        productImageInput.value =
            product.image ||
            product.img ||
            product.imageUrl ||
            "";
    }

    if (productDescriptionInput) {
        productDescriptionInput.value =
            product.description ||
            "";
    }

    if (productSpecsInput) {
        productSpecsInput.value =
            formatSpecifications(
                product.specifications ??
                product.specs ??
                ""
            );
    }

    productModal.classList.add("active");

    document.body.classList.add(
        "modal-open"
    );
}

/* =========================================================
   CLOSE PRODUCT FORM
   ========================================================= */

function closeProductModal() {
    if (!productModal) {
        return;
    }

    productModal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );

    if (productFormTitle) {
        productFormTitle.textContent =
            "Add Product";
    }
}

/* =========================================================
   ADD PRODUCT
   ========================================================= */

if (addProductBtn) {
    addProductBtn.type = "button";

    addProductBtn.addEventListener(
        "click",
        event => {
            event.preventDefault();
            event.stopPropagation();

            openProductForm();
        }
    );
}

/* =========================================================
   CLOSE PRODUCT FORM
   ========================================================= */

if (closeProductForm) {
    closeProductForm.type = "button";

    closeProductForm.addEventListener(
        "click",
        event => {
            event.preventDefault();
            event.stopPropagation();

            closeProductModal();
        }
    );
}

if (cancelProductForm) {
    cancelProductForm.type = "button";

    cancelProductForm.addEventListener(
        "click",
        event => {
            event.preventDefault();
            event.stopPropagation();

            closeProductModal();
        }
    );
}

/* =========================================================
   CLOSE MODAL WHEN CLICKING OVERLAY
   ========================================================= */

if (productModal) {
    productModal.addEventListener(
        "click",
        event => {
            if (
                event.target ===
                productModal
            ) {
                closeProductModal();
            }
        }
    );
}

/* =========================================================
   SAVE PRODUCT
   ========================================================= */

if (productForm) {
    productForm.addEventListener(
        "submit",
        event => {
            event.preventDefault();
            event.stopPropagation();

            const products = getProducts();

            const existingId =
                productIdInput?.value.trim() ||
                "";

            const name =
                productNameInput?.value.trim() ||
                "";

            const category =
                productCategoryInput?.value.trim() ||
                "laptop";

            const categoryName =
                productCategoryNameInput?.value.trim() ||
                category;

            const price =
                Number(
                    productPriceInput?.value
                ) || 0;

            const oldPrice =
                Number(
                    productOldPriceInput?.value
                ) || 0;

            const discount =
                Number(
                    productDiscountInput?.value
                ) || 0;

            const status =
                productStatusInput?.value ||
                "available";

            const stock =
                Number(
                    productStockInput?.value
                ) || 0;

            const image =
                productImageInput?.value.trim() ||
                "";

            const description =
                productDescriptionInput?.value.trim() ||
                "";

            const specifications =
                parseSpecifications(
                    productSpecsInput?.value ||
                    ""
                );

            if (!name) {
                showNotification(
                    "Please enter a product name.",
                    "error"
                );
                return;
            }

            if (price < 0) {
                showNotification(
                    "Price cannot be negative.",
                    "error"
                );
                return;
            }

            if (stock < 0) {
                showNotification(
                    "Stock cannot be negative.",
                    "error"
                );
                return;
            }

            /*
               EDIT EXISTING PRODUCT
            */

            if (existingId) {
                const index =
                    products.findIndex(
                        product =>
                            String(
                                product.id ??
                                product.productId
                            ) ===
                            String(existingId)
                    );

                if (index === -1) {
                    showNotification(
                        "Product could not be found.",
                        "error"
                    );

                    return;
                }

                const oldProduct =
                    products[index];

                products[index] = {
                    ...oldProduct,

                    id:
                        oldProduct.id ??
                        existingId,

                    name,
                    title: name,

                    category,
                    categoryName,

                    price,
                    oldPrice,
                    originalPrice:
                        oldPrice,

                    discount,
                    status,
                    stock,

                    image,

                    description,

                    specifications,
                    specs:
                        specifications
                };
            }

            /*
               ADD NEW PRODUCT
            */

            else {
                products.push({
                    id: Date.now(),

                    name,
                    title: name,

                    category,
                    categoryName,

                    price,
                    oldPrice,
                    originalPrice:
                        oldPrice,

                    discount,
                    status,
                    stock,

                    image,

                    description,

                    specifications,
                    specs:
                        specifications
                });
            }

            saveProducts(products);

            closeProductModal();

            renderProducts();
            renderDashboard();

            renderedPages.products = true;
            renderedPages.dashboard = true;

            showNotification(
                existingId
                    ? "Product updated successfully."
                    : "Product added successfully.",
                "success"
            );
        }
    );
}

/* =========================================================
   EDIT PRODUCT
   ========================================================= */

function editProduct(productId) {
    openProductForm(productId);
}

/* =========================================================
   DELETE PRODUCT
   ========================================================= */

function deleteProduct(productId) {
    const products = getProducts();

    const index =
        products.findIndex(
            product =>
                String(
                    product.id ??
                    product.productId
                ) === String(productId)
        );

    if (index === -1) {
        showNotification(
            "Product could not be found.",
            "error"
        );

        return;
    }

    const productName =
        products[index].name ||
        products[index].title ||
        "this product";

    const confirmed =
        window.confirm(
            `Are you sure you want to delete "${productName}"?`
        );

    if (!confirmed) {
        return;
    }

    products.splice(index, 1);

    saveProducts(products);

    renderProducts();
    renderDashboard();

    renderedPages.products = true;
    renderedPages.dashboard = true;

    showNotification(
        "Product deleted successfully.",
        "success"
    );
}

/* =========================================================
   ORDERS
   ========================================================= */

const ordersTable =
    document.getElementById(
        "ordersTable"
    );

function renderOrders() {
    if (!ordersTable) {
        return;
    }

    const orders = getOrders();

    if (!orders.length) {
        ordersTable.innerHTML = `
            <tr>
                <td
                    colspan="100%"
                    class="empty-table"
                >
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>No orders found.</p>
                </td>
            </tr>
        `;

        return;
    }

    ordersTable.innerHTML =
        orders.map(order => {
            const orderId =
                order.id ??
                order.orderId ??
                "N/A";

            const customer =
                order.customerName ||
                order.name ||
                order.customer ||
                "Unknown";

            const items =
                order.items ??
                order.products ??
                [];

            let itemCount = 0;

            if (Array.isArray(items)) {
                itemCount = items.reduce(
                    (total, item) => {
                        return total + (
                            Number(
                                item.quantity
                            ) || 1
                        );
                    },
                    0
                );
            } else {
                itemCount =
                    Number(
                        order.itemCount ??
                        order.quantity ??
                        0
                    ) || 0;
            }

            const total =
                Number(
                    order.total ??
                    order.amount ??
                    0
                ) || 0;

            const status =
                order.status ||
                "Pending";

            const date =
                order.date ||
                order.createdAt ||
                "—";

            return `
                <tr>

                    <td>
                        #${escapeHtml(
                            String(orderId)
                        )}
                    </td>

                    <td>
                        ${escapeHtml(
                            String(customer)
                        )}
                    </td>

                    <td>
                        ${itemCount}
                    </td>

                    <td>
                        $${total.toFixed(2)}
                    </td>

                    <td>
                        <span class="status-badge ${getStatusClass(status)}">
                            ${escapeHtml(
                                formatStatus(status)
                            )}
                        </span>
                    </td>

                    <td>
                        ${escapeHtml(
                            String(date)
                        )}
                    </td>

                </tr>
            `;
        }).join("");
}

/* =========================================================
   CUSTOMERS
   ========================================================= */

const customersTable =
    document.getElementById(
        "customersTable"
    );

function renderCustomers() {
    if (!customersTable) {
        return;
    }

    const users = getUsers();

    const customers =
        users.filter(
            user => user.role !== "admin"
        );

    if (!customers.length) {
        customersTable.innerHTML = `
            <tr>
                <td
                    colspan="100%"
                    class="empty-table"
                >
                    <i class="fa-solid fa-users"></i>
                    <p>No customers found.</p>
                </td>
            </tr>
        `;

        return;
    }

    customersTable.innerHTML =
        customers.map((user, index) => {
            const name =
                user.name ||
                user.username ||
                "Unknown";

            const email =
                user.email ||
                "No email";

            const role =
                user.role ||
                "customer";

            const joined =
                user.createdAt ||
                user.date ||
                "—";

            return `
                <tr>

                    <td>
                        ${escapeHtml(
                            String(name)
                        )}
                    </td>

                    <td>
                        ${escapeHtml(
                            String(email)
                        )}
                    </td>

                    <td>
                        <span class="status-badge available">
                            ${escapeHtml(
                                formatStatus(role)
                            )}
                        </span>
                    </td>

                    <td>
                        ${escapeHtml(
                            String(joined)
                        )}
                    </td>

                </tr>
            `;
        }).join("");
}

/* =========================================================
   VIEW STORE
   ========================================================= */

const viewStoreBtn =
    document.getElementById(
        "viewStoreBtn"
    );

if (viewStoreBtn) {
    viewStoreBtn.type = "button";

    viewStoreBtn.addEventListener(
        "click",
        event => {
            event.preventDefault();
            event.stopPropagation();

            window.location.href =
                "computer_shop2.html";
        }
    );
}

/* =========================================================
   LOGOUT
   ========================================================= */

const adminLogoutBtn =
    document.getElementById(
        "adminLogoutBtn"
    );

if (adminLogoutBtn) {
    adminLogoutBtn.type = "button";

    adminLogoutBtn.addEventListener(
        "click",
        event => {
            event.preventDefault();
            event.stopPropagation();

            localStorage.removeItem(
                CURRENT_USER_KEY
            );

            window.location.href =
                "computer_shop2.html";
        }
    );
}

/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */

const mobileSidebarBtn =
    document.getElementById(
        "mobileSidebarBtn"
    );

const adminSidebar =
    document.querySelector(
        ".admin-sidebar"
    );

function closeMobileSidebar() {
    if (adminSidebar) {
        adminSidebar.classList.remove(
            "mobile-open"
        );
    }
}

if (mobileSidebarBtn) {
    mobileSidebarBtn.type = "button";

    mobileSidebarBtn.addEventListener(
        "click",
        event => {
            event.preventDefault();
            event.stopPropagation();

            if (adminSidebar) {
                adminSidebar.classList.toggle(
                    "mobile-open"
                );
            }
        }
    );
}

/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(
    message,
    type = "success"
) {
    let notification =
        document.getElementById(
            "adminNotification"
        );

    if (!notification) {
        notification =
            document.createElement("div");

        notification.id =
            "adminNotification";

        notification.className =
            "admin-notification";

        document.body.appendChild(
            notification
        );
    }

    notification.textContent = message;

    notification.classList.remove(
        "success",
        "error",
        "show"
    );

    notification.classList.add(type);

    requestAnimationFrame(() => {
        notification.classList.add("show");
    });

    clearTimeout(
        notification._timer
    );

    notification._timer =
        setTimeout(() => {
            notification.classList.remove(
                "show"
            );
        }, 2500);
}

/* =========================================================
   STATUS HELPERS
   ========================================================= */

function formatStatus(status) {
    return String(status)
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, char =>
            char.toUpperCase()
        );
}

function getStatusClass(status) {
    const normalized =
        String(status)
            .toLowerCase()
            .trim();

    if (
        normalized === "available" ||
        normalized === "completed" ||
        normalized === "active" ||
        normalized === "customer"
    ) {
        return "available";
    }

    if (
        normalized === "new" ||
        normalized === "pending"
    ) {
        return "pending";
    }

    if (
        normalized === "sold" ||
        normalized === "sold out" ||
        normalized === "cancelled" ||
        normalized === "canceled"
    ) {
        return "sold";
    }

    return "pending";
}

/* =========================================================
   SPECIFICATION HELPERS
   ========================================================= */

function parseSpecifications(text) {
    const lines =
        String(text)
            .split("\n")
            .map(line => line.trim())
            .filter(Boolean);

    const specifications = {};

    lines.forEach(line => {
        const separator =
            line.indexOf(":");

        if (separator === -1) {
            return;
        }

        const key =
            line
                .slice(0, separator)
                .trim();

        const value =
            line
                .slice(separator + 1)
                .trim();

        if (key) {
            specifications[key] =
                value;
        }
    });

    return specifications;
}

function formatSpecifications(specifications) {
    if (!specifications) {
        return "";
    }

    if (
        typeof specifications ===
        "string"
    ) {
        return specifications;
    }

    if (
        typeof specifications ===
        "object"
    ) {
        return Object.entries(
            specifications
        )
            .map(
                ([key, value]) =>
                    `${key}: ${value}`
            )
            .join("\n");
    }

    return "";
}

/* =========================================================
   TEXT HELPERS
   ========================================================= */

function truncateText(
    text,
    maxLength
) {
    const value =
        String(text);

    if (
        value.length <=
        maxLength
    ) {
        return value;
    }

    return (
        value.slice(
            0,
            maxLength
        ) + "..."
    );
}

function escapeHtml(value) {
    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}

/* =========================================================
   STORAGE SYNC
   ========================================================= */

window.addEventListener(
    "storage",
    event => {
        if (
            event.key === PRODUCTS_KEY ||
            event.key === ORDERS_KEY ||
            event.key === USERS_KEY
        ) {
            renderedPages.dashboard =
                false;

            renderedPages.products =
                false;

            renderedPages.orders =
                false;

            renderedPages.customers =
                false;

            const activeButton =
                document.querySelector(
                    ".admin-nav-btn.active"
                );

            const activePage =
                activeButton?.dataset.page ||
                "dashboard";

            openPage(activePage);
        }
    }
);

/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {
        if (
            event.key === "Escape"
        ) {
            closeProductModal();
        }
    }
);

/* =========================================================
   INITIALIZATION
   ========================================================= */

renderDashboard();
renderedPages.dashboard = true;