/*----------------------------------------------
    SUBJECT: COMM644 Assignment 6
    AUTHOR: Misty Morreyn
------------------------------------------------*/

function $(id) {
    "use strict";
    return document.getElementById(id);
}

/*Shows main section*/

/*function showSection() {
    "use strict";
    var mainSection = $("main");
    mainSection.style.display = "block";
    console.log("running");
}

var startButton = $("start-button");
startButton.addEventListener("click", showSection, false);*/

/*Shows "other" option of Address Type*/

var addressType = $("address-type");
addressType.addEventListener("change", addressTypeOther, false);

function addressTypeOther() {
    "use strict";
    var otherBox = $("other-box");
    if (addressType.value === "other") {
        otherBox.style.display = "block";
    } else {
        otherBox.style.display = "hidden";
    }
}

/*Validation*/

function formValidation() {
    "use strict";
/*    Delivery Information Validation*/
    var regName = /[0-9]/g,
        regState = /[:alpha:]{2}/g,
        regZip,
        regPhone,
        regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (form.name.value.length === 0 || regName.test(form.name.value) === true) {
        console.log("Error in name!");
        document.form.name.focus();
        form.name.className += " highlight";
        return false;
    } else {
        /*Not working correctly, removes ALL classes*/
        /*if (form.name.className = "highlight") {
            form.name.classList.remove("highlight");
        }*/
        
        
    }
    
    if (form.addtype.value === "other" && form.other.value.length === 0) {
        console.log("Error in Address Type!");
        document.form.other.focus();
        form.other.className += " highlight";
        return false;
    } else {

        /*Not working correctly, removes ALL classes*/
     /*   if (form.addtype.className = "highlight") {
            form.addtype.classList.remove("highlight");
        }*/
              
    }


    if (form.delivery_street_address.value.length === 0) {
        console.log("Error in Street Address!");
        document.form.delivery_street_address.focus();
        form.delivery_street_address.className += " highlight";
        return false;
    } else {
        /*console.log("Delivery Street Address is okay");*/
    }
    
    if (form.delivery_city.value.length === 0) {
        console.log("Error in City");
        document.form.delivery_city.focus();
        form.city.className += " highlight";
    } else {
        /*console.log("City is okay");*/
    }
    
    if (form.delivery_state.value.length === 0 || regState.test(form.delivery_state.value) === false) {
        console.log("Error in State");
        document.form.delivery_state.focus();
        form.delivery_state.className += " highlight";
    } else {
        console.log("State is okay");
    }
    
}

var finalButton = $("form-submit");
finalButton.addEventListener("click", formValidation, false);


