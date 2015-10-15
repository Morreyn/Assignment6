/*----------------------------------------------
    SUBJECT: COMM644 Assignment 6
    AUTHOR: Misty Morreyn
------------------------------------------------*/

function $(id) {
    "use strict";
    return document.getElementById(id);
}

/*Shows main section*/

function showSection() {
    "use strict";
    var mainSection = $("main");
    mainSection.style.display = "block";
}

var startButton = $("start_button");
startButton.addEventListener("click", showSection, false);

/*Shows "other" option of Address Type*/

var addressType = $("address_type");
addressType.addEventListener("change", addressTypeOther, false);

function addressTypeOther() {
    "use strict";
    var otherBox = $("other_box");
    if (addressType.value === "other") {
        otherBox.style.display = "block";
    } else {
        otherBox.style.display = "hidden";
    }
}

/*Delivery Information Validation*/

function formValidation() {
    "use strict";
    var name = $("name"),
        deliveryStreet = $("delivery_street_address"),
        deliveryCity = $("delivery_city"),
        deliveryState = $("delivery_state"),
        deliveryZip = $("delivery_zip"),
        phone = $("phone"),
        email = $("e-mail");
    if (name.value !== )
}

var finalButton = $("form_submit");
finalButton.addEventListener("click", formValidation, false);


