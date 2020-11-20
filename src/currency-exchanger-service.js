export default class CurrencyService {

  static currencyExchanger() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(rateService) {
      if(!rateService.ok) {
        throw Error(rateService.statusText);
      }
      return rateService.json();
    })
    .catch(function(error){
      return error;
    })
  }
}
