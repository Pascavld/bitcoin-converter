class UI {
    constructor() {
        this.usd = document.getElementById("usd");
        this.bitcoin = document.getElementById("bitcoin");
    }

    paint(bitcoin) {
        let bitcoinString = bitcoin.bpi.USD.rate;

        let bitcoinStringConvert = bitcoinString.replace(/,/g, ".");

        let bitcoinNumber = parseFloat(bitcoinStringConvert);

        let bitcoinPrice = this.bitcoin.value * bitcoinNumber;

        bitcoinPrice = bitcoinPrice.toFixed(3);

        bitcoinPrice = bitcoinPrice.toString();

        let finalPrice = bitcoinPrice.replace(/\./g, ",");

        this.bitcoin.value = "";
        this.usd.value = finalPrice;
    }
}
