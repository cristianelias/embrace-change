class Price {
  constructor(amount) {
    this.amount = amount;
  }

  _getSymbol(currency) {
    const dollarSymbol = "$";
    const symbols = {
      USD: dollarSymbol,
      EUR: "€",
      ARS: "$",
    };

    return symbols[currency.toUpperCase()] || dollarSymbol;
  }

  _shortenPrice() {
    const billion = 1000000000;
    const million = 1000000;

    const formatter = (ref, unit) => {
      var abs = Math.abs(this.amount);
      var sign = Math.sign(this.amount);

      return abs > ref - 1 ? sign * (abs / ref).toFixed(2) + unit : sign * abs;
    };

    if (this.amount >= billion) {
      return formatter(billion, "B");
    } else if (this.amount >= million) {
      return formatter(million, "M");
    } else {
      return this.amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }

  getFormattedPrice(currencyId) {
    const shortened = this._shortenPrice();
    return `${this._getSymbol(currencyId)} ${shortened}`;
  }
}

export default Price;
