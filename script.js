function handelQuantityChange(type, isIncrease) {
  let quantityInput = document.getElementById(type + "-count");
  let quantityCount = parseInt(quantityInput.value);
  let quantityNewCount = quantityCount;
  if (isIncrease == true) {
    quantityNewCount = quantityCount + 1;
  }
  if (isIncrease == false && quantityCount > 0) {
    quantityNewCount = quantityCount - 1;
  }
  quantityInput.value = quantityNewCount;
  calculateAllAmount();
}
/*------------get user input and convert it to integer-------------*/
function getInput(type) {
  const quantityInput = document.getElementById(type + "-count");
  const quantityCount = parseInt(quantityInput.value);
  return quantityCount;
}
/*----------- calculate all the amount inside the function--------------------*/
function calculateAllAmount() {
  let firstClassSubTotal = getInput("firstClass");
  let economySubTotal = getInput("Economy");
  let subTotal = firstClassSubTotal * 150 + economySubTotal * 100;
  let tax = subTotal * 0.1;
  let total = subTotal + tax;
  displayAllData(subTotal, tax, total);
}
/*------------Display all the amount inside the function------------------*/
function displayAllData(subTotal, tax, total) {
  document.getElementById("subtotal-price").innerText = "$" + subTotal;
  document.getElementById("total-tax").innerText = "$" + tax;
  document.getElementById("grand-total").innerText = "$" + total;
  document.getElementById("first-cls").innerText = " " + getInput("firstClass");
  document.getElementById("economy-cls").innerText = getInput("Economy");
  document.getElementById("subtotal").innerText = " $" + subTotal;
  document.getElementById("tax").innerText = " $" + tax;
  document.getElementById("total").innerText = "$" + total;
}
