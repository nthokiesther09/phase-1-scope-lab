
var customerName = "bob";
const LeastFavoriteCustomer = "Tom";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = "not bob";
  return bestCustomer;
}
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
    LeastFavoriteCustomer = "bob";
  }

