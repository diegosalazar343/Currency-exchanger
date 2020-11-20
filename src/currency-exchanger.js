export class CurrencyObj {
  constructor(worldCurrency, inputAmount, moneyRate) {
    this.USD = moneyRate.conversion.USD,
    this.AUD = moneyRate.conversion.AUD,
    this.CAD = moneyRate.conversion.CAD,
    this.CHF = moneyRate.conversion.CHF,
    this.EUR = moneyRate.conversion.EUR,
    this.GBP = moneyRate.conversion.GBP,
    this.JPY = moneyRate.conversion.JPY,
    this.worldCurrency = worldCurrency;
    this.inputAmount = inputAmount;
    this.outputAmount = this.currencyResults(this.worldCurrency, this.inputAmount)
  }

  currencyResults(worldCurrency, inputAmount) {
    let value = this[worldCurrency];
    let results = value*inputAmount;
    return result;
  }
}
