const bitcoin = new Bitcoin();

const ui = new UI();

document.getElementById("main-form").addEventListener("submit", function (e) {
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "block";

    let bitcoinValue = document.getElementById("bitcoin").value;

    if (bitcoinValue !== "") {
        setTimeout(getPrice, 1000);
    } else {
        showError("Please enter a valid number!");
    }

    e.preventDefault();
});

function getPrice() {
    bitcoin
        .getBitcoinPrice()
        .then((result) => {
            ui.paint(result);
        })
        .catch((err) => console.log(err));

    document.getElementById("results").style.display = "block";

    document.getElementById("loading").style.display = "none";
}

function showError(error) {
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "none";

    const errorDiv = document.createElement("div");

    const card = document.querySelector(".card");

    const heading = document.querySelector(".heading");

    errorDiv.className = "alert alert-danger";

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector(".alert").remove();
}
