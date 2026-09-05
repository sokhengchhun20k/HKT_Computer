/* =========================================================
   TECHNOVA LOGIN / REGISTER
   ========================================================= */

const USERS_KEY = "technovaUsers";
const SESSION_KEY = "technovaSession";

const ADMIN_EMAIL = "admin@technova.com";
const ADMIN_PASSWORD = "Admin@123";


// =========================================================
// INITIAL USERS
// =========================================================

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch (error) {
        return [];
    }
}


function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}


// =========================================================
// ELEMENTS
// =========================================================

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");

const customerLoginBtn = document.getElementById("customerLoginBtn");
const adminLoginBtn = document.getElementById("adminLoginBtn");

const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");

let loginType = "customer";


// =========================================================
// CHECK EXISTING SESSION
// =========================================================

function checkExistingSession() {

    const session = localStorage.getItem(SESSION_KEY);

    if (!session) {
        return;
    }

    try {

        const user = JSON.parse(session);

        if (user && user.role === "admin") {
            window.location.href = "admin.html";
        }

        if (user && user.role === "customer") {
            window.location.href = "computer_shop1.html";
        }

    } catch (error) {

        localStorage.removeItem(SESSION_KEY);

    }
}

checkExistingSession();


// =========================================================
// SWITCH LOGIN / REGISTER
// =========================================================

function showLogin() {

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    clearMessages();
}


function showRegister() {

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    clearMessages();
}


loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);

switchToRegister.addEventListener("click", showRegister);
switchToLogin.addEventListener("click", showLogin);


// =========================================================
// ACCOUNT TYPE
// =========================================================

customerLoginBtn.addEventListener("click", () => {

    loginType = "customer";

    customerLoginBtn.classList.add("active");
    adminLoginBtn.classList.remove("active");

});


adminLoginBtn.addEventListener("click", () => {

    loginType = "admin";

    adminLoginBtn.classList.add("active");
    customerLoginBtn.classList.remove("active");

});


// =========================================================
// PASSWORD VISIBILITY
// =========================================================

document.querySelectorAll(".password-toggle").forEach(button => {

    button.addEventListener("click", () => {

        const targetId = button.dataset.target;
        const input = document.getElementById(targetId);

        if (!input) return;

        const icon = button.querySelector("i");

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

        }

    });

});


// =========================================================
// LOGIN
// =========================================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearMessages();

    const email =
        document.getElementById("loginEmail").value
        .trim()
        .toLowerCase();

    const password =
        document.getElementById("loginPassword").value;

    const remember =
        document.getElementById("rememberMe").checked;


    if (!email || !password) {

        showMessage(
            loginMessage,
            "Please enter your email and password.",
            "error"
        );

        return;
    }


    // =====================================================
    // ADMIN LOGIN
    // =====================================================

    if (loginType === "admin") {

        if (
            email === ADMIN_EMAIL &&
            password === ADMIN_PASSWORD
        ) {

            createSession({
                id: "admin-001",
                name: "TechNova Administrator",
                email: ADMIN_EMAIL,
                role: "admin",
                remember: remember
            });

            showMessage(
                loginMessage,
                "Admin login successful. Redirecting...",
                "success"
            );

            setTimeout(() => {
                window.location.href = "admin.html";
            }, 700);

            return;

        }


        showMessage(
            loginMessage,
            "Invalid admin email or password.",
            "error"
        );

        return;
    }


    // =====================================================
    // CUSTOMER LOGIN
    // =====================================================

    const users = getUsers();

    const user = users.find(
        item =>
            item.email.toLowerCase() === email &&
            item.password === password
    );


    if (!user) {

        showMessage(
            loginMessage,
            "Incorrect email or password.",
            "error"
        );

        return;
    }


    if (user.status === "blocked") {

        showMessage(
            loginMessage,
            "Your account has been blocked.",
            "error"
        );

        return;
    }


    createSession({
        id: user.id,
        name: user.name,
        email: user.email,
        role: "customer",
        remember: remember
    });


    showMessage(
        loginMessage,
        "Login successful. Welcome back!",
        "success"
    );


    setTimeout(() => {
        window.location.href = "computer_shop1.html";
    }, 700);

});


// =========================================================
// REGISTER
// =========================================================

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearMessages();


    const name =
        document.getElementById("registerName")
        .value
        .trim();

    const email =
        document.getElementById("registerEmail")
        .value
        .trim()
        .toLowerCase();

    const password =
        document.getElementById("registerPassword")
        .value;

    const confirmPassword =
        document.getElementById("confirmPassword")
        .value;


    if (name.length < 2) {

        showMessage(
            registerMessage,
            "Please enter a valid name.",
            "error"
        );

        return;
    }


    if (password.length < 6) {

        showMessage(
            registerMessage,
            "Password must contain at least 6 characters.",
            "error"
        );

        return;
    }


    if (password !== confirmPassword) {

        showMessage(
            registerMessage,
            "Passwords do not match.",
            "error"
        );

        return;
    }


    if (email === ADMIN_EMAIL) {

        showMessage(
            registerMessage,
            "This email is reserved.",
            "error"
        );

        return;
    }


    const users = getUsers();


    const existingUser = users.find(
        user => user.email.toLowerCase() === email
    );


    if (existingUser) {

        showMessage(
            registerMessage,
            "An account with this email already exists.",
            "error"
        );

        return;
    }


    const newUser = {

        id:
            "user-" +
            Date.now() +
            "-" +
            Math.random()
                .toString(36)
                .substring(2, 8),

        name: name,

        email: email,

        password: password,

        role: "customer",

        status: "active",

        createdAt: new Date().toISOString(),

        orders: []

    };


    users.push(newUser);

    saveUsers(users);


    showMessage(
        registerMessage,
        "Account created successfully!",
        "success"
    );


    registerForm.reset();


    setTimeout(() => {

        showLogin();

        document.getElementById("loginEmail").value = email;

    }, 900);

});


// =========================================================
// SESSION
// =========================================================

function createSession(user) {

    const session = {

        id: user.id,

        name: user.name,

        email: user.email,

        role: user.role,

        loginTime: new Date().toISOString()

    };


    localStorage.setItem(
        SESSION_KEY,
        JSON.stringify(session)
    );

}


// =========================================================
// MESSAGES
// =========================================================

function showMessage(element, message, type) {

    element.textContent = message;

    element.className =
        "form-message " + type;

}


function clearMessages() {

    loginMessage.textContent = "";
    loginMessage.className = "form-message";

    registerMessage.textContent = "";
    registerMessage.className = "form-message";

}


// =========================================================
// FORGOT PASSWORD
// =========================================================

document
    .getElementById("forgotPassword")
    .addEventListener("click", () => {

        alert(
            "For this front-end prototype, password recovery is not connected to an email server yet.\n\n" +
            "In a real production website, this would send a password-reset email."
        );

    });