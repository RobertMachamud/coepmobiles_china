// ------------------------------------------------------------------ VARIABLES

// Main Window
const popupWindow = document.querySelector(".popup-window");

// Icons Arrow/Cross (Data Boxes)
const iconBoxArrow = document.querySelector(".icon-box-arrow");
const iconBoxCross = document.querySelector(".icon-box-cross");
const iconBoxArrowSz = document.querySelector(".icon-box-arrow.size");
const iconBoxCrossSz = document.querySelector(".icon-box-cross.size");
const iconBoxArrowBe = document.querySelector(".icon-box-arrow.beschr");
const iconBoxCrossBe = document.querySelector(".icon-box-cross.beschr");

// Data Boxes Container
const technDataCont = document.querySelector(".popup-main-data-cont.car");
const sizeDataCont = document.querySelector(".popup-main-data-cont.size");
const beschrDataCont = document.querySelector(".popup-main-data-cont.beschr");

// Data Boxes
const technDatenSize = document.querySelector(".technische-daten.size");
const technDatenData = document.querySelector(".technische-daten.daten");
const technDatenBeschr = document.querySelector(".technische-daten.beschr");

// Animated Icon (Slides To Right) - Data Boxes
const iconToAnimate = document.querySelector(".daten-icon img");
const iconToAnimateSz = document.querySelector(".daten-icon.size img");
const iconToAnimateBe = document.querySelector(".daten-icon.beschr img");

// Icons (Data Boxes - Lines, Car, 4Arrows)
const dataIconCar = document.querySelector(".daten-icon.car");
const dataIconSize = document.querySelector(".daten-icon.size");
const dataIconBeschr = document.querySelector(".daten-icon.beschr");

// Data That Slides In When Active (Data Boxes) 
const slideInDataTech = document.querySelector(".slide-in-data.tech");
const slideInDataSize = document.querySelector(".slide-in-data.size");
const slideInDataBeschr = document.querySelector(".slide-in-data.beschr");

// Hidden Icons (Data Boxes)
const hiddenIconCar = document.querySelector(".popup-car-data img.hidden.car");
const hiddenIconSize = document.querySelector(".popup-size-data img.hidden.size");
const hiddenIconBeschr = document.querySelector(".popup-beschr-data img.hidden.beschr");


// -------------------------------------------------------------- DATA BOX - TOGGLE FUNCTIONS

// Toggles Technische Daten Container
const toggleTechnischeDatenCont = () => {
    // toggles arrow/cross icon
    iconBoxArrow.classList.toggle("invisible");
    iconBoxCross.classList.toggle("invisible");
    // toggles extension for data cont
    technDataCont.classList.toggle("extended");
    iconToAnimate.classList.toggle("icon-ani");
    technDatenData.classList.toggle("collapsed");
    dataIconCar.classList.toggle("invisible");
    // 
    slideInDataTech.classList.toggle("slide-in");
    hiddenIconCar.classList.toggle("slide-in");
}


// Toggles Maẞe Daten Container
const toggleSizeDatenCont = () => {
    // toggles arrow/cross icon
    iconBoxArrowSz.classList.toggle("invisible");
    iconBoxCrossSz.classList.toggle("invisible");
    // toggles extension for data cont
    sizeDataCont.classList.toggle("extended");
    iconToAnimateSz.classList.toggle("icon-ani");
    technDatenSize.classList.toggle("collapsed");
    dataIconSize.classList.toggle("invisible");
    
    slideInDataSize.classList.toggle("slide-in");
    hiddenIconSize.classList.toggle("slide-in");
}


// Toggles Maẞe Daten Container
const toggleBeschrDatenCont = () => {
    // toggles arrow/cross icon
    iconBoxArrowBe.classList.toggle("invisible");
    iconBoxCrossBe.classList.toggle("invisible");
    // toggles extension for data cont
    beschrDataCont.classList.toggle("extended");
    iconToAnimateBe.classList.toggle("icon-ani");
    technDatenBeschr.classList.toggle("collapsed");
    dataIconBeschr.classList.toggle("invisible");
    
    slideInDataBeschr.classList.toggle("slide-in");
    hiddenIconBeschr.classList.toggle("slide-in");
}


// -------------------------------------------------------------- IMAGE FUNCTIONS (SLIDERS)

// Toggles Image Popup Window
const toggleImgPopupWindow = () => document.querySelector(".img-popup-window").classList.toggle("d-none");


// All Clickable Sub Images
const allSubImages = document.querySelectorAll(".sub-img");

        
// All Sub Images -> Changes Main Image by Clicking + active class
[...allSubImages].forEach(asi => asi.addEventListener("click", function() {
    [...allSubImages].forEach(i => i.classList.remove("active"));
    document.querySelector(".main-img img").src = this.src;
    this.classList.add("active");
}));


// Select Image By Clicking On Slider Images 
const allSliderImgs = document.querySelectorAll(".img-arrow-slider-cont img");
[...allSliderImgs].forEach(asi => asi.addEventListener("click", selectImg));

function selectImg() { 
    document.querySelector(".main-img img").src = this.src;  
}


// Closes Img-Popup Window If User Clicks on Bg
const imgPopupBg = document.querySelector(".img-popup-bg");
imgPopupBg.addEventListener("click", toggleImgPopupWindow);


// Image Slider
let imgIndex = 0;
const allSlidingImgs = document.querySelectorAll(".img-arrow-slider-cont img");

const imgSlider = (n) => {
    let amtImgs = allSlidingImgs.length - 1;
    
    // 
    imgIndex = imgIndex + n;
    if (imgIndex > amtImgs) {
        imgIndex = 0;
    } else if (imgIndex < 0) {
        imgIndex = amtImgs;
    }
    //
    allSlidingImgs.forEach(asi => {
        asi.classList.remove("selected");
    });
    allSlidingImgs[imgIndex].classList.add("selected");
}
