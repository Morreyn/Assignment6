/*----------------------------------------------
    SUBJECT: COMM644 Assignment 6
    AUTHOR: Misty Morreyn
------------------------------------------------*/

function $(id) {
    "use strict";
    return document.getElementById(id);
}


/*Shows main section*/
var startButton = $("start-button"),
    totalBox = $("total-box"),
    mainSection = $("main");

function showSection() {
    "use strict";
    totalBox.style.display = "block";
    mainSection.style.display = "block";
}


startButton.addEventListener("click", showSection, false);

/* Shows "other" option of Address Type */

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

/* Filling Billing Area with Delivery Information */

var sameAsDelivery = $("bill_info_same");

function fillBilling() {
    "use strict";
    if (sameAsDelivery.checked === true) {
        document.form.bill_name.value = document.form.name.value;
        document.form.bill_street_address.value = document.form.delivery_street_address.value;
        document.form.bill_optional_apt.value = document.form.delivery_optional_apt.value;
        document.form.bill_city.value = document.form.delivery_city.value;
        document.form.bill_state.value = document.form.delivery_state.value;
        document.form.bill_zip.value = document.form.delivery_zip.value;
    }
    
    if (sameAsDelivery.checked === false) {
        document.form.bill_name.value = "";
        document.form.bill_street_address.value = "";
        document.form.bill_optional_apt.value = "";
        document.form.bill_city.value = "";
        document.form.bill_state.value = "";
        document.form.bill_zip.value = "";
    }
}

sameAsDelivery.addEventListener("change", fillBilling, false);


/* Populating Dough Selections */

var doughType = document.getElementById("dough");
doughType.addEventListener("click", doughSelections, false);

var handTossedPrices = {
    Small: 9.99,
    Medium: 12.99,
    Large: 14.99
};

var thinCrustPrices = {
    Medium: 11.99,
    Large: 13.99
};

var newYorkPrices = {
    Large: 9.99,
    XL: 19.99
};

var glutenFreePrices = {
    Small: 10.99
};


function doughSelections() {
    "use strict";
    var pizzaSelectionBox = $("pizza_selection"),
        pizzaSelectionDiv = $("dough_box"),
        property,
        elemento,
        opt,
        cheeseBox = $("cheese_box"),
        sauceBox = $("sauce_box"),
        toppingsBox = $("toppings_box");
    pizzaSelectionDiv.style.display = "block";
    
    pizzaSelectionBox.addEventListener("click", showCheeseSauceToppings, false);
    
    function showCheeseSauceToppings() {
        cheeseBox.style.display = "block";
        sauceBox.style.display = "block";
        toppingsBox.style.display = "block";
    }
    
    if (document.form.dough.value === "hand tossed") {
        
        Object.getOwnPropertyNames(handTossedPrices).forEach(function (val, obj) {
            elemento = document.createElement("option");
            elemento.textContent = val + " ($" + handTossedPrices[val] + ")";
            elemento.value = handTossedPrices[val];
            pizzaSelectionBox.appendChild(elemento);
        });

    } else if (document.form.dough.value === "thin crust") {
        Object.getOwnPropertyNames(thinCrustPrices).forEach(function (val, obj) {
            elemento = document.createElement("option");
            elemento.textContent = val + " ($" + thinCrustPrices[val] + ")";
            elemento.value = thinCrustPrices[val];
            pizzaSelectionBox.appendChild(elemento);
        });
        
    } else if (document.form.dough.value === "new york style") {
        Object.getOwnPropertyNames(newYorkPrices).forEach(function (val, obj) {
            elemento = document.createElement("option");
            elemento.textContent = val + " ($" + newYorkPrices[val] + ")";
            elemento.value = newYorkPrices[val];
            pizzaSelectionBox.appendChild(elemento);
        });
        
    } else if (document.form.dough.value === "gluten free") {
        Object.getOwnPropertyNames(glutenFreePrices).forEach(function (val, obj) {
            elemento = document.createElement("option");
            elemento.textContent = val + " ($" + glutenFreePrices[val] + ")";
            elemento.value = glutenFreePrices[val];
            pizzaSelectionBox.appendChild(elemento);
        });
    }
}



/* Delivery and Pizza Build Validation*/

function formValidation() {
    "use strict";

    var regName = /^[0-9]/g,
        regState = /^([a-zA-Z]){2}$/,
        regZip = /^[0-9]{5}(?:-[0-9 ]{4})?$/,
        regPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
        regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        i,
        validDough = false,
        doughRadios = document.getElementsByName("dough");

    if (document.form.name.value.length === 0 || regName.test(document.form.name.value) === true) {
        window.console.log("Error in name!");
//        document.form.name.focus();
        document.form.name.className += " highlight";
        return false;
    } else {
        /*Not working correctly, removes ALL classes*/
        /*if (form.name.className = "highlight") {
            form.name.classList.remove("highlight");
        }*/
        
        
    }
    
    if (document.form.addtype.value === "other" && document.form.other.value.length === 0) {
        window.console.log("Error in Address Type!");
//        document.form.other.focus();
        document.form.other.className += " highlight";
        return false;
    }

    if (document.form.delivery_street_address.value.length === 0) {
        window.console.log("Error in Street Address!");
        /*document.form.delivery_street_address.focus();*/
        document.form.delivery_street_address.className += " highlight";
        return false;
    }
    
    if (document.form.delivery_city.value.length === 0) {
        window.console.log("Error in City");
        /*document.form.delivery_city.focus();*/
        document.form.delivery_city.className += " highlight";
        return false;
    }
   
    if (document.form.delivery_state.value.length === 0 || regState.test(document.form.delivery_state.value) === false) {
        window.console.log(document.form.delivery_state.value);
        window.console.log("Error in State");
        document.form.delivery_state.focus();
        document.form.delivery_state.className += " highlight";
        return false;
    }
    
    if (document.form.delivery_zip.value.length === 0 || regZip.test(document.form.delivery_zip.value) === false) {
        window.console.log("Error in Zip");
        document.form.delivery_zip.focus();
        document.form.delivery_zip.className += " highlight";
        return false;
    }
   
    if (document.form.phone.value.length === 0 || regPhone.test(document.form.phone.value) === false) {
        window.console.log("Error in Phone");
        document.form.phone.focus();
        document.form.phone.className += " highlight";
        return false;
    }
     
    if (document.form.email.value.length === 0 || regEmail.test(document.form.email.value) === false) {
        window.console.log("Error in Email");
        document.form.email.focus();
        document.form.email.className += " highlight";
        return false;
    }
    
    for (i = 0; i < doughRadios.length; i++) {
        if (doughRadios[i].checked === true && !validDough) {
            validDough = true;
        }
    }
    
    if (!validDough) {
        window.alert("Please pick a dough option");
        return false;
    }

    return true;
}

/*Billing Information Validation*/

function billingValidation() {
    "use strict";
    var regName = /^[0-9]/g,
        regState = /^([a-zA-Z]){2}$/,
        regZip = /^[0-9]{5}(?:-[0-9 ]{4})?$/,
        regCVC = /^[0-9]{3,4}$/,
        currentDate,
        currentMonth,
        expirationMonth,
        currentYear,
        expirationYear;
    
    if (sameAsDelivery.checked !== true) {
        if (document.form.bill_name.value.length === 0 || regName.test(document.form.bill_name.value) === true) {
            window.console.log("Error in billing name!");
            document.form.bill_name.className += " highlight";
            return false;
        }
        if (document.form.bill_street_address.value.length === 0) {
            window.console.log("Error in billing street address!");
            document.form.bill_street_address.className += " highlight";
            return false;
        }

        if (document.form.bill_city.value.length === 0) {
            window.console.log("Error in billing city");
            document.form.bill_city.className += " highlight";
            return false;
        }

        if (document.form.bill_state.value.length === 0 || regState.test(document.form.bill_state.value) === false) {
            window.console.log("Error in billing state");
            document.form.bill_state.focus();
            document.form.bill_state.className += " highlight";
            return false;
        }

        if (document.form.bill_zip.value.length === 0 || regZip.test(document.form.bill_zip.value) === false) {
            window.console.log("Error in billing zip");
            document.form.bill_zip.focus();
            document.form.bill_zip.className += " highlight";
            return false;
        }
    }
    
    /*Credit Card Number Validation*/
        
    if (document.form.cc_number.value.length === 0) {
        window.console.log("Error in credit card number");
        document.form.cc_number.focus();
        document.form.cc_number.className += " highlight";
        return false;
    }
        
    /*CVC validation*/

    if (document.form.cvc.value.length === 0 || regCVC.test(document.form.cvc.value) === false) {
        window.console.log("Error in CVC code");
        document.form.cvc.focus();
        document.form.cvc.className += " highlight";
        return false;
    }

    /*CC Expiration Date Validation*/
    
    currentDate = new Date();
    currentMonth = currentDate.getMonth() + 1;
    expirationMonth = parseInt(document.form.bill_month.value, 10);
    currentYear = currentDate.getFullYear();
    expirationYear = parseInt(document.form.bill_year.value, 10);

    if (expirationYear === currentYear || expirationYear <= currentYear) {
        if (expirationMonth <= currentMonth) {
            window.alert("Your card is expired. Please put in another card.");
        } else if (expirationMonth > currentMonth) {
            window.console.log("Card expiration is valid");
        }
    } else if (expirationYear >= currentYear) {
        window.console.log("Card expiration is valid");
    }

}





/*Build Your Order Confirmation*/

function finishedBuildingPizza() {
    "use strict";
    var billingInfoDiv = $("billing_info_div"),
        result,
        conBox = window.confirm('Press "OK" if you\'re finished building your pizza');
    window.console.log(conBox);
    
    if (conBox === false) {
        formValidation();
    } else if (conBox === true) {
        window.console.log(result + " this is working");
        result = formValidation();
        if (result === true) {
            billingInfoDiv.style.display = "block";
            finalButton.style.display = "block";
            finishedBuildingPizzaButton.setAttribute("class", "mainhide");
        }
    }
}

/*Calculate Totals*/

function calTotal() {
    "use strict";
    var toppingChecks = document.getElementsByName("toppings"),
        i,
        doughType = document.form.pizza_selection.value,
        total = $("total"),
        totalCalc = 0.00;
    

    totalCalc += parseFloat(doughType);
    
    if (document.form.cheese.value === "cheese-extra") {
        totalCalc += 2.99;
    }
    
    if (document.form.cheese.value === "cheese-double") {
        totalCalc += 3.99;
    }
    
    if (document.form.sauce.value === "sauce-hearty") {
        totalCalc += 0.99;
    }
    
    if (document.form.sauce.value === "sauce-bbq") {
        totalCalc += 1.99;
    }
    
    for (i = 0; i < toppingChecks.length; i++) {
        if (toppingChecks[i].checked === true) {
            totalCalc += 0.99;
        }
    }

    total.value = totalCalc.toFixed(2).toString();
}

var buildPizzaSection = $("build-order-section");
buildPizzaSection.addEventListener("change", calTotal, false);

/*'Finished Building Pizza' Button*/

var finishedBuildingPizzaButton = $("fin-build-btn");
finishedBuildingPizzaButton.addEventListener("click", finishedBuildingPizza, false);

/*Form Submit Button*/

var finalButton = $("form-submit");
finalButton.addEventListener("click", billingValidation, false);


