// -------------------------------------------------------------- VARIABLES

// Slide In Menu
const slideInMenu = document.querySelector(".slide-in-navs");
const slideInMenuBg = document.querySelector(".slide-in-bg");
const slideInLinks = document.querySelectorAll(".slide-in-navs nav ul li");

// Menu Button - Lines
const menuFirstLine = document.querySelector(".menu-btn .line.f");
const menuSecndLine = document.querySelector(".menu-btn .line.s");
const menuLastLine = document.querySelector(".menu-btn .line.l");

// About Us
const aboutCont = document.querySelector("#about-us-cont");
const showMoreBtn = document.querySelector(".show-more-bttn");
const memberAboutUs = document.querySelector(".about-us-box.opened");
const textAboutUs = document.querySelector(".about-us-box.closed");
    
// Data Boxes Container
const technDataCont = document.querySelector(".popup-main-data-cont.car");
const sizeDataCont = document.querySelector(".popup-main-data-cont.size");
const beschrDataCont = document.querySelector(".popup-main-data-cont.beschr");

// Data Boxes
const technDatenSize = document.querySelector(".technische-daten.size");
const technDatenData = document.querySelector(".technische-daten.daten");
const technDatenBeschr = document.querySelector(".technische-daten.beschr");

// Slide-Menu open/closed
let slideMenuOpen = false;

// Selected Category Filter
let selectedFilterCategory = null;

// AOS scrolling
AOS.init();


// -------------------------------------------------------------- TOGGLE FUNCTIONS

// Menu Button - Slides in Menu
const toggleSlideInMenu = () => {
    // animates menu lines (to cross)
    menuFirstLine.classList.toggle("to-cross");
    menuSecndLine.classList.toggle("to-cross");
    menuLastLine.classList.toggle("to-cross");
    
    // slides menu
    if (slideMenuOpen) {
        slideInMenuBg.classList.add("d-none");
        slideInMenu.classList.remove("slide-ani");
        slideMenuOpen = false;
    }
    else {
        slideInMenuBg.classList.remove("d-none");
        slideInMenu.classList.add("slide-ani");
        slideMenuOpen = true;
    } 
}


// Toggles About Container
const toggleAboutCont = () => {
    aboutCont.classList.toggle("extended");
    if (aboutCont.classList.contains("extended")) {
        showMoreBtn.classList.add("flip");
    } else {
        showMoreBtn.classList.remove("flip");
    }
    memberAboutUs.classList.toggle("d-none");
    textAboutUs.classList.toggle("d-none");
}


// Scroll to top Button
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}   