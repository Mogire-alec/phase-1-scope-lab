// Write your solution in this file!
var customerName = "bob"; // Globally scoped variable

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob"; // Declares and assigns a new global variable
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Karen";

function changeLeastFavoriteCustomer() {
    // This will throw an error because `leastFavoriteCustomer` is a constant
    leastFavoriteCustomer = "not Karen"; 
}


