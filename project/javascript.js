console.log("javascript is connected");

let year = new Date().getFullYear();
document.querySelector(".site-footer p").innerHTML =
  `&copy; ${year} Abhinanda. All rights reserved`;

function getGreeting(){
    const hour = new Date().getHours();
    if(hour < 12) return "Good Morning";
    if(hour < 17) return "Good Afternoon";
    return "Good Evening";
}
let hero = document.querySelector(".hero-section h1");
if(hero){
    hero.textContent = `Hey, ${getGreeting()}, this is Abhinanda 👋`;
}

let menuToggle = document.querySelector(".menu-toggle");
let navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    let isOpen = navLinks.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

let header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

let sections = document.querySelectorAll("section[id]");
let navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 100){
            current = section.getAttribute("id");
        }
    });
    navItems.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }
    });
});

let form = document.querySelector("#contact-form");
function showError(input, message){
    let group = input.closest(".form-group");
    let existing = group.querySelector(".error-msg");
    if(!existing){
        let errEl = document.createElement("span");
        errEl.className = "error-msg";
        errEl.textContent = message;
        group.appendChild(errEl);
    }
    input.classList.add("error");
}
function clearError(){
    document.querySelectorAll(".error-msg").forEach(e => e.remove());
    document.querySelectorAll(".error").forEach(e => e.classList.remove("error"));
}

if(form){
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        clearError();

        let name = form.querySelector("#name");
        let email = form.querySelector("#email");
        let message = form.querySelector("#message");

        let valid = true;

        if(!name.value.trim()){
            showError(name, "Name is required");
            valid = false;
        }
        if(!email.value.includes("@")){
            showError(email, "Enter a valid email");
            valid = false;
        }
        if(message.value.trim().length < 10){
            showError(message, "Message must be at least 10 characters");
            valid = false;
        }

        if(valid){
            let btn = form.querySelector('button[type="submit"]');
            btn.textContent = "Sending...";
            btn.disabled = true;

            await new Promise(resolve => setTimeout(resolve, 1500));
            btn.textContent = "✅ Message sent";
            form.reset();
            setTimeout(() => {
                btn.textContent = "Send Message";
                btn.disabled = false;
            }, 3000);
        }
    });
}

let themeBtn = document.querySelector(".theme-toggle");
function updateThemeIcon(theme){
    themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
}

if(themeBtn){
    let savedTheme = localStorage.getItem("theme") || "light";
    document.body.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);
    themeBtn.addEventListener("click", () => {
        let nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
        document.body.dataset.theme = nextTheme;
        localStorage.setItem("theme", nextTheme);
        updateThemeIcon(nextTheme);
    });
}