let mobileNav = document.getElementById("mobile-nav");
let mobileNavBtn = document.getElementById("mobile-nav-btn");

mobileNavBtn.addEventListener("click", function() {
    if(mobileNav.hasAttribute("class")) {
        mobileNav.removeAttribute("class");
    } else {
        mobileNav.setAttribute("class", "active");
    }
});