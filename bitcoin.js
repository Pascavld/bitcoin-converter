class Bitcoin {
    constructor() {
        this.usd = usd;
    }

    async getBitcoinPrice() {
        const price = await fetch(
            "https://api.coindesk.com/v1/bpi/currentprice.json"
        );

        const priceData = await price.json();

        return priceData;
    }
}
