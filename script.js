function showMessage() {
    let drink = document.getElementById("drinks").value;
    let drinkQty = document.getElementById("drinkQty").value;

    let food = document.getElementById("foods").value;
    let foodQty = document.getElementById("foodQty").value;

    let total = (drink * drinkQty) + (food * foodQty);

    document.getElementById("totalText").innerText = "Total: ₱" + total;
    alert("Thank you for purchase!\n\nYour total is ₱" + total);
}
