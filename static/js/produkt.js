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


// ------------------------------------------------------------------ FILTER BY CAR TYPE
        
// Filter Produkte By Car Category
const filterProdukte = (e, category) => {
    let allProductCards = document.querySelectorAll(".card-wrapper");
    
    // removes all d-none classes (reveals all cards)
    const revealAllCards = () => [...allProductCards].forEach(pc => pc.classList.remove("d-none"));
    
    // Changes all Icon imgs to black
    const turnAllIconsBlack = () => {
        let allIconImgs = document.querySelectorAll(".p-filter img");
        allIconImgs.forEach(fi => {
            console.log(fi)
            if (fi.classList.contains("red")) {
                fi.classList.add("d-none");
            } else {
                fi.classList.remove("d-none");
            } 
        });
    }
    
    // Changes clicked icon to red
    const turnClickedIconRed = () => {
        let filterIcons = e.target.parentElement.children;
        [...filterIcons].forEach(fi => fi.classList.toggle("d-none"));
    }   
    
    revealAllCards();
    turnAllIconsBlack();
                
    // returns funciton if user selects same icon that is active
    if (selectedFilterCategory === category) {
        selectedFilterCategory = null;
        return;
    } else {
        turnClickedIconRed();
        selectedFilterCategory = category;

        // all cards not including the filtered category
        let filteredCards = [...allProductCards].filter(c=> c.dataset.category !== category);

        // makes outfiltered cards invisible
        [...filteredCards].forEach(fc => fc.classList.add("d-none"));
    }
}


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
